<template>
    <div class="about-page">
        <Nav></Nav>
        <div class="body">
            <div class="lists">
                <div class="left-item-b"></div>
                <div class="lists-left">
                    <div class="left-item img">
                        <a href="https://news.yahoo.co.jp/" target="_blank">
                            <img src="../../assets/imgs/yahoo.png" alt="">
                        </a>
                    </div>
                    <div class="left-item">
                        <p class="title">检索</p>
                        <div style="margin-top: 10px;">
                            <el-input placeholder="请输入标题关键词" v-model="searchParams.title"></el-input>
                        </div>
                        <div class="btns" style="margin-top: 10px;">
                            <el-button size="small" type="primary" @click="handleSearchIt">搜索</el-button>
                            <el-button size="small" @click="isShowDialog = true; resetParams()">聚合</el-button>
                            <el-button size="small" type="danger" @click="resetAll">重制</el-button>
                        </div>
                        <p class="content" style="margin-top: 5px;">当前已聚合: {{ Object.keys(searchParams).filter(pm => searchParams[pm] !== '' && searchParams[pm] !== 0).length }} 条
                        </p>
                    </div>
                </div>
                <div class="lists-mid">
                    <template v-if="list.length > 0">
                        <ListItem v-for="item in list" :key="item.newsImage" :title="item.newsTitle"
                            :content="item.newsContent" :img-url="item.newsImage" :time="item.newsTime"></ListItem>
                    </template>
                    <template v-if="list.length == 0">
                        <Loading></Loading>
                    </template>
                </div>

                <div class="lists-right">
                    <div class="right-item love">
                        <div class="left">
                            <p class="title">{{ getTimeNode() + '好!' }}</p>
                            <p class="content">点亮您在即时新闻的每一天</p>
                        </div>
                        <div class="right">
                            <Love style="transform: translateY(10px);"></Love>
                        </div>
                    </div>
                    <div class="right-item">
                        <p class="title">新闻时间</p>
                        <Calender :dot-days="doyDays" @change="handleChangeNewsTime" style="margin-top: 10px;"
                            :current="newsTime" format="YYYY-MM-DD"></Calender>
                    </div>
                </div>
                <div class="lists-right-b"></div>
            </div>
            <Loading v-if="isLoading"></Loading>
        </div>
        <div class="to-top">
            <Top></Top>
        </div>
        <el-dialog width="40%" title="设置聚合条件" v-model="isShowDialog">
            <el-form>
                <el-form-item label="聚合条件:">
                    <el-select v-model="userSelectVal" placeholder="选择聚合条件">
                        <el-option v-for="op in options" :label="op.label" :value="op.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="条件设置" v-if="[0, 1, 2].includes(userSelectVal)">
                    <template v-if="userSelectVal == 0">
                        <el-date-picker style="width: 30%;" v-model="addParams.time" type="datetimerange"
                            start-placeholder="Start date" end-placeholder="End date" format="YYYY-MM-DD"
                            date-format="YYYY/MM/DD ddd" />
                    </template>
                    <template v-if="userSelectVal == 1">
                        <el-input placeholder="新闻内容包含的关键词" v-model="addParams.content" style="width: 60%;"></el-input>
                    </template>
                    <template v-if="userSelectVal == 2">
                        是否全局搜索？
                    </template>
                    <el-button style="margin-left: 10px;" type="primary" size="small"
                        @click="confirmToAdd(userSelectVal)">确认添加</el-button>
                </el-form-item>
                <el-form-item label="当前聚合集:">
                    <template v-if="aggregationSet.length == 0">
                        <p>无</p>
                    </template>
                    <template v-else>
                        <div class="tag">
                            <el-tag v-for="(item, index) in aggregationSet" :key="item.content">
                                {{ item.content }}
                            </el-tag>
                        </div>
                    </template>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="handleCancelToAdd">取消</el-button>
                    <el-button type="primary" @click="handleConfirmToAdd">
                        确认
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>


<script setup>
import Nav from './components/Nav.vue';
import ListItem from './components/ListItem.vue';
import Loading from './components/Loading.vue'
import Top from './components/Top.vue'
import { showNewsReq, searchNewsReq } from '@/api/news'
import { useRoute } from 'vue-router';
import useCategoryStore from '../../store/modules/useCategoryStore';
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { getTimeNode, getTodayAndYesterday, getDatesInRange } from '../../utils/time';
import Calender from './components/Calender.vue'
import Love from './components/Love.vue'
import dayjs from 'dayjs';

const route = useRoute()
const categoryStore = useCategoryStore()
const newsLanguage = ref(0)
const newsTime = ref('')
const list = ref([])
const currentNewsNum = ref(10)
let isDown = false
let isSearch = false
const isLoading = ref(false)
const doyDays = ref(["2023-12-17"])
const isShowDialog = ref(false)
const aggregationSet = ref([])
const userSelectVal = ref()
const options = ref([
    {
        label: '新闻时间范围',
        value: 0,
    },
    {
        label: '新闻内容体',
        value: 1
    },
    {
        label: '全局搜索',
        value: 2
    }
])
const addParams = ref({
    content: '',
    time: [],
    isAll: false
})
const searchParams = ref({
    title: '',
    isAll: 0,
    content: '',
    startTime: '',
    endTime: ''
})

