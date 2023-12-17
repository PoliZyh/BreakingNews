<template>
    <div class="nav-box">
        <div class="nav-left">
            <img src="../../../assets/imgs/logo-black.png" alt="">
            <ul>
                <li v-for="(item, key) in categoryStore.map" :key="item.ch"
                :class="activeValue === item.value ? 'li-active' : ''"
                @click="handleRouter(key)">
                    {{ item.ch }}
                </li>
            </ul>
        </div>
    </div>
</template>


<script setup >
import { onMounted, ref, watch } from 'vue';
import useCategoryStore from '../../../store/modules/useCategoryStore';
import { useRoute, useRouter } from 'vue-router';

const categoryStore = useCategoryStore();
const route = useRoute();
const activeValue = ref()
const router = useRouter();
const handleRouter = (value) => {
    router.push({
        name: 'about',
        params: {
            category: value
        }
    })
}

watch(() =>route.fullPath, () => {
    activeValue.value = categoryStore.map[route.params.category].value
})


onMounted(() => {
    activeValue.value = categoryStore.map[route.params.category].value
})

</script>


<style scoped lang="scss">
.nav-box {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;
    box-shadow: 0px 2px 8px #f2f3f5;
    color: #909090;
    position: fixed;
    background-color: white;
    z-index: 99;
    .nav-left {
        height: 100%;
        display: flex;
        align-items: center;
        color: #515767;
        img {
            height: 80%;
        }
        ul {
            display: flex;
            li {
                padding: 5px 10px;
                font-size: 0.9rem;
                cursor: pointer;
            }
            li:hover {
                color: black;
            }
            .li-active {
                color: #1e80ff !important;
            }
        }
    }
}
</style>