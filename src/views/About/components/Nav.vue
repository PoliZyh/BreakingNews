<template>
    <div class="nav-box">
        <div class="nav-left">
            <img :src="logoUrl" alt="" @click="handleBack">
            <ul>
                <li v-for="(item, key) in categoryStore.map" :key="item.ch"
                :class="activeValue === item.value ? 'li-active' : ''"
                @click="handleRouter(key)">
                    {{ item.ch }}
                </li>
            </ul>
        </div>
        <div class="nav-right">
            <DayNight class="dn" ></DayNight>
        </div>
    </div>
</template>


<script setup >
import { computed, onMounted, ref, watch } from 'vue';
import useCategoryStore from '../../../store/modules/useCategoryStore';
import useThemeStore from '../../../store/modules/useThemeStore';
import { useRoute, useRouter } from 'vue-router';
import DayNight from './DayNight.vue'

const categoryStore = useCategoryStore();
const themeStore = useThemeStore();
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

const handleBack = () => {
    router.push({
        name: 'news'
    })
}

const logoUrl = computed(() => {
    const url =  themeStore.dark ? '../../../assets/imgs/logo.png' : '../../../assets/imgs/logo-black.png'
    return new URL(url, import.meta.url).href
})

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
    box-shadow: 0px 2px 8px var(--th-box-shadow-color);
    color: #909090;
    position: fixed;
    background-color: var(--th-header-color);
    z-index: 99;
    .nav-left {
        height: 100%;
        display: flex;
        align-items: center;
        color: var(--th-nav-color);
        img {
            height: 80%;
            cursor: pointer;
        }
        ul {
            display: flex;
            li {
                padding: 5px 10px;
                font-size: 0.9rem;
                cursor: pointer;
            }
            li:hover {
                color: var(--th-title-color);
            }
            .li-active {
                color: #1e80ff !important;
            }
        }
    }

    .nav-right {
        display: flex;
        justify-content: center;
        align-items: center;
        .dn {
            scale: 0.5;
        }
    }

}
</style>