const getInitNews = async () => {
    list.value = []
    const params = {
        newsType: categoryStore.map[route.params.category].value,
        newsLanguage: newsLanguage.value,
        initSize: 10,
        newsTime: newsTime.value
    }
    const res = await showNewsReq(params)
    list.value = res.data.newsList
}

const handleChangeNewsTime = (val) => {
    newsTime.value = val.value
    // getInitNews()
    resetAll()
}

watch(() => route.params.category, () => {
    // getInitNews()
    resetAll()
})

const addMoreNews = async () => {
    const params = {
        newsType: categoryStore.map[route.params.category].value,
        newsLanguage: newsLanguage.value,
        currentNewsNum: currentNewsNum.value,
        newsTime: newsTime.value,
        addSize: 10
    }
    const res = await showNewsReq(params)
    list.value = [...list.value, ...res.data.newsList]
    currentNewsNum.value += 10
}

const handleScroll = async () => {

    const scrollElement = document.documentElement || document.body;
    if (scrollElement.scrollTop + scrollElement.clientHeight >= scrollElement.scrollHeight && !isDown && list.value.length > 0 && !isSearch) {
        isDown = true
        isLoading.value = true
        await addMoreNews();
        isDown = false
        isLoading.value = false
    }

}

const format = (str) => {
    return dayjs(str).format('YYYY-MM-DD')
}

const confirmToAdd = async (type) => {
    const res = aggregationSet.value.find(item => item.type === type)
    if (res) {
        type === 0 ? res.content = `${format(addParams.value.time[0])}#${format(addParams.value.time[1])}` :
            type === 1 ? res.content = '新闻体' + addParams.value.content :
                type === 2 ? res.content = '全局搜索' :
                    ''
    } else {
        aggregationSet.value.push({
            type,
            content: type === 0 ? `${format(addParams.value.time[0])}#${format(addParams.value.time[1])}` :
                type === 1 ? '新闻体' + addParams.value.content :
                    type === 2 ? '全局搜索' :
                        ''
        })
    }
}

const searchReq = async () => {
    isSearch = true
    list.value = []
    const params = {
        newsType: categoryStore.map[route.params.category].value
    }
    Object.assign(params, searchParams.value)
    const res = await searchNewsReq(params)
    list.value = res.data.newsList
    resetParams()
}

const handleSearchIt = () => {
    searchReq()
}


const handleCancelToAdd = () => {
    isShowDialog.value = false
}

const handleConfirmToAdd = () => {
    aggregationSet.value.forEach(item => {
        if (item.type === 0) {
            searchParams.value.startTime = `${format(addParams.value.time[0])}`
            searchParams.value.endTime = `${format(addParams.value.time[1])}`
        } else if (item.type === 1) {
            searchParams.value.content = item.content
        } else if (item.type === 2) {
            searchParams.value.isAll = 1
        }
    })
    isShowDialog.value = false
}

const resetParams = () => {
    userSelectVal.value = ''
    aggregationSet.value = []
    addParams.value = {
        content: '',
        time: [],
        isAll: false
    }
}

const resetAll = () => {
    resetParams()
    searchParams.value = {
        title: '',
        isAll: 0,
        content: '',
        startTime: '',
        endTime: ''
    }
    isSearch = false
    getInitNews()
}

onMounted(async () => {
    const [today, yesterday] = getTodayAndYesterday()
    doyDays.value = getDatesInRange("2023-12-01", yesterday)
    window.addEventListener('scroll', handleScroll, true);
    await getInitNews()
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
})

</script>


<style scoped lang="scss">
.about-page {
    height: 100%;
    width: 100%;
    position: relative;

    .tag {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .to-top {
        position: fixed;
        bottom: 20px;
        left: 10px;
        height: fit-content;
    }

    .body {
        min-height: 100%;
        width: 100%;
        background-color: #f2f3f5;
        padding: 10px 0;
        padding-top: 70px;

        .lists {
            margin: 0 auto;
            width: 85%;
            display: flex;
            gap: 20px;
            position: relative;

            .lists-left {
                height: fit-content;
                position: fixed;
                right: calc(4.2 / 5.2 * (100% - 40px));
                width: 220px;

            }

            .left-item-b {
                flex: 1;
                height: fit-content;
            }


            .lists-mid {
                flex: 3;
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .lists-right-b {
                flex: 1.2;
                height: fit-content;
            }

            .lists-right {
                flex: 1.2;
                height: fit-content;
                position: fixed;
                left: calc(4 / 5.2 * (100% - 40px));

                .love {
                    display: flex;
                    flex-wrap: nowrap;
                    align-items: center;

                    .right {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                }
            }

            .left-item {
                width: 100%;
                background-color: white;
                padding: 20px;
                border-radius: 5px;
                margin-bottom: 10px;

                .title {
                    @include ti;
                }

                .content {
                    @include ct;
                }
            }

            .img {
                padding: 0;

                img {
                    width: 100%;
                }
            }

            .right-item {
                width: 100%;
                background-color: white;
                padding: 20px;
                margin-bottom: 10px;
                border-radius: 5px;

                .left {
                    width: 70%
                }

                .right {
                    width: 30%;
                }

                .title {
                    @include ti;
                }

                .content {
                    @include ct;
                }
            }
        }
    }
}
</style>