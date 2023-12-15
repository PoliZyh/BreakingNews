<template>
    <div class="home-page">
        <div class="big-screen" ref="screenRef">
            <div class="header">
                <div class="header-left">
                    <img src="../../assets/imgs/logo.png" alt="">
                </div>
                <div class="header-right">
                    <span class="header-link">首页</span>
                    <span class="header-link">今日热闻</span>
                    <span class="header-link">关于我们</span>
                </div>
            </div>
            <div class="big-content">
                <h1>
                    <span>&nbsp;</span>
                    <span v-for="sp in curSpaces" :key="sp">
                        {{ sp }}
                    </span>
                </h1>
                <div class="b-container">
                    <button class="button">Find More</button>
                    <div class="b-icons">
                        <el-icon class="b-icon" style="--s:0s;">
                            <ArrowRight />
                        </el-icon>
                        <el-icon class="b-icon" style="--s:0.5s;">
                            <ArrowRight />
                        </el-icon>
                        <el-icon class="b-icon" style="--s:1s;">
                            <ArrowRight />
                        </el-icon>
                    </div>
                </div>
            </div>
        </div>
        <div class="scroll-screen ">
            <div class="sticky-screen hot-module">
                <div class="b-s-title">
                    <h4>今日热闻</h4>
                </div>
                <div class="content">
                    <div class="content-left">
                        <div class="book">
                            <p class="details">
                                <span class="title">Hello</span>
                                <span class="book-news-content">
                                    Permission is hereby granted, free of charge, to any person obtaining a copy of this
                                    software and associated documentation files (the “Software”), to deal in the Software
                                    without restriction, including without limitation the rights to use, copy, modify,
                                </span>
                            </p>
                            <div class="cover">
                                <span>
                                    <div class="card">
                                        <p>guess! 谁是最热新闻?</p>
                                        <p>Hover Me!</p>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="content-right">
                        <div class="news-row">
                            <div class="card">
                                <img src="https://i.postimg.cc/Znt1jWYF/user.jpg" alt="">
                                <div class="card__content">
                                    <p class="card__title">Card Title</p>
                                    <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco.</p>
                                </div>
                            </div>
                            <div class="card">
                                <img src="https://i.postimg.cc/Znt1jWYF/user.jpg" alt="">
                                <div class="card__content">
                                    <p class="card__title">Card Title</p>
                                    <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco.</p>
                                </div>
                            </div>
                        </div>
                        <div class="news-row">
                            <div class="card">
                                <img src="https://i.postimg.cc/Znt1jWYF/user.jpg" alt="">
                                <div class="card__content">
                                    <p class="card__title">Card Title</p>
                                    <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco.</p>
                                </div>
                            </div>
                            <div class="card">
                                <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path
                                        d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z">
                                    </path>
                                </svg> -->
                                <img src="https://i.postimg.cc/Znt1jWYF/user.jpg" alt="">
                                <div class="card__content">
                                    <p class="card__title">Card Title</p>
                                    <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import BIRDS from 'vanta/dist/vanta.birds.min'
import { ref, onBeforeUnmount, onMounted } from 'vue';

const screenRef = ref()
const vantaEffect = ref('')
const titles = ['欢迎来到即时新闻.', '国内最棒的新闻站点.', 'Made by ZiYang & Ethan']
const titleIndex = ref(0)
const curIndex = ref(0)
const curSpaces = ref([])

const wait = async (time) => {
    return new Promise((resolve) => {
        setTimeout(resolve, time)
    })
}

const runTitles = async () => {
    while (true) {
        if (titles[titleIndex.value].length <= curIndex.value) {
            await wait(1000)
            curIndex.value = 0
            while (curSpaces.value.length > 0) {
                curSpaces.value.pop()
                await wait(100)
            }

            titleIndex.value += 1
            if (titleIndex.value >= titles.length) {
                titleIndex.value = 0
            }
        }
        const curSpace = titles[titleIndex.value].split("")
        console.log(curSpace)
        curSpaces.value.push(curSpace[curIndex.value])
        await wait(300)
        curIndex.value++
    }
}


