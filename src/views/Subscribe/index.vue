<template>
    <div class="subscribe">
        <Header></Header>
        <div class="content">
            <div class="sidebar">
                <div class="bars">
                    <div class="bar-item" :class="active === index ? 'active' : ''"
                        v-for="(item, index) in categoryStore.map" @click="active = index" :key="item.ch">
                        {{ item.ch }}
                    </div>
                </div>
            </div>
            <div class="inner">
                <div class="title">
                    <span>订阅</span>
                    <Eye></Eye>
                    <span>{{ categoryStore.map[active].ch }}模块</span>
                </div>
                <div class="phone">
                    <h4>订阅须知</h4>
                    <ul class="list">
                        <li>1. 我们将定期向您发送有关 [订阅主题] 的最新信息、独家内容或其他相关更新。</li>
                        <li>2. 您的订阅周期自拟，具体取决于您选择的订阅计划。</li>
                        <li>3. 您可以随时取消订阅，但请在下一个订阅周期开始前 [提前期限] 通知我们，以避免不必要的资源浪费。</li>
                        <li>4. 我们将严格保护您的个人信息，并仅在法律允许的范围内使用。</li>
                    </ul>
                    <div class="ph-input">
                        <input v-for="(ip, index) in inputs" :key="ip.placeholder" type="text" :placeholder="ip.placeholder"
                            v-model="ip.value" ref="inputRefs" @input="handleInput(index)">
                    </div>
                    <div class="sub-day">
                        <span>订阅天数</span>
                        <div class="PB-range-slider-div" style="width: 70%;">
                            <input type="range" min="0" max="100" value="50" class="PB-range-slider" id="myRange" v-model.number="subParams.subscribe">
                            <p class="PB-range-slidervalue">{{ subParams.subscribe }}</p>
                        </div>
                    </div>
                    <div class="r">
                        <button class="button" @click="handleSub">
                            <svg viewBox="0 0 448 512" class="bell">
                                <path
                                    d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z">
                                </path>
                            </svg>
                            订阅
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import Header from '../../layouts/Header.vue';
import Eye from './components/Eye.vue'
import confetti from 'canvas-confetti'
import useCategoryStore from '@/store/modules/useCategoryStore'
import { ref } from 'vue';
import { addNewsSubReq } from '@/api/news'
import { ElMessage } from 'element-plus';

const categoryStore = useCategoryStore()
const active = ref('live')
const inputs = ref([
    {
        value: '',
        placeholder: '请'
    },
    {
        value: '',
        placeholder: '输'
    },
    {
        value: '',
        placeholder: '入'
    },
    {
        value: '',
        placeholder: '您'
    },
    {
        value: '',
        placeholder: '的'
    },
    {
        value: '',
        placeholder: '手'
    },
    {
        value: '',
        placeholder: '机'
    },
    {
        value: '',
        placeholder: '号'
    },
    {
        value: '',
        placeholder: '码'
    },
    {
        value: '',
        placeholder: '哦'
    },
    {
        value: '',
        placeholder: '!'
    }
])
const inputRefs = ref([])
const subParams = ref({
    subscribe: 30,
    phoneNumber: '',
    newsType: ''
})


const success = () => {
    confetti({
        particleCount: 300,
        spread: 100,
        origin: {
            x: 0.5,
            y: 1
        }
    })
}
const handleInput = (index) => {
    console.log(inputs.value[index].value.length)
    if (inputs.value[index].value.length > 0) {
        const nextIndex = index + 1;
        if (nextIndex < inputs.value.length) {
            inputRefs.value[nextIndex].focus();
        }
    }
}

const handleSub = async () => {
    if (validator()) {
        subParams.value.phoneNumber = inputs.value.map(item => item.value).join('')
        subParams.value.newsType = categoryStore.map[active.value].value
        const res = await addNewsSubReq(subParams.value)
        if (res.data) {
            success()
        } else {
            ElMessage({
                type: 'error',
                message: '订阅失败'
            })
        }
    } else {
        ElMessage({
            type: 'warning',
            message: '请填写完整信息'
        })
    }
}


const validator = () => {
    return inputs.value.every(item => item.value.length > 0)
}

</script>


