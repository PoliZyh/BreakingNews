<template>
    <div class="subscribe">
        <Header></Header>
        <div class="content"></div>
    </div>
</template>


<script setup>
import Header from '../../layouts/Header.vue';
</script>


<style scoped lang="scss">
.subscribe {
    width: 100%;
    height: 100%;
    .content {
        width: 100%;
        height: calc(100% - 60px);
        background-color: #eeeef3b9;
    }
}
</style>