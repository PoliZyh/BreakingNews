<template>
    <div class="layout-header">
        <div class="nav-left">
            <img src="../assets/imgs/logo.png" alt="" @click="handleBack">
        </div>
    </div>
</template>


<script setup>
import { useRouter } from 'vue-router';


const router = useRouter()


const handleBack = () => {
    router.push({
        name: 'news'
    })
}
 

</script>


<style scoped lang="scss">
.layout-header {
    width: 100%;
    height: 60px;
    border-bottom: 1px solid grey;
    background-color: black;
    .nav-left {
        height: 100%;
        display: flex;
        align-items: center;
        color: #515767;
        img {
            height: 80%;
            cursor: pointer;
        }
    }
}
</style>