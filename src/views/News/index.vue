<template>
    <div class="news-page">
        <div class="screen">
            <div class="mask"></div>
            <div class="screen-content">
                <div class="header">
                    <div class="left">
                        <div class="left-item" @click="handleRouterByName('home')">关于</div>
                        <div class="left-item" @click="handleRouterByName('statistics')">新闻统计</div>
                        <div class="left-item" @click="handleRouterByName('subscribe')">订阅我们</div>
                    </div>
                    <div class="mid">
                        <img src="../../assets/imgs/logo.png" alt="">
                    </div>
                    <div class="right">
                        <svg t="1702728994908" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="2334" width="20" height="20">
                            <path
                                d="M809.246403 771.926938 777.737782 803.458071 924.965961 950.667831 956.476629 919.157163Z"
                                fill="#ffffff" p-id="2335"></path>
                            <path
                                d="M454.878536 70.285786C239.51556 70.285786 64.93236 244.847497 64.93236 460.231963c0 215.341486 174.583201 389.945153 389.945153 389.945153 215.362976 0 389.9472-174.603667 389.9472-389.945153C844.825736 244.847497 670.241512 70.285786 454.878536 70.285786zM454.878536 805.611108c-190.750415 0-345.381192-154.626683-345.381192-345.379145 0-190.751439 154.629753-345.380168 345.381192-345.380168 190.752462 0 345.382215 154.62873 345.382215 345.380168C800.259728 650.983401 645.630998 805.611108 454.878536 805.611108z"
                                fill="#ffffff" p-id="2336"></path>
                        </svg>
                        <input type="text" placeholder="请输入搜索内容">
                    </div>
                </div>
                <div class="kinds">
                    <div class="kinds-content">
                        <div class="kinds-item kinds-item--active">首页</div>
                        <div class="kinds-item" @click="handleRouter('interior')">国内</div>
                        <div class="kinds-item" @click="handleRouter('international')">国际/国際</div>
                        <div class="kinds-item" @click="handleRouter('economy')">经济/経済</div>
                        <div class="kinds-item" @click="handleRouter('reaction')">娱乐/エンタメ</div>
                        <div class="kinds-item" @click="handleRouter('physical')">体育运动/スポーツ</div>
                        <div class="kinds-item" @click="handleRouter('it')">技术/IT</div>
                        <div class="kinds-item" @click="handleRouter('science')">科学</div>
                        <div class="kinds-item" @click="handleRouter('live')">生活/ライフ</div>
                        <div class="kinds-item" @click="handleRouter('geo')">地理</div>
                    </div>
                </div>
                <div class="content">
                    <div class="content-left">
                        <div class="logo-tag">
                            即时新闻 ｜ 每日头条
                        </div>
                        <div class="title">
                            お菓子マスターが注目する「新進気鋭パティシエの名スイーツ」完成度の高い逸品(婦人画報)
                        </div>
                        <div class="desc">
                            いま、この瞬間にも画期的なスイーツが生まれ、バリエーションが拡大中の日本のスイーツの世界。そのなかでお菓子マスターたちが注目する、新進気鋭のパティシエの一品を教えてくれました。
                        </div>
                    </div>
                    <div class="content-right">
                        <div class="title">
                            <span style="letter-spacing: 3px;">热点新闻</span>
                        </div>
                        <div class="items">
                            <div class="right-item">
                                <div class="left">
                                    <div class="content">
                                        義家族との間】メンタル不調の無職夫と義母とのタワマン暮らし。
                                    </div>
                                    <div class="time">
                                        2023/12/29
                                    </div>
                                </div>
                                <div class="right">
                                    <img src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20231229-00010003-voce-000-1-view.jpg?pri=l&w=450&h=382&exp=10800" alt="">
                                </div>
                            </div>
                            <div class="right-item">
                                <div class="left">
                                    <div class="content">
                                        絶品！肉とサラダ「冬のおもてなし」喜ばれるレシピ3選
                                    </div>
                                    <div class="time">
                                        2023/12/30
                                    </div>
                                </div>
                                <div class="right">
                                    <img src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20231229-00010006-seraijp-000-1-view.jpg?pri=l&w=450&h=300&exp=10800" alt="">
                                </div>
                            </div>
                            <div class="right-item">
                                <div class="left">
                                    <div class="content">
                                        デートで着たい、女子ウケ必至のほっこりニット3選。
                                    </div>
                                    <div class="time">
                                        2023/12/28
                                    </div>
                                </div>
                                <div class="right">
                                    <img src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20231229-00010000-eclat-000-1-view.jpg?pri=l&w=450&h=450&exp=10800" alt="">
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
import { useRouter } from 'vue-router';

const router = useRouter();

const handleRouter = (category) => {
    router.push({
        name: 'about',
        params: {
            category: category
        }
    })
}

const handleRouterByName = (name) => {
    router.push({
        name: name
    })
}

</script>


<style scoped lang="scss">
.news-page {
    width: 100%;
    height: 100%;
    background-image: url('../../assets/imgs/news_bg.jpeg');
    background-repeat: no-repeat;
    background-size: cover;

    .screen {
        width: 100%;
        height: 100%;
    }

    .mask {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        opacity: 1;
        backdrop-filter: blur(13px);
        background: linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
    }

    .screen-content {
        color: white;
        position: relative;
        z-index: 2;
        width: 100%;
        height: 100%;
        padding: 0 10%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .content {
            width: 100%;
            display: flex;
            padding-top: 5%;
            padding-bottom: 5%;
            flex: 1;

            .content-left {
                width: 70%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;

                .logo-tag {
                    color: whitesmoke;
                    background-color: red;
                    padding: 10px;
                    font-size: 0.8rem;
                }

                .title {
                    margin-top: 20px;
                    font-size: 2rem;
                    line-height: 180%;
                    width: 60% !important; //限制文本宽度
                    word-wrap: break-word; //自动换行
                    word-break: break-all; //自动换行（兼容字母）
                    overflow: hidden; //超出隐藏
                    text-overflow: ellipsis; //溢出显示省略号
                    display: -webkit-box;
                    -webkit-line-clamp: 3; //显示3行
                    -webkit-box-orient: vertical;
                }

                .desc {
                    font-size: 1rem;
                    margin-top: 10px;
                    width: 60% !important; //限制文本宽度
                    word-wrap: break-word; //自动换行
                    word-break: break-all; //自动换行（兼容字母）
                    overflow: hidden; //超出隐藏
                    text-overflow: ellipsis; //溢出显示省略号
                    display: -webkit-box;
                    -webkit-line-clamp: 3; //显示3行
                    -webkit-box-orient: vertical;
                    line-height: 180%;
                    color: rgba(245, 245, 245, 0.604);
                }

                .more {
                    margin-top: 30px;
                    border-bottom: 1px solid rgba(245, 245, 245, 0.604);
                    padding: 5px;
                    cursor: pointer;
                }
            }

            .content-right {
                width: 30%;
                border-left: 1px solid rgba(255, 255, 255, 0.463);
                padding: 0px 20px;
                display: flex;
                flex-direction: column;

                .items {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                    padding: 10px 0px 20px;

                    .right-item {
                        flex: 1;
                        width: 100%;
                        padding: 20px 0px;
                        display: flex;

                        .left {
                            flex: 7;
                            height: 100%;
                            position: relative;
                            .content {
                                word-wrap: break-word; //自动换行
                                word-break: break-all; //自动换行（兼容字母）
                                overflow: hidden; //超出隐藏
                                text-overflow: ellipsis; //溢出显示省略号
                                display: -webkit-box;
                                -webkit-line-clamp: 3; //显示3行
                                -webkit-box-orient: vertical;
                                line-height: 160%;
                            }
                            .time {
                                position: absolute;
                                bottom: 0;
                                color: rgba(245, 245, 245, 0.604);
                            }
                        }

                        .right {
                            flex: 4;
                            height: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            padding: 10px;

                            img {
                                width: 100%;
                                border-radius: 10px;
                            }
                        }
                    }

                    .right-item:not(:last-child) {
                        border-bottom: 1px solid rgba(255, 255, 255, 0.463);
                    }

                }


            }
        }

        .header {
            width: 100%;
            height: 70px;
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            padding: 10px 0px;
            border-bottom: 2px solid #eaeaea;

            .left {
                font-size: 0.9rem;
                font-weight: 400;
                display: flex;

                .left-item {
                    padding: 5px 15px;
                    cursor: pointer;
                }
            }

            .mid {
                flex: 1;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    height: 100%;
                }
            }

            .right {
                display: flex;
                align-items: center;
                gap: 10px;
                padding-left: 40px;

                input {
                    font-size: 0.9rem;
                    background-color: transparent;
                    border: none;
                    outline: none;
                }

                input::placeholder {
                    color: rgba(243, 243, 243, 0.7);
                }

                .icon {
                    cursor: pointer;
                }
            }
        }

        .kinds {
            padding: 20px 20px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid #dddddd3d;
            color: rgba(255, 255, 255, 0.855);

            .kinds-content {
                display: flex;
                align-items: center;
                justify-content: center;

                .kinds-item {
                    padding: 5px 20px;
                    cursor: pointer;
                }

                .kinds-item--active {
                    color: white;
                }
            }
        }
    }

}</style>