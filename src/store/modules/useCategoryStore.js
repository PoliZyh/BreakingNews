import { defineStore } from "pinia";


const useCategoryStore = defineStore("category", {
    state: () => ({
        map: {
            live: {
                value: 0,
                ch: '生活'
            },
            interior: {
                value: 1,
                ch: '国内'
            },
            international: {
                value: 2,
                ch: '国际'
            },
            economy: {
                value: 3,
                ch: '财经'
            },
            reaction: {
                value: 4,
                ch: '娱乐'
            },
            physical: {
                value: 5,
                ch: '体育'
            },
            it: {
                value: 6,
                ch: 'IT'
            },
            science: {
                value: 7,
                ch: '科学'
            },
            geo: {
                value: 8,
                ch: '地理'
            }
        }
    })
})


export default useCategoryStore