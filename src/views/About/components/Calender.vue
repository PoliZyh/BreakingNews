<template>
    <div class="calendar">
        <div class="calendar-header">
            <div class="calendar-header__left">
                <el-icon class="hand" @click="nextYear(-1)">
                    <DArrowLeft />
                </el-icon>
                <el-icon class="hand" @click="nextMonth(-1)">
                    <ArrowLeft />
                </el-icon>
            </div>
            <div class="calendar-header__center">{{ showDate.year }} 年 {{ showDate.month + 1 }} 月</div>
            <div class="calendar-header__right">
                <el-icon class="hand" @click="nextMonth(1)">
                    <ArrowRight />
                </el-icon>
                <el-icon class="hand" @click="nextYear(1)">
                    <DArrowRight />
                </el-icon>
            </div>
        </div>
        <div class="calendar-main">
            <table class="calendar-table">
                <thead class="calendar-thead">
                    <tr>
                        <th v-for="(day, index) in sevenDay" :key="index">{{ day }}</th>
                    </tr>
                </thead>
                <tbody class="calendar-tbody">
                    <tr v-for="row in rows" :key="row">
                        <td v-for="date in dateList.slice((row - 1) * 7, (row - 1) * 7 + 7)" :key="date.value">
                            <div class="calendar-date hand" :class="{
                                'calendar-date--grey': date.month !== showDate.month,
                                'calendar-date--today': date.value === currentDate.value
                            }" @click="handleChangeCurrent(date.dayjs)">
                                <span>{{ date.date }}</span>
                                <span v-if="props.dotDays.includes(date.value)" class="calendar-dot"></span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script  setup>
import { ref, onMounted } from "vue";
import dayjs, { Dayjs } from "dayjs";


// interface Props {
//     dotDays?: string[]; // 需要加点的日期
//     format?: string; // 日期格式，必须保证格式化后的日期是唯一的，默认YYYY-MM-DD(参考dayjs)
//     current?: string; // 当前选中的日期，格式与format保持一致,默认选择当前日期
//     disabled?: boolean;
// }

const props = defineProps({
    dotDays: {
        type: Array,
        default: () => []
    },
    format: {
        type: String,
        default: "YYYY-MM-DD"
    },
    current: {
        type: String,
        default: ""
    }
})
const sevenDay= ["日", "一", "二", "三", "四", "五", "六"];
const dateList = ref([]);

const getCalendarDate = (dayjs) => {
    return {
        year: dayjs.year(),
        month: dayjs.month(),
        date: dayjs.date(),
        value: dayjs.format(props.format),
        dayjs: dayjs
    };
};
// 选中的日期
const currentDate = ref(getCalendarDate(dayjs()));
// 当前日历展示的日期
const showDate = ref(currentDate.value);

// 获取日期列表，6*7天
const rows = 6;
const getDateList = () => {
    const firstDay = showDate.value.dayjs.startOf("month").startOf("week");
    return Array(rows * 7)
        .fill(0)
        .map((n, i) => {
            const day = firstDay.add(i, "day");
            return getCalendarDate(day);
        });
};

const nextMonth = (number) => {
    showDate.value = getCalendarDate(showDate.value.dayjs.add(number, "month"));
    dateList.value = getDateList();
};
const nextYear = (number) => {
    showDate.value = getCalendarDate(showDate.value.dayjs.add(number, "year"));
    dateList.value = getDateList();
};

// 修改选中日期
const emit = defineEmits(["change"]);
const handleChangeCurrent = (dayjs) => {
    if (props.disabled) return;
    currentDate.value = getCalendarDate(dayjs);
    showDate.value = currentDate.value;
    dateList.value = getDateList();
    
    emit("change", currentDate.value);
};

onMounted(() => {
    console.log('a',props.current)
    if (props.current) {
        handleChangeCurrent(dayjs(props.current, props.format));
    } else {
        dateList.value = getDateList();
    }
});
</script>
<style lang="scss" scoped>
.calendar {
    user-select: none;

    .calendar-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 22px;
        padding: 0 12px;
        font-size: 14px;
        color: var(--el-text-color-primary);
    }

    .calendar-main {
        padding-bottom: 12px;
        margin-top: 12px;
    }

    .calendar-table {
        width: 100%;

        th,
        td {
            // width: (100/7);
            width: 14.285%;
            min-width: 40px;
            padding: 4px 0;
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
            color: var(--el-text-color-primary);
            text-align: center;
        }

        th {
            color: #bfbfbf;
        }
    }

    .calendar-date {
        position: relative;
        width: 24px;
        height: 24px;
        margin: -1px auto;
        border-radius: 2px;

        &--grey {
            color: #bfbfbf;
        }

        &:hover {
            background: var(--el-color-primary-light-9);
        }

        &--today {
            color: #ffffff !important;
            background: var(--el-color-primary) !important;
        }
    }

    .calendar-dot {
        position: absolute;
        top: -3px;
        right: -3px;
        width: 6px;
        height: 6px;
        background-color: #fc474c;
        border-radius: 50%;
    }
}

.hand {
    cursor: pointer;
}</style>
  
  