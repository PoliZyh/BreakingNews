<template>
    <div class="article-page">
        <!-- <Header></Header> -->
        <component :is="isDark ? NightHeader : Header"></component>
        <div class="art">
            <div class="ops">
                <div class="ops-item" @click="handleTran">
                    <el-tooltip effect="dark" content="翻译" placement="right-start">
                        <svg t="1703053401979" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="3822" width="25" height="25">
                            <path
                                d="M640 416h256c35.36 0 64 28.48 64 64v416c0 35.36-28.48 64-64 64H480c-35.36 0-64-28.48-64-64V640h128c53.312 0 96-42.976 96-96V416zM64 128c0-35.36 28.48-64 64-64h416c35.36 0 64 28.48 64 64v416c0 35.36-28.48 64-64 64H128c-35.36 0-64-28.48-64-64V128z m128 276.256h46.72v-24.768h67.392V497.76h49.504V379.488h68.768v20.64h50.88V243.36H355.616v-34.368c0-10.08 1.376-18.784 4.16-26.112a10.56 10.56 0 0 0 1.344-4.16c0-0.896-3.2-1.792-9.6-2.72h-46.816v67.36H192v160.896z m46.72-122.368h67.392v60.48h-67.36V281.92z m185.664 60.48h-68.768V281.92h68.768v60.48z m203.84 488l19.264-53.632h100.384l19.264 53.632h54.976L732.736 576h-64.64L576 830.4h52.256z m33.024-96.256l37.12-108.608h1.376l34.368 108.608h-72.864zM896 320h-64a128 128 0 0 0-128-128v-64a192 192 0 0 1 192 192zM128 704h64a128 128 0 0 0 128 128v64a192 192 0 0 1-192-192z"
                                :fill="isDark ? '#fff' : '#333333'" p-id="3823"></path>
                        </svg>
                    </el-tooltip>
                </div>
                <div class="ops-item" @click="read">
                    <el-tooltip effect="dark" content="在线阅读" placement="right-start">
                        <svg t="1703053700264" class="icon" viewBox="0 0 1059 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="4877" width="25" height="25">
                            <path
                                d="M215.573333 925.191111c-40.106667-25.114074-65.054815-71.857778-65.054814-122.097778V114.133333h-36.740741c-62.743704 0-113.777778 55.620741-113.777778 124.005926v661.854815c0 68.373333 51.045926 124.005926 113.777778 124.005926h259.555555zM512.568889 114.133333h1.185185v82.666667h-1.185185z"
                                :fill="isDark ? '#fff' : '#333333'" p-id="4878"></path>
                            <path
                                d="M528.983704 113.576296L364.728889 13.57037c-28.977778-18.145185-63.537778-18.085926-92.444445 0.154074-28.693333 18.10963-45.831111 50.417778-45.831111 86.435556v660.278519c0 50.204444 24.888889 96.983704 65.031111 122.074074L526.008889 1024h2.974815zM945.777778 114.133333H605.76V1024h340.017778c62.743704 0 113.777778-55.632593 113.777778-124.005926V238.139259c0-68.385185-51.045926-124.005926-113.777778-124.005926z"
                                :fill="isDark ? '#fff' : '#333333'" p-id="4879"></path>
                        </svg>
                    </el-tooltip>
                </div>
                <div class="ops-item" @click="isShowQR = true">
                    <el-tooltip effect="dark" content="分享" placement="right-start">
                        <svg t="1703053819871" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="5909" width="25" height="25">
                            <path
                                d="M517.12 5.12q92.16 0 172.544 34.816t140.288 94.72 94.72 140.288 34.816 171.52q0 92.16-34.816 172.544t-94.72 140.288-140.288 94.72-172.544 34.816l-13.312 0q-6.144 0-12.288-1.024l-4.096 0q-15.36-2.048-26.112-13.824t-10.752-28.16q0-17.408 12.288-29.696t29.696-12.288q4.096 0 12.288 2.048l1.024-1.024 11.264 0q73.728 0 139.264-28.16t114.176-76.8 76.8-114.176 28.16-139.264-28.16-139.264-76.8-113.664-114.176-76.288-139.264-28.16-139.264 28.16-113.664 76.288-76.288 113.664-28.16 139.264q0 75.776 29.696 143.36 6.144 9.216 6.144 22.528 0 17.408-12.288 29.696t-29.696 12.288q-11.264 0-19.968-4.608t-14.848-12.8q-20.48-43.008-31.744-90.624t-11.264-99.84q0-91.136 34.816-171.52t94.72-140.288 140.288-94.72 171.52-34.816zM721.92 446.464q0 41.984-15.872 79.36t-43.52 65.024-65.024 44.032-80.384 16.384q-34.816 0-66.048-10.752t-56.832-31.232q-11.264 13.312-28.672 33.28t-36.864 44.544-39.936 51.712-37.888 53.76q-25.6 38.912-47.616 79.36t-38.4 74.24q-19.456 39.936-35.84 77.824l-105.472-4.096q15.36-44.032 37.888-92.16 19.456-40.96 47.616-91.136t67.072-100.352q21.504-27.648 45.056-55.296t46.08-52.224 41.984-44.544 32.768-33.28q-28.672-48.128-28.672-104.448 0-41.984 15.872-79.36t43.52-65.024 65.024-43.52 79.36-15.872q43.008 0 80.384 15.872t65.024 43.52 43.52 65.024 15.872 79.36z"
                                p-id="5910"
                                :fill="isDark ? '#fff' : '#333333'"></path>
                        </svg>
                    </el-tooltip>
                </div>
            </div>
            <div class="content">
                <div class="title">
                    <h1>{{ news.title }}</h1>
                </div>
                <div class="title-more">
                    <span class="date">{{ time }}</span>
                    <span class="rd">
                        <svg t="1703052208761" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="2472" width="14" height="14">
                            <path
                                d="M757.3 558.5H474.4c-14.9 0-26.9-12-26.9-26.9V260.8c0-14.9 12-26.9 26.9-26.9 14.9 0 26.9 12 26.9 26.9v243.9h256c14.9 0 26.9 12 26.9 26.9 0 14.9-12 26.9-26.9 26.9z"
                                fill="#bfbfbf" p-id="2473"></path>
                            <path
                                d="M510.5 957C264.3 957 64 756.7 64 510.5S264.3 64.1 510.5 64.1 957 264.4 957 510.6C956.9 756.7 756.7 957 510.5 957z m0-839.1c-216.5 0-392.7 176.2-392.7 392.7S294 903.3 510.5 903.3s392.7-176.2 392.7-392.7S727 117.9 510.5 117.9z"
                                fill="#8a8a8a" p-id="2474"></path>
                        </svg>
                        阅读{{ Math.floor(news.content.length / 400) }}分钟
                    </span>
                    <span class="ori"><a :href="link" target="_blank">查看原文</a></span>
                </div>
                <div class="details" v-html="article">
                </div>
            </div>
        </div>
        <Share v-model:show="isShowQR"></Share>
    </div>