onBeforeUnmount(() => {
    if (vantaEffect.value) {
        vantaEffect.value.destroy()
    }
})

onMounted(() => {
    runTitles()
    vantaEffect.value = BIRDS({
        el: screenRef.value,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        birdSize: 0.50
    })
})
</script>


<style scoped lang="scss">
.home-page {
    height: 100%;
    width: 100%;

    .big-screen {
        height: 80vh;
        position: relative;
        width: 100%;

        .header {
            width: 100%;
            height: 70px;
            display: flex;
            justify-content: space-between;
            padding: 5px 20px;

            .header-left {
                img {
                    height: 50px;
                    cursor: pointer;
                }
            }

            .header-right {
                color: white;
                display: flex;
                align-items: center;
                gap: 20px;

                .header-link {
                    cursor: pointer;
                    padding: 0px 0px 5px;

                    &:hover {
                        border-bottom: 1px solid white;
                    }
                }
            }
        }

        .big-content {
            position: absolute;
            top: 40%;
            color: white;
            transform: translateY(-50%);
            left: 5%;

            h1 {
                font-size: 3.2rem;
                margin-bottom: 25px;
                position: relative;
                width: fit-content;

                &::after {
                    content: '';
                    right: -7px;
                    position: absolute;
                    animation: coding 0.7s ease-in-out infinite;
                    width: 3px;
                    background-color: white;

                }

                @keyframes coding {
                    0% {
                        top: 100%;
                        bottom: 100%;
                    }

                    50% {
                        top: 0;
                        bottom: 0;
                    }

                    100% {
                        top: 100%;
                        bottom: 100%;
                    }
                }
            }

            .b-container {
                margin-top: 25px;
                display: flex;
                gap: 10px;
                align-items: center;
                height: 100%;
                margin-top: 30px;
                padding-left: 20px;

                button {
                    background: transparent;
                    padding: 10px 20px;
                    border: 1px solid white;
                    color: white;
                    font-size: 1.4rem;
                    border-radius: 7px;
                    cursor: pointer;
                }

                .b-icons {
                    font-size: 1.8rem;
                    height: 100%;
                    display: flex;
                    align-items: center;

                    .b-icon {
                        --s: 0s;
                        animation: show 0.4s infinite;
                        animation-delay: var(--s);
                    }
                }

                @keyframes show {
                    from {
                        opacity: 0;
                    }

                    to {
                        opacity: 1;
                    }
                }
            }
        }
    }

    .scroll-screen {
        width: 100%;
        height: 300vh;

        .sticky-screen {
            height: 100vh;
            position: sticky;
            padding: 50px 20px;
            top: 0;

            .b-s-title {
                width: 100%;
                font-size: 1.6rem;
                position: relative;
                display: flex;
                justify-content: center;

                h4 {
                    width: fit-content;
                    text-align: center;
                    position: relative;
                }

                h4::after {
                    content: '';
                    position: absolute;
                    top: 110%;
                    left: 0;
                    height: 4px;
                    width: 100%;
                    border-radius: 3px;
                    background-color: orange;
                }
            }

            .content {
                padding: 30px 20px;
            }
        }

        .hot-module {
            .content {
                padding-left: 50px;
                padding-right: 50px;
                display: flex;

                .content-left {
                    .book {
                        position: relative;
                        border-radius: 10px;
                        width: 420px;
                        height: 80vh;
                        background-color: whitesmoke;
                        -webkit-transform: preserve-3d;
                        -ms-transform: preserve-3d;
                        transform: preserve-3d;
                        -webkit-perspective: 2000px;
                        perspective: 2000px;
                        color: #000;

                        .details {
                            padding: 50px;
                            padding-right: 20px;
                            display: flex;
                            flex-direction: column;
                            gap: 20px;

                            .title {
                                text-align: center;
                                width: 100%;
                            }

                            .book-news-content {
                                font-size: 0.9rem;
                                color: grey;
                                line-height: 120%;
                            }
                        }
                    }

                    .cover {
                        top: 0;
                        position: absolute;
                        background-color: lightgray;
                        width: 100%;
                        height: 100%;
                        border-radius: 10px;
                        cursor: pointer;
                        -webkit-transition: all 0.5s;
                        transition: all 0.5s;
                        -webkit-transform-origin: 0;
                        -ms-transform-origin: 0;
                        transform-origin: 0;
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        -webkit-box-align: center;
                        -ms-flex-align: center;
                        align-items: center;
                        -webkit-box-pack: center;
                        -ms-flex-pack: center;
                        justify-content: center;

                        span {
                            position: absolute;
                            top: 0;
                            bottom: 0;
                            left: 0;
                            right: 0;

                            .card {
                                width: 100%;
                                height: 100%;
                                border: none;
                                border-radius: 10px;
                                background: radial-gradient(ellipse farthest-side at 76% 77%, rgba(245, 228, 212, 0.25) 4%, rgba(255, 255, 255, 0) calc(4% + 1px)), radial-gradient(circle at 76% 40%, #fef6ec 4%, rgba(255, 255, 255, 0) 4.18%), linear-gradient(135deg, #ff0000 0%, #000036 100%), radial-gradient(ellipse at 28% 0%, #ffcfac 0%, rgba(98, 149, 144, 0.5) 100%), linear-gradient(180deg, #cd6e8a 0%, #f5eab0 69%, #d6c8a2 70%, #a2758d 100%);
                                background-blend-mode: normal, normal, screen, overlay, normal;
                                display: flex;
                                position: relative;

                                p {
                                    position: absolute;
                                }

                                p:first-child {
                                    left: 20%;
                                    top: 20%;
                                    color: rgba(0, 0, 0, 0.75);
                                    font-size: 1.3rem;
                                }

                                p:last-child {
                                    left: 22%;
                                    top: 25%;
                                    color: white;
                                }
                            }
                        }
                    }

                    .book:hover .cover {
                        -webkit-transition: all 0.5s;
                        transition: all 0.5s;
                        -webkit-transform: rotatey(-80deg);
                        -ms-transform: rotatey(-80deg);
                        transform: rotatey(-80deg);
                    }

                    p {
                        font-size: 20px;
                        font-weight: bolder;
                    }
                }

                .content-right {
                    flex: 1;
                    height: 80vh;
                    padding: 0px 40px;

                    .news-row {
                        width: 100%;
                        display: flex;
                        flex-wrap: nowrap;
                        justify-content: space-around;
                        margin-top: 10vh;
                        margin-bottom: 10vh;

                        .card {
                            position: relative;
                            width: 300px;
                            height: 200px;
                            background-color: #f2f2f2;
                            border-radius: 10px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            overflow: hidden;
                            perspective: 1000px;
                            box-shadow: 0 0 0 5px #ffffff80;
                            transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                        }

                        .card svg {
                            width: 48px;
                            fill: #333;
                            transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                        }

                        .card img {
                            width: 100%;
                            transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                        }

                        .card:hover {
                            transform: scale(1.05);
                            box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
                        }

                        .card__content {
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            padding: 20px;
                            box-sizing: border-box;
                            background-color: #f2f2f2;
                            transform: rotateX(-90deg);
                            transform-origin: bottom;
                            transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                        }

                        .card:hover .card__content {
                            transform: rotateX(0deg);
                        }

                        .card__title {
                            margin: 0;
                            font-size: 24px;
                            color: #333;
                            font-weight: 700;
                        }

                        .card:hover svg {
                            scale: 0;
                        }

                        .card:hover img {
                            scale: 0;
                        }

                        .card__description {
                            margin: 10px 0 0;
                            font-size: 14px;
                            color: #777;
                            line-height: 1.4;
                        }

                    }
                }
            }
        }
    }
}
</style>