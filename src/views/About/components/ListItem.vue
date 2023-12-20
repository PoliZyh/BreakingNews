<template>
    <div class="list-item-box" @click="handleRouter">
        <div class="left">
            <div class="title item">
                <span>{{ title }}</span>
            </div>
            <div class="content item">
                {{ content }}
            </div>
            <div class="icons item">
                <svg t="1702815474212" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="5087" width="16" height="16">
                    <path
                        d="M233.944615 83.180308V47.104c0-25.993846 21.346462-47.104 47.812923-47.104 26.387692 0 47.812923 21.110154 47.812924 47.104v36.076308h299.559384V47.104c0-25.993846 21.425231-47.104 47.812923-47.104 26.466462 0 47.812923 21.110154 47.812923 47.104v36.076308h62.227693c97.122462 0 176.128 77.902769 176.128 173.607384V363.913846a46.710154 46.710154 0 0 1 0 18.589539v401.723077c0 95.940923-79.163077 173.843692-176.20677 173.843692l-621.252923-0.787692C76.327385 949.011692 6.144 874.653538 6.144 784.462769v-527.753846c0-95.625846 79.005538-173.528615 176.285538-173.528615h51.515077z m0 70.892307h-51.515077C124.770462 153.993846 77.981538 200.073846 77.981538 256.787692v69.316923a49.309538 49.309538 0 0 1 2.993231 0h810.299077v-69.316923c0-56.713846-46.788923-102.872615-104.369231-102.872615h-62.227692v54.429538c0 25.993846-21.346462 47.261538-47.812923 47.261539a47.497846 47.497846 0 0 1-47.812923-47.104v-54.587077H329.570462v54.429538c0 25.993846-21.425231 47.261538-47.812924 47.261539a47.497846 47.497846 0 0 1-47.812923-47.104v-54.587077z m657.408 266.31877H81.132308l-2.993231-0.07877v364.150154c0 56.713846 46.867692 102.793846 104.369231 102.793846H786.904615c57.580308 0 104.369231-46.158769 104.369231-102.793846V420.391385z m-383.606153 347.923692h-45.686154a47.497846 47.497846 0 0 1-47.812923-47.182769c0-25.993846 21.346462-47.104 47.812923-47.104h45.686154c26.387692 0 47.812923 21.110154 47.812923 47.104a47.419077 47.419077 0 0 1-47.812923 47.182769z m-213.464616-148.164923h-45.686154a47.497846 47.497846 0 0 1-47.812923-47.182769c0-25.993846 21.346462-47.104 47.812923-47.104h45.686154c26.387692 0 47.812923 21.110154 47.812923 47.104 0 26.072615-21.425231 47.182769-47.812923 47.182769z m213.464616 0h-45.686154a47.497846 47.497846 0 0 1-47.812923-47.182769c0-25.993846 21.346462-47.104 47.812923-47.104h45.686154c26.387692 0 47.812923 21.110154 47.812923 47.104 0 26.072615-21.425231 47.182769-47.812923 47.182769z m212.91323 0h-45.686154a47.497846 47.497846 0 0 1-47.812923-47.182769c0-25.993846 21.425231-47.104 47.812923-47.104h45.686154c26.466462 0 47.891692 21.110154 47.891693 47.104 0 26.072615-21.425231 47.182769-47.891693 47.182769z m-426.377846 148.086154h-45.686154a47.497846 47.497846 0 0 1-47.812923-47.104c0-25.993846 21.346462-47.104 47.812923-47.104h45.686154c26.387692 0 47.812923 21.110154 47.812923 47.104a47.419077 47.419077 0 0 1-47.812923 47.182769z m426.377846 0h-45.686154a47.497846 47.497846 0 0 1-47.812923-47.104c0-25.993846 21.425231-47.104 47.812923-47.104h45.686154c26.466462 0 47.891692 21.110154 47.891693 47.104 0 26.072615-21.425231 47.182769-47.891693 47.182769z"
                        fill="#333333" fill-opacity=".45" p-id="5088"></path>
                </svg>
                {{ dayjs(time).format('YYYY-MM-DD') }}
            </div>
        </div>
        <div class="right">
            <img :src="imgUrl" alt="">
        </div>
    </div>
</template>


<script setup>
import dayjs from 'dayjs';
import { useRouter, useRoute } from 'vue-router';

const props = defineProps({
    title: String,
    imgUrl: String,
    content: String,
    time: String,
    id: Number,
    link: String
})
const router = useRouter()
const route = useRoute()

const handleRouter = () => {
    const splink = props.link.split('/')
    const href = router.resolve({
        name: 'article',
        params: {
            id: props.id
        },
        query: {
            link: splink[splink.length - 1],
            type: route.params.category,
            time: dayjs(props.time).format('YYYY-MM-DD')
        }
    }).href
    window.open(href, "_blank");
}

</script>


<style scoped lang="scss">
.list-item-box {
    width: 100%;
    height: 99px;
    padding: 15px;
    display: flex;
    gap: 20px;
    position: relative;
    cursor: pointer;
    background-color: white;
    &:hover {
        background-color: whitesmoke;
    }
    &::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 10px;
        right: 10px;
        background-color: rgb(227, 227, 227);
        height: 1px;
    }
    .left {
        height: 100%;
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        position: relative;
        gap: 5px;
        width: 70%;
        .title {
            width: 100%;

            span {
                font-size: 1rem;
                font-weight: 600;
                width: 100%;
                overflow: hidden; //超出隐藏
                text-overflow: ellipsis; //溢出显示省略号
                display: -webkit-box;
                -webkit-line-clamp: 1; 
                -webkit-box-orient: vertical;
                line-height: 20px;
            }
        }

        .content {
            width: 100%;
            overflow: hidden; //超出隐藏
            text-overflow: ellipsis; //溢出显示省略号
            display: -webkit-box;
            -webkit-line-clamp: 1; //显示3行
            -webkit-box-orient: vertical;
            line-height: 20px;
            font-size: 0.9rem;
            color: grey;
        }

        .icons {
            display: flex;
            align-items: center;
            gap: 5px;
            width: 100%;
            font-size: 0.9rem;
            color: grey;
        }

        .item {
            flex: 1;
        }
    }

    .right {
        height: 100%;
        padding: 0px;
        width: 20%;
        img {
            width: 100%;
            height: 100%;
        }
    }
}</style>