</template>


<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Header from '../../layouts/Header.vue';
import NightHeader from '../../layouts/NightHeader.vue';
import { getNewsDetailReq, translateNewsReq } from '@/api/news/index'
import useCategoryStore from '../../store/modules/useCategoryStore';
import Share from './components/ShareItem.vue'

const route = useRoute()
const categoryStore = useCategoryStore()
const isDark = ref(false)
const link = ref('https://news.yahoo.co.jp/articles/')
const id = ref()
const type = ref('')
const time = ref('')
const news = ref({
    title: '',
    content: ''
})
let isTran = false
const isShowQR = ref(false)

const changeTheme = () => {
    const dark = route.query.th
    isDark.value = dark === 'true' ? true : false
    if (dark === 'true') {
        document.documentElement.setAttribute('theme-mode', 'dark')
    } else {
        document.documentElement.removeAttribute('theme-mode')
    }
}

const getNews = async () => {
    const res = await getNewsDetailReq({
        newsType: categoryStore.map[type.value].value,
        newsTime: time.value,
        newsId: parseInt(id.value)
    })
    news.value.title = res.data.newsTitle
    news.value.content = res.data.newsContent
}

onMounted(() => {
    id.value = route.params.id
    link.value = link.value + route.query.link
    type.value = route.query.type
    time.value = route.query.time
    getNews()
    changeTheme()
})

const montage = (content) => {
    if (content.length > 3) {
        return `<p class="paragraph">${content}。</p>`
    } else {
        return content
    }
}

const article = computed(() => {
    if (!news.value.content) return ''
    return news.value.content.split('。 ').map(montage).join('')
})

const read = () => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = news.value.content;
    speech.lang = isTran ? 'zh-CN' : 'ja-JP'
    // let currentIndex = 0;
    // speech.addEventListener('boundary', (event) => {
    //     const { charIndex } = event;
    //     currentIndex = charIndex;
    //     // 在这里你可以根据 charIndex 做一些标记的操作
    //     console.log('Current Index:', currentIndex);
    // });
    window.speechSynthesis.speak(speech);
}

const tranNews = async () => {
    const res = await translateNewsReq({
        newsType: categoryStore.map[type.value].value,
        newsTime: time.value,
        newsId: parseInt(id.value)
    })
    news.value.title = res.data.newsTitle
    news.value.content = res.data.newsContent
}

const handleTran = () => {
    isTran ? getNews() : tranNews()
    isTran = !isTran
}

</script>


<style>
.paragraph {
    line-height: 1.6;
    padding: 20px;
    text-indent: 1em;
}
</style>

<style scoped lang="scss">
.article-page {
    width: 100%;
    height: 100%;
    -webkit-font-smoothing: unset !important;

    .art {
        width: 100%;
        min-height: calc(100% - 60px);
        background-color: var(--th-body-color);
        padding: 20px;

        .ops {
            position: fixed;
            left: 10%;
            top: 20%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;

            .ops-item {
                padding: 10px;
                background-color: var(--th-card-color);
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                box-shadow: 0 10px 10px 0px var(--th-box-shadow-color);
                cursor: pointer;
            }
        }
    }

    .content {
        height: fit-content;
        width: 60%;
        background-color: var(--th-card-color);
        margin: 0 auto;
        padding: 40px;
        padding-left: 30px;
        padding-right: 30px;
        border-radius: 5px;
        font-family: Chinese Quote, Segoe UI, Roboto, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji;
        color: var(--th-title-color);
        .title {
            font-weight: 800px;
            font-size: 2rem;
            line-height: 1.6;
            color: var(--th-title-color);
        }

        .title-more {
            padding: 20px 0px;
            display: flex;
            gap: 20px;
            font-size: 0.9rem;
            color: var(--th-content-color);
            font-weight: 400;

            .ori {
                a {
                    color: grey;
                }
            }

            .date {}

            .rd {
                display: flex;
                align-items: center;
                gap: 5px;

                .icon {
                    font-weight: 600;
                }
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .art {
        background-color: white;
        width: 100%;
    }

    .content {
        width: 100% !important;
    }

    .ops {
        display: none !important;
    }
}</style>


