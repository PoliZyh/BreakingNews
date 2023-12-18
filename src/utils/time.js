import dayjs from "dayjs"

// 获取当前时间节点 早上｜上午｜下午｜晚上
export const getTimeNode = () => {
    const hour = new Date().getHours()
    const msg =
        hour <= 9 ? '早上' : hour <= 12 ? '中午' : hour <= 18 ? '下午' : '晚上'
    return msg
}

// 获取某天到某天的全部日期
export const getDatesInRange = (startDate, endDate) => {
    const dates = [];
    let currentDate = dayjs(startDate);

    while (currentDate.isBefore(endDate) || currentDate.isSame(endDate)) {
        dates.push(currentDate.format('YYYY-MM-DD'));
        currentDate = currentDate.add(1, 'day');
    }

    return dates;
}

// 获取今天和昨天日期
export const getTodayAndYesterday = () => {
    const today = dayjs().format('YYYY-MM-DD');
    const yesterday = dayjs().subtract(1, 'day').format('YYYY-MM-DD');
    return [yesterday, today]
}