<style scoped lang="scss">
.subscribe {
    width: 100%;
    height: 100%;
    background-color: whitesmoke;

    .content {
        width: 100%;
        height: calc(100% - 60px);
        display: flex;
        justify-content: center;
        align-content: center;
        padding: 5% 10%;
        gap: 10%;
        padding-left: 3%;

        .sidebar {
            width: 17%;
            padding: 10px 10px;
            background-color: white;
            height: fit-content;
            border-radius: 10px;

            .bars {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;

                .bar-item {
                    padding: 15px 20px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .active {
                    background-color: #eaf2ff;
                    border-radius: 5px;
                    color: #1e80ff;
                }

            }
        }

        .inner {
            width: 40%;
            background-color: rgb(237, 237, 237);
            padding: 20px;
            height: fit-content;
            border-radius: 10px;

            .title {
                height: 50px;
                width: 100%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                font-size: 1.2rem;
                font-weight: 600;
                padding-bottom: 15px;
                border-bottom: 1px solid #ffffff;
            }

            .sub-day {
                margin-top: 20px;
                display: flex;
                align-items: center;
                gap: 20px;

                .PB-range-slider {
                    -webkit-appearance: none;
                    width: 100%;
                    height: 4px;
                    border-radius: 5px;
                    background: #D5DBE1;
                    outline: none;
                    opacity: 0.7;
                    -webkit-transition: .2s;
                    transition: opacity .2s;
                }

                .PB-range-slider::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 15px;
                    height: 15px;
                    border-radius: 50%;
                    background-color: #000000;
                    cursor: pointer;
                    transition: 0.3s ease-in-out;
                }

                .PB-range-slider::-webkit-slider-thumb:hover {
                    box-shadow: 0px 0px 0px 8px rgba(0, 0, 0, 0.16);
                    transition: 0.3s ease-in-out;
                }

                .PB-range-slider::-moz-range-thumb {
                    width: 15px;
                    height: 15px;
                    border-radius: 50%;
                    background-color: #000000;
                    cursor: pointer;
                }

                .PB-range-slider-div {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;
                    padding: 1rem;
                    border-radius: 6px;
                    border: 1px solid #C6CACE;
                    box-shadow: 0px 1px 2px 0px #1F1E241F;
                }

                .PB-range-slidervalue {
                    font-weight: 600;
                }
            }

            .phone {
                padding: 20px;

                .r {
                    width: 100%;
                    margin-top: 20px;
                    display: flex;
                    justify-content: center;
                }

                .button {
                    width: 100px;
                    height: 50px;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: rgb(44, 44, 44);
                    border-radius: 10px;
                    cursor: pointer;
                    transition-duration: .3s;
                    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.13);
                    border: none;
                    gap: 20px;
                    color: white;
                }

                .bell {
                    width: 18px;
                }

                .bell path {
                    fill: white;
                }

                .button:hover {
                    background-color: rgb(56, 56, 56);
                }

                .button:hover .bell {
                    animation: bellRing 0.9s both;
                }

                /* bell ringing animation keyframes*/
                @keyframes bellRing {

                    0%,
                    100% {
                        transform-origin: top;
                    }

                    15% {
                        transform: rotateZ(10deg);
                    }

                    30% {
                        transform: rotateZ(-10deg);
                    }

                    45% {
                        transform: rotateZ(5deg);
                    }

                    60% {
                        transform: rotateZ(-5deg);
                    }

                    75% {
                        transform: rotateZ(2deg);
                    }
                }

                .button:active {
                    transform: scale(0.8);
                }


                h4 {
                    font-size: 1.2rem;
                    font-weight: 600;
                }

                .list {
                    margin-top: 10px;

                    li {
                        text-indent: 20px;
                        line-height: 26px;
                        padding-left: 10px;
                    }
                }

                .ph-input {
                    width: 100%;
                    display: flex;
                    gap: 5px;
                    margin-top: 20px;

                    input {
                        width: calc(11 / 100 * 100%);
                        border: none;
                        background-color: rgb(235, 235, 235);
                        box-shadow: inset 3px 3px 6px #d1d1d1,
                            inset -3px -3px 6px #ffffff;
                        padding: 5px;
                        transition: .4s ease-in-out;
                    }

                    input:hover {
                        box-shadow: inset 0px 0px 0px #d1d1d1,
                            inset 0px 0px 0px #ffffff;
                        background-color: lightgrey;
                    }

                    input:focus {
                        box-shadow: inset 0px 0px 0px #d1d1d1,
                            inset 0px 0px 0px #ffffff;
                        background-color: lightgrey;
                    }
                }
            }
        }
    }
}
</style>