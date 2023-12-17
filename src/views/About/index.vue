<template>
    <div class="about-page">
        <Nav></Nav>
        <div class="body">
            <div class="lists">
                <div class="lists-left"></div>
                <div class="lists-mid">
                    <template v-if="list.length > 0">
                        <ListItem v-for="item in list" :key="item.newsImage" :title="item.newsTitle"
                            :content="item.newsContent" :img-url="item.newsImage" :time="item.newsTime"></ListItem>
                    </template>
                </div>
                <div class="lists-right"></div>
            </div>
        </div>
    </div>
</template>


<script setup>
import Nav from './components/Nav.vue';
import ListItem from './components/ListItem.vue';
import { showNewsReq } from '@/api/news'
import { useRoute } from 'vue-router';
import useCategoryStore from '../../store/modules/useCategoryStore';
import { onBeforeUnmount, onMounted, ref } from 'vue';

const route = useRoute()
const categoryStore = useCategoryStore()
const newsLanguage = ref(0)
const newsTime = ref('')
const list = ref([])
const currentNewsNum = ref(10)

const getInitNews = async () => {
    const params = {
        newsType: categoryStore.map[route.params.category].value,
        newsLanguage: newsLanguage.value,
        initSize: 10,
        newsTime: newsTime.value
    }
    const res = await showNewsReq(params)
    list.value = res.data.newsList
}

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

const handleScroll = () => {
    const scrollElement = document.documentElement || document.body;
    if (scrollElement.scrollTop + scrollElement.clientHeight >= scrollElement.scrollHeight) {
        addMoreNews();
    }
}

onMounted(async () => {
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

    .body {
        min-height: calc(100% - 60px);
        width: 100%;
        background-color: #f2f3f5;
        padding: 10px 0;
        padding-top: 70px;

        .lists {
            margin: 0 auto;
            width: 85%;
            display: flex;
            gap: 20px;

            .lists-left {
                flex: 1;
                height: fit-content;
                background-color: white;
            }

            .lists-mid {
                flex: 3;
                background-color: white;
            }

            .lists-right {
                flex: 1.2;
                background-color: white;
                height: fit-content;
            }
        }
    }
}
</style>