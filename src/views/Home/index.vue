<template>
    <div class="home-page">
        <div class="big-screen" ref="screenRef">
            <div class="header">
                <div class="header-left">
                    <img src="../../assets/imgs/logo.png" alt="">
                </div>
                <div class="header-right">
                    <span class="header-link">首页</span>
                    <span class="header-link" @click="scrollToSmoothly(1500, 3000)">今日热闻</span>
                    <span class="header-link" @click="scrollToSmoothly(3500, 3000)">关于我们</span>
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
                    <button class="button" @click="handleFindMore">Find More</button>
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
        <div class="scroll-screen" ref="hotModuleRef">
            <div class="sticky-screen hot-module">
                <div class="b-s-title">
                    <h4>今日热闻</h4>
                </div>
                <div class="content">
                    <div class="content-left">
                        <div class="book">
                            <p class="details">
                                <span class="title">【義家族との間】「息子は私が養う」メンタル不調の無職夫と義母とのタワマン暮らし。その居心地とは～その2～(サライ.jp)</span>
                                <span class="book-news-content">
                                    取材・文／ふじのあやこ 家族の中には、血縁のない『義（理の）家族』という間柄がある。結婚相手の親族関係を指すことが一般的だが、離婚件数が増える現在では、親の再婚相手や、再婚相手の連れ子など、家族の
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
                            <div class="card card1">
                           
                                <svg t="1702648900332" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2392" width="200" height="200"><path d="M682.666667 778.666667a53.393333 53.393333 0 0 1 53.333333-53.333334h201.86q0.8-10.6 0.806667-21.333333V96a53.393333 53.393333 0 0 0-53.333334-53.333333H181.333333a53.393333 53.393333 0 0 0-53.333333 53.333333v832a53.393333 53.393333 0 0 0 53.333333 53.333333h480q10.733333 0 21.333334-0.806666z m-64-565.333334h128a21.333333 21.333333 0 0 1 0 42.666667H618.666667a21.333333 21.333333 0 0 1 0-42.666667z m0 170.666667h128a21.333333 21.333333 0 0 1 0 42.666667H618.666667a21.333333 21.333333 0 0 1 0-42.666667zM298.666667 234.666667a21.333333 21.333333 0 0 1 38-13.333334l132.666666 165.853334V234.666667a21.333333 21.333333 0 0 1 42.666667 0v213.333333a21.333333 21.333333 0 0 1-38 13.333333L341.333333 295.48V448a21.333333 21.333333 0 0 1-42.666666 0z m21.333333 362.666666h426.666667a21.333333 21.333333 0 0 1 0 42.666667H320a21.333333 21.333333 0 0 1 0-42.666667z m298.666667 213.333334H320a21.333333 21.333333 0 0 1 0-42.666667h298.666667a21.333333 21.333333 0 0 1 0 42.666667z m312.586666-42.666667A277.406667 277.406667 0 0 1 725.333333 973.92V778.666667a10.666667 10.666667 0 0 1 10.666667-10.666667z" fill="#5C5C66" p-id="2393"></path></svg>
                                <div class="card__content">
                                    <p class="card__title">絶品！肉とサラダ「冬のおもてなし」喜ばれるレシピ3選(Web eclat)</p>
                                    <p class="card__description">おもてなしで喜ばれるメニューは「肉」と「サラダ」。歓声が上がるほど美味しい人気料理家の絶品レシピをご紹介。</p>
                                </div>
                            </div>
                            <div class="card card2">
                                <svg t="1702648900332" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2392" width="200" height="200"><path d="M682.666667 778.666667a53.393333 53.393333 0 0 1 53.333333-53.333334h201.86q0.8-10.6 0.806667-21.333333V96a53.393333 53.393333 0 0 0-53.333334-53.333333H181.333333a53.393333 53.393333 0 0 0-53.333333 53.333333v832a53.393333 53.393333 0 0 0 53.333333 53.333333h480q10.733333 0 21.333334-0.806666z m-64-565.333334h128a21.333333 21.333333 0 0 1 0 42.666667H618.666667a21.333333 21.333333 0 0 1 0-42.666667z m0 170.666667h128a21.333333 21.333333 0 0 1 0 42.666667H618.666667a21.333333 21.333333 0 0 1 0-42.666667zM298.666667 234.666667a21.333333 21.333333 0 0 1 38-13.333334l132.666666 165.853334V234.666667a21.333333 21.333333 0 0 1 42.666667 0v213.333333a21.333333 21.333333 0 0 1-38 13.333333L341.333333 295.48V448a21.333333 21.333333 0 0 1-42.666666 0z m21.333333 362.666666h426.666667a21.333333 21.333333 0 0 1 0 42.666667H320a21.333333 21.333333 0 0 1 0-42.666667z m298.666667 213.333334H320a21.333333 21.333333 0 0 1 0-42.666667h298.666667a21.333333 21.333333 0 0 1 0 42.666667z m312.586666-42.666667A277.406667 277.406667 0 0 1 725.333333 973.92V778.666667a10.666667 10.666667 0 0 1 10.666667-10.666667z" fill="#5C5C66" p-id="2393"></path></svg>
                         
                                <div class="card__content">
                                    <p class="card__title">デートで着たい、女子ウケ必至のほっこりニット3選。(MEN’S NON-NO WEB)</p>
                                    <p class="card__description">「もうすぐ30歳になるので、クラシカルなアイテムを選ぶ振り幅を大きくしたいと思っていました。</p>
                                </div>
                            </div>
                        </div>
                        <div class="news-row">
                            <div class="card card3">
                                <svg t="1702648900332" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2392" width="200" height="200"><path d="M682.666667 778.666667a53.393333 53.393333 0 0 1 53.333333-53.333334h201.86q0.8-10.6 0.806667-21.333333V96a53.393333 53.393333 0 0 0-53.333334-53.333333H181.333333a53.393333 53.393333 0 0 0-53.333333 53.333333v832a53.393333 53.393333 0 0 0 53.333333 53.333333h480q10.733333 0 21.333334-0.806666z m-64-565.333334h128a21.333333 21.333333 0 0 1 0 42.666667H618.666667a21.333333 21.333333 0 0 1 0-42.666667z m0 170.666667h128a21.333333 21.333333 0 0 1 0 42.666667H618.666667a21.333333 21.333333 0 0 1 0-42.666667zM298.666667 234.666667a21.333333 21.333333 0 0 1 38-13.333334l132.666666 165.853334V234.666667a21.333333 21.333333 0 0 1 42.666667 0v213.333333a21.333333 21.333333 0 0 1-38 13.333333L341.333333 295.48V448a21.333333 21.333333 0 0 1-42.666666 0z m21.333333 362.666666h426.666667a21.333333 21.333333 0 0 1 0 42.666667H320a21.333333 21.333333 0 0 1 0-42.666667z m298.666667 213.333334H320a21.333333 21.333333 0 0 1 0-42.666667h298.666667a21.333333 21.333333 0 0 1 0 42.666667z m312.586666-42.666667A277.406667 277.406667 0 0 1 725.333333 973.92V778.666667a10.666667 10.666667 0 0 1 10.666667-10.666667z" fill="#5C5C66" p-id="2393"></path></svg>


                                <div class="card__content">
                                    <p class="card__title">結婚相手を選ぶときに妥協しない方がいいこと。</p>
                                    <p class="card__description">学生時代から長年付き合った人と別れて3年経ちました。彼が社会人になり価値観が変わったのか元々の本性が出たのか、別人のように変わってしまいました</p>
                                </div>
                            </div>
                            <div class="card card4">
                                <svg t="1702648900332" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2392" width="200" height="200"><path d="M682.666667 778.666667a53.393333 53.393333 0 0 1 53.333333-53.333334h201.86q0.8-10.6 0.806667-21.333333V96a53.393333 53.393333 0 0 0-53.333334-53.333333H181.333333a53.393333 53.393333 0 0 0-53.333333 53.333333v832a53.393333 53.393333 0 0 0 53.333333 53.333333h480q10.733333 0 21.333334-0.806666z m-64-565.333334h128a21.333333 21.333333 0 0 1 0 42.666667H618.666667a21.333333 21.333333 0 0 1 0-42.666667z m0 170.666667h128a21.333333 21.333333 0 0 1 0 42.666667H618.666667a21.333333 21.333333 0 0 1 0-42.666667zM298.666667 234.666667a21.333333 21.333333 0 0 1 38-13.333334l132.666666 165.853334V234.666667a21.333333 21.333333 0 0 1 42.666667 0v213.333333a21.333333 21.333333 0 0 1-38 13.333333L341.333333 295.48V448a21.333333 21.333333 0 0 1-42.666666 0z m21.333333 362.666666h426.666667a21.333333 21.333333 0 0 1 0 42.666667H320a21.333333 21.333333 0 0 1 0-42.666667z m298.666667 213.333334H320a21.333333 21.333333 0 0 1 0-42.666667h298.666667a21.333333 21.333333 0 0 1 0 42.666667z m312.586666-42.666667A277.406667 277.406667 0 0 1 725.333333 973.92V778.666667a10.666667 10.666667 0 0 1 10.666667-10.666667z" fill="#5C5C66" p-id="2393"></path></svg>
                                <div class="card__content">
                                    <p class="card__title">ホテルの朝食バイキングで懐かしいケーキを発見！</p>
                                    <p class="card__description">子どもから大人までつい浮足立ってしまうクリスマス。今X上では、懐かしい思い出がよみがえるケーキが話題となっています。</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="scroll-screen" ref="aboutModuleRef">
            <div class="sticky-screen about-module">
                <div class="b-s-title">
                    <h4>关于我们</h4>
                </div>
                <div class="content">
                    <div class="content-item">
                        <div class="card card5">
                            <div class="card__img"><svg xmlns="http://www.w3.org/2000/svg" width="100%">
                                    <rect fill="#ffffff" width="540" height="450"></rect>
                                    <defs>
                                        <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2="100%"
                                            gradientTransform="rotate(222,648,379)">
                                            <stop offset="0" stop-color="#ffffff"></stop>
                                            <stop offset="1" stop-color="#FC726E"></stop>
                                        </linearGradient>
                                        <pattern patternUnits="userSpaceOnUse" id="b" width="300" height="250" x="0" y="0"
                                            viewBox="0 0 1080 900">
                                            <g fill-opacity="0.5">
                                                <polygon fill="#444" points="90 150 0 300 180 300"></polygon>
                                                <polygon points="90 150 180 0 0 0"></polygon>
                                                <polygon fill="#AAA" points="270 150 360 0 180 0"></polygon>
                                                <polygon fill="#DDD" points="450 150 360 300 540 300"></polygon>
                                                <polygon fill="#999" points="450 150 540 0 360 0"></polygon>
                                                <polygon points="630 150 540 300 720 300"></polygon>
                                                <polygon fill="#DDD" points="630 150 720 0 540 0"></polygon>
                                                <polygon fill="#444" points="810 150 720 300 900 300"></polygon>
                                                <polygon fill="#FFF" points="810 150 900 0 720 0"></polygon>
                                                <polygon fill="#DDD" points="990 150 900 300 1080 300"></polygon>
                                                <polygon fill="#444" points="990 150 1080 0 900 0"></polygon>
                                                <polygon fill="#DDD" points="90 450 0 600 180 600"></polygon>
                                                <polygon points="90 450 180 300 0 300"></polygon>
                                                <polygon fill="#666" points="270 450 180 600 360 600"></polygon>
                                                <polygon fill="#AAA" points="270 450 360 300 180 300"></polygon>
                                                <polygon fill="#DDD" points="450 450 360 600 540 600"></polygon>
                                                <polygon fill="#999" points="450 450 540 300 360 300"></polygon>
                                                <polygon fill="#999" points="630 450 540 600 720 600"></polygon>
                                                <polygon fill="#FFF" points="630 450 720 300 540 300"></polygon>
                                                <polygon points="810 450 720 600 900 600"></polygon>
                                                <polygon fill="#DDD" points="810 450 900 300 720 300"></polygon>
                                                <polygon fill="#AAA" points="990 450 900 600 1080 600"></polygon>
                                                <polygon fill="#444" points="990 450 1080 300 900 300"></polygon>
                                                <polygon fill="#222" points="90 750 0 900 180 900"></polygon>
                                                <polygon points="270 750 180 900 360 900"></polygon>
                                                <polygon fill="#DDD" points="270 750 360 600 180 600"></polygon>
                                                <polygon points="450 750 540 600 360 600"></polygon>
                                                <polygon points="630 750 540 900 720 900"></polygon>
                                                <polygon fill="#444" points="630 750 720 600 540 600"></polygon>
                                                <polygon fill="#AAA" points="810 750 720 900 900 900"></polygon>
                                                <polygon fill="#666" points="810 750 900 600 720 600"></polygon>
                                                <polygon fill="#999" points="990 750 900 900 1080 900"></polygon>
                                                <polygon fill="#999" points="180 0 90 150 270 150"></polygon>
                                                <polygon fill="#444" points="360 0 270 150 450 150"></polygon>
                                                <polygon fill="#FFF" points="540 0 450 150 630 150"></polygon>
                                                <polygon points="900 0 810 150 990 150"></polygon>
                                                <polygon fill="#222" points="0 300 -90 450 90 450"></polygon>
                                                <polygon fill="#FFF" points="0 300 90 150 -90 150"></polygon>
                                                <polygon fill="#FFF" points="180 300 90 450 270 450"></polygon>
                                                <polygon fill="#666" points="180 300 270 150 90 150"></polygon>
                                                <polygon fill="#222" points="360 300 270 450 450 450"></polygon>
                                                <polygon fill="#FFF" points="360 300 450 150 270 150"></polygon>
                                                <polygon fill="#444" points="540 300 450 450 630 450"></polygon>
                                                <polygon fill="#222" points="540 300 630 150 450 150"></polygon>
                                                <polygon fill="#AAA" points="720 300 630 450 810 450"></polygon>
                                                <polygon fill="#666" points="720 300 810 150 630 150"></polygon>
                                                <polygon fill="#FFF" points="900 300 810 450 990 450"></polygon>
                                                <polygon fill="#999" points="900 300 990 150 810 150"></polygon>
                                                <polygon points="0 600 -90 750 90 750"></polygon>
                                                <polygon fill="#666" points="0 600 90 450 -90 450"></polygon>
                                                <polygon fill="#AAA" points="180 600 90 750 270 750"></polygon>
                                                <polygon fill="#444" points="180 600 270 450 90 450"></polygon>
                                                <polygon fill="#444" points="360 600 270 750 450 750"></polygon>
                                                <polygon fill="#999" points="360 600 450 450 270 450"></polygon>
                                                <polygon fill="#666" points="540 600 630 450 450 450"></polygon>
                                                <polygon fill="#222" points="720 600 630 750 810 750"></polygon>
                                                <polygon fill="#FFF" points="900 600 810 750 990 750"></polygon>
                                                <polygon fill="#222" points="900 600 990 450 810 450"></polygon>
                                                <polygon fill="#DDD" points="0 900 90 750 -90 750"></polygon>
                                                <polygon fill="#444" points="180 900 270 750 90 750"></polygon>
                                                <polygon fill="#FFF" points="360 900 450 750 270 750"></polygon>
                                                <polygon fill="#AAA" points="540 900 630 750 450 750"></polygon>
                                                <polygon fill="#FFF" points="720 900 810 750 630 750"></polygon>
                                                <polygon fill="#222" points="900 900 990 750 810 750"></polygon>
                                                <polygon fill="#222" points="1080 300 990 450 1170 450"></polygon>
                                                <polygon fill="#FFF" points="1080 300 1170 150 990 150"></polygon>
                                                <polygon points="1080 600 990 750 1170 750"></polygon>
                                                <polygon fill="#666" points="1080 600 1170 450 990 450"></polygon>
                                                <polygon fill="#DDD" points="1080 900 1170 750 990 750"></polygon>
                                            </g>
                                        </pattern>
                                    </defs>
                                    <rect x="0" y="0" fill="url(#a)" width="100%" height="100%"></rect>
                                    <rect x="0" y="0" fill="url(#b)" width="100%" height="100%"></rect>
                                </svg></div>
                            <div class="card__avatar">
                                <img src="../../assets/imgs/userava_1.jpg" alt="">
                            </div>
                            <div class="card__title">刘子阳</div>
                            <div class="card__subtitle">Web Development</div>
                            <div class="card__wrapper">
                                <button class="card__btn">Gitee</button>
                                <button class="card__btn card__btn-solid">GitHub</button>
                            </div>
                        </div>
                    </div>
                    <div class="content-item">
                        <div class="card card6">
                            <div class="card__img"><svg xmlns="http://www.w3.org/2000/svg" width="100%">
                                    <rect fill="#ffffff" width="540" height="450"></rect>
                                    <defs>
                                        <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2="100%"
                                            gradientTransform="rotate(222,648,379)">
                                            <stop offset="0" stop-color="#ffffff"></stop>
                                            <stop offset="1" stop-color="#FC726E"></stop>
                                        </linearGradient>
                                        <pattern patternUnits="userSpaceOnUse" id="b" width="300" height="250" x="0" y="0"
                                            viewBox="0 0 1080 900">
                                            <g fill-opacity="0.5">
                                                <polygon fill="#444" points="90 150 0 300 180 300"></polygon>
                                                <polygon points="90 150 180 0 0 0"></polygon>
                                                <polygon fill="#AAA" points="270 150 360 0 180 0"></polygon>
                                                <polygon fill="#DDD" points="450 150 360 300 540 300"></polygon>
                                                <polygon fill="#999" points="450 150 540 0 360 0"></polygon>
                                                <polygon points="630 150 540 300 720 300"></polygon>
                                                <polygon fill="#DDD" points="630 150 720 0 540 0"></polygon>
                                                <polygon fill="#444" points="810 150 720 300 900 300"></polygon>
                                                <polygon fill="#FFF" points="810 150 900 0 720 0"></polygon>
                                                <polygon fill="#DDD" points="990 150 900 300 1080 300"></polygon>
                                                <polygon fill="#444" points="990 150 1080 0 900 0"></polygon>
                                                <polygon fill="#DDD" points="90 450 0 600 180 600"></polygon>
                                                <polygon points="90 450 180 300 0 300"></polygon>
                                                <polygon fill="#666" points="270 450 180 600 360 600"></polygon>
                                                <polygon fill="#AAA" points="270 450 360 300 180 300"></polygon>
                                                <polygon fill="#DDD" points="450 450 360 600 540 600"></polygon>
                                                <polygon fill="#999" points="450 450 540 300 360 300"></polygon>
                                                <polygon fill="#999" points="630 450 540 600 720 600"></polygon>
                                                <polygon fill="#FFF" points="630 450 720 300 540 300"></polygon>
                                                <polygon points="810 450 720 600 900 600"></polygon>
                                                <polygon fill="#DDD" points="810 450 900 300 720 300"></polygon>
                                                <polygon fill="#AAA" points="990 450 900 600 1080 600"></polygon>
                                                <polygon fill="#444" points="990 450 1080 300 900 300"></polygon>
                                                <polygon fill="#222" points="90 750 0 900 180 900"></polygon>
                                                <polygon points="270 750 180 900 360 900"></polygon>
                                                <polygon fill="#DDD" points="270 750 360 600 180 600"></polygon>
                                                <polygon points="450 750 540 600 360 600"></polygon>
                                                <polygon points="630 750 540 900 720 900"></polygon>
                                                <polygon fill="#444" points="630 750 720 600 540 600"></polygon>
                                                <polygon fill="#AAA" points="810 750 720 900 900 900"></polygon>
                                                <polygon fill="#666" points="810 750 900 600 720 600"></polygon>
                                                <polygon fill="#999" points="990 750 900 900 1080 900"></polygon>
                                                <polygon fill="#999" points="180 0 90 150 270 150"></polygon>
                                                <polygon fill="#444" points="360 0 270 150 450 150"></polygon>
                                                <polygon fill="#FFF" points="540 0 450 150 630 150"></polygon>
                                                <polygon points="900 0 810 150 990 150"></polygon>
                                                <polygon fill="#222" points="0 300 -90 450 90 450"></polygon>
                                                <polygon fill="#FFF" points="0 300 90 150 -90 150"></polygon>
                                                <polygon fill="#FFF" points="180 300 90 450 270 450"></polygon>
                                                <polygon fill="#666" points="180 300 270 150 90 150"></polygon>
                                                <polygon fill="#222" points="360 300 270 450 450 450"></polygon>
                                                <polygon fill="#FFF" points="360 300 450 150 270 150"></polygon>
                                                <polygon fill="#444" points="540 300 450 450 630 450"></polygon>
                                                <polygon fill="#222" points="540 300 630 150 450 150"></polygon>
                                                <polygon fill="#AAA" points="720 300 630 450 810 450"></polygon>
                                                <polygon fill="#666" points="720 300 810 150 630 150"></polygon>
                                                <polygon fill="#FFF" points="900 300 810 450 990 450"></polygon>
                                                <polygon fill="#999" points="900 300 990 150 810 150"></polygon>
                                                <polygon points="0 600 -90 750 90 750"></polygon>
                                                <polygon fill="#666" points="0 600 90 450 -90 450"></polygon>
                                                <polygon fill="#AAA" points="180 600 90 750 270 750"></polygon>
                                                <polygon fill="#444" points="180 600 270 450 90 450"></polygon>
                                                <polygon fill="#444" points="360 600 270 750 450 750"></polygon>
                                                <polygon fill="#999" points="360 600 450 450 270 450"></polygon>
                                                <polygon fill="#666" points="540 600 630 450 450 450"></polygon>
                                                <polygon fill="#222" points="720 600 630 750 810 750"></polygon>
                                                <polygon fill="#FFF" points="900 600 810 750 990 750"></polygon>
                                                <polygon fill="#222" points="900 600 990 450 810 450"></polygon>
                                                <polygon fill="#DDD" points="0 900 90 750 -90 750"></polygon>
                                                <polygon fill="#444" points="180 900 270 750 90 750"></polygon>
                                                <polygon fill="#FFF" points="360 900 450 750 270 750"></polygon>
                                                <polygon fill="#AAA" points="540 900 630 750 450 750"></polygon>
                                                <polygon fill="#FFF" points="720 900 810 750 630 750"></polygon>
                                                <polygon fill="#222" points="900 900 990 750 810 750"></polygon>
                                                <polygon fill="#222" points="1080 300 990 450 1170 450"></polygon>
                                                <polygon fill="#FFF" points="1080 300 1170 150 990 150"></polygon>
                                                <polygon points="1080 600 990 750 1170 750"></polygon>
                                                <polygon fill="#666" points="1080 600 1170 450 990 450"></polygon>
                                                <polygon fill="#DDD" points="1080 900 1170 750 990 750"></polygon>
                                            </g>
                                        </pattern>
                                    </defs>
                                    <rect x="0" y="0" fill="url(#a)" width="100%" height="100%"></rect>
                                    <rect x="0" y="0" fill="url(#b)" width="100%" height="100%"></rect>
                                </svg></div>

                            <div class="card__avatar">
                                <img src="../../assets/imgs/userava_2.jpg" alt="">
                            </div>
                            <div class="card__title">张一航</div>
                            <div class="card__subtitle">Web Development</div>
                            <div class="card__wrapper">
                                <button class="card__btn">Gitee</button>
                                <button class="card__btn card__btn-solid">GitHub</button>
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
import lax from 'lax.js'
import { ref, onBeforeUnmount, onMounted } from 'vue';
import { scrollToSmoothly } from '@/utils/scroll.js'
import { useRouter } from 'vue-router';

