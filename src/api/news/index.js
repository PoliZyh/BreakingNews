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