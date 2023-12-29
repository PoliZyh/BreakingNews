<template>
    <div class="line-chat-box">
        <div class="chart" ref="myChart" style="height: 400px; width: 1000px;"></div>
    </div>
</template>


<script setup>
import { onMounted, ref, watch } from 'vue';
import * as echarts from 'echarts';

const myChart = ref()
const props = defineProps({
    keys: {
        type: Array,
        default: () => []
    },
    values: {
        type: Array,
        default: () => []
    },
    maps: {
        type: Array,
        default: () => []
    }
})

const initOptions = () => {
    return {

        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: props.maps
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: props.keys
        },
        yAxis: {
            type: 'value'
        },
        series: props.values
    };
}


watch(props, () => createChart())

const createChart = () => {
    const ops = initOptions()
    const chart = echarts.init(myChart.value)
    // chart.clear()
    ops && chart.setOption(ops)

}

onMounted(() => {
    createChart()
})

</script>



<style scoped lang="scss">
.line-chat-box {
    width: 100%;
    height: 100%;
}
</style>