<template>
    <div class="statistics">
        <Header></Header>
        <div class="content">
            <div class="row header">
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
            </div>
            <div class="row main">
                <div class="card main-l"></div>
                <div class="card main-r"></div>
            </div>
            <div class="row footer">
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
            </div>
        </div>
    </div>
</template>


<script setup>
import Header from '../../layouts/Header.vue';
</script>


<style scoped lang="scss">
.statistics {
    width: 100%;
    height: 100%;
    .content {
        width: 100%;
        height: calc(100% - 60px);
        background-color: #eeeef3b9;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px;
        .row {
            padding: 5px;
            .card {
                width: 100%;
                height: 100%;
                background-color: white;
                border-radius: 5px;
                transition: all 0.2s;
            }
            .card:hover {
                box-shadow: 0 0 15px 5px rgb(238, 238, 238);
            }
        }
        .header {
            flex: 0.8;
            display: flex;
            gap: 20px;
        }
        .main {
            flex: 1.2;
            display: flex;
            gap: 20px;
            .main-l {
                flex: 9;
            }
            .main-r {
                flex: 1;
            }

        }
        .footer {
            flex: 1.1;
            display: flex;
            gap: 20px;
        }

    }
}
</style>