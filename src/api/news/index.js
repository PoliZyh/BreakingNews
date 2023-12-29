import request from "../../utils/request";

// 1. 显示八个栏目的新闻
export const showNewsReq = (data) => {
    return request({
        url: '/news/getDifferentTypeNews',
        method: "POST",
        data
    });
}

// 2. 查看每日每周每月的新闻发布数量曲线
export const getNewsPubDataReq = (data) => {
    return request({
        url: '/news/getNewsPubData',
        method: "GET",
        data
    });
}

// 3. 输入关键词查看新闻内容
export const searchNewsReq = (data) => {
    return request({
        url: '/news/searchNews',
        method: "POST",
        data
    })
}

// 4. 新闻订阅模块
export const addNewsSubReq = (data) => {
    return request({
        url: '/news/subscribe',
        method: "POST",
        data
    })
}

// 5. 翻译某条新闻
export const translateNewsReq = (data) => {
    return request({
        url: '/news/translate',
        method: "POST",
        data
    })
}

// 6. 获取某条新闻的具体内容
export const getNewsDetailReq = (data) => {
    return request({
        url: '/news/get',
        method: "POST",
        data
    })
}

// 7. 获取新闻数据的起始时间以及终止时间
export const getNewsTimeReq = (data) => {
    return request({
        url: '/news/date',
        method: "GET",
        data
    })
}

// 8. 获取每个栏目的订阅人数
export const getSubNumReq = (data) => {
    return request({
        url: '/news/typeNum',
        method: "GET",
        data
    })
}