const screenRef = ref()
const vantaEffect = ref('')
const titles = ['欢迎来到即时新闻.', '国内最棒的新闻站点.', 'Made by ZiYang & Ethan']
const titleIndex = ref(0)
const curIndex = ref(0)
const curSpaces = ref([])
const hotModuleRef = ref(null)
const aboutModuleRef = ref(null)
const router = useRouter()

const handleFindMore = () => {
    router.push({
        name: 'news'
    })
}

const wait = async (time) => {
    return new Promise((resolve) => {
        setTimeout(resolve, time)
    })
}

const handleScrollTo = (to) => {
    window.scrollTo({
        top: to,
        behavior: 'smooth',
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

const initLax = () => {
    // lax
    const hotModuleToTop = hotModuleRef.value.getBoundingClientRect().top
    const aboutModuleToTop = aboutModuleRef.value.getBoundingClientRect().top
    lax.init();
    lax.addDriver('scrollY', function () {
        return window.scrollY;
    })
    lax.addElements('.book', {
        scrollY: {
            opacity: [
                [hotModuleToTop - 300, hotModuleToTop],
                [0, 1]
            ],
            translateX: [
                [hotModuleToTop - 300, hotModuleToTop],
                [-100, 0]
            ],
        }
    })
    lax.addElements('.card1', {
        scrollY: {
            opacity: [
                [hotModuleToTop - 300, hotModuleToTop],
                [0, 1]
            ],
            translateY: [
                [hotModuleToTop - 300, hotModuleToTop],
                [100, 0]
            ],
        }
    })
    lax.addElements('.card2', {
        scrollY: {
            opacity: [
                [hotModuleToTop - 200, hotModuleToTop + 100],
                [0, 1]
            ],
            translateY: [
                [hotModuleToTop - 200, hotModuleToTop + 100],
                [100, 0]
            ]
        }
    })
    lax.addElements('.card3', {
        scrollY: {
            opacity: [
                [hotModuleToTop - 100, hotModuleToTop + 200],
                [0, 1]
            ],
            translateY: [
                [hotModuleToTop - 100, hotModuleToTop + 200],
                [100, 0]
            ]
        }
    })
    lax.addElements('.card4', {
        scrollY: {
            opacity: [
                [hotModuleToTop, hotModuleToTop + 300],
                [0, 1]
            ],
            translateY: [
                [hotModuleToTop, hotModuleToTop + 300],
                [100, 0]
            ]
        }
    })
    lax.addElements('.card5', {
        scrollY: {
            opacity: [
                [aboutModuleToTop - 300, aboutModuleToTop],
                [0, 1]
            ],
            translateY: [
                [aboutModuleToTop - 300, aboutModuleToTop],
                [100, 0]
            ],
        }
    })
    lax.addElements('.card6', {
        scrollY: {
            opacity: [
                [aboutModuleToTop - 100, aboutModuleToTop + 200],
                [0, 1]
            ],
            translateY: [
                [aboutModuleToTop - 100, aboutModuleToTop + 200],
                [100, 0]
            ]
        }
    })
}

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
    initLax()
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

                            .tag {
                                position: absolute;
                                left: 0;
                                top: 0;
                                background-color: white;
                                color: orange;
                                padding: 5px 10px;
                                font-size: 0.9rem;
                            }
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

        .about-module {
            background-color: rgba(238, 238, 238, 0.425);

            .content {
                display: flex;
                height: 100%;
                gap: 5%;

                .content-item {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 80%;

                    .card {
                        --main-color: #000;
                        --submain-color: #78858F;
                        --bg-color: #fff;
                        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                        position: relative;
                        width: 60%;
                        height: 384px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        border-radius: 20px;
                        background: var(--bg-color);
                    }

                    .card__img {
                        height: 192px;
                        width: 100%;
                    }

                    .card__img svg {
                        height: 100%;
                        border-radius: 20px 20px 0 0;
                    }

                    .card__avatar {
                        position: absolute;
                        width: 114px;
                        height: 114px;
                        background: var(--bg-color);
                        border-radius: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        top: calc(50% - 57px);
                    }

                    .card__avatar img {
                        width: 100px;
                        height: 100px;
                        border-radius: 50%;
                    }

                    .card__title {
                        margin-top: 60px;
                        font-weight: 500;
                        font-size: 18px;
                        color: var(--main-color);
                    }

                    .card__subtitle {
                        margin-top: 10px;
                        font-weight: 400;
                        font-size: 15px;
                        color: var(--submain-color);
                    }

                    .card__btn {
                        margin-top: 15px;
                        width: 76px;
                        height: 31px;
                        border: 2px solid var(--main-color);
                        border-radius: 4px;
                        font-weight: 700;
                        font-size: 11px;
                        color: var(--main-color);
                        background: var(--bg-color);
                        text-transform: uppercase;
                        transition: all 0.3s;
                    }

                    .card__btn-solid {
                        background: var(--main-color);
                        color: var(--bg-color);
                    }

                    .card__btn:hover {
                        background: var(--main-color);
                        color: var(--bg-color);
                    }

                    .card__btn-solid:hover {
                        background: var(--bg-color);
                        color: var(--main-color);
                    }
                }
            }
        }
    }
}</style>