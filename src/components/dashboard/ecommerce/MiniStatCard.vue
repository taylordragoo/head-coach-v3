<script setup>
import { ref } from 'vue';
import MeterChart from '../charts/MeterChart.vue';

const props = defineProps({
    class: {
        type: String,
        default: ''
    },
    show: {
        type: Number,
        default: 6
    },
    meterOptionsProps: {
        type: Object,
        default: () => ({
            max: null,
            bgColors: null,
            labels: null,
            showX: false,
            showY: false,
            yAxis: null,
            data: [],
            xAxisPosition: 'bottom',
            timeUnit: 'week'
        })
    },
    ranges: {
        type: Array,
        default: () => [
            { name: 'Hourly', unit: 'hour' },
            { name: 'Daily', unit: 'day' },
            { name: 'Weekly', unit: 'week' },
            { name: 'Monthly', unit: 'month' },
            { name: 'Yearly', unit: 'year' }
        ]
    },
    currency: {
        type: String,
        default: '$'
    },
    cardData: {
        type: Object,
        default: () => ({
            title: '',
            value: ''
        })
    }
});

const selectedRange = ref(props.ranges[0]);
</script>
<template>
    <div :class="class" class="card mb-0 p-0 min-w-96 flex flex-col border border-surface rounded-2xl">
        <div class="flex-1 flex flex-col p-6">
            <div class="flex items-start justify-between gap-2 mb-6">
                <div>
                    <span class="label-medium text-surface-500">{{ cardData.title }}</span>
                    <div class="flex items-center gap-3.5 mt-2">
                        <span class="title-h7">{{ cardData.value }}</span>
                    </div>
                </div>
                <Select
                    v-model="selectedRange"
                    :options="ranges"
                    optionLabel="name"
                    placeholder="Select a Month"
                    class="w-24"
                    :pt="{
                        root: {
                            class: 'pr-1.5 !rounded-lg'
                        },
                        label: {
                            class: '!pl-2 !pr-1 !py-1 !font-medium !text-sm !text-surface-950 dark:!text-surface-0'
                        },
                        dropdown: {
                            class: '!w-3 [&>svg]:!w-3 !text-surface-950 dark:!text-surface-0'
                        },
                        option: {
                            class: '!pl-2 !py-1.5 text-sm !font-medium'
                        }
                    }"
                />
            </div>
            <MeterChart
                :show="show"
                :currency="currency"
                :meterOptionsProps="{
                    ...meterOptionsProps,
                    timeUnit: selectedRange?.unit
                }"
            />
        </div>
        <slot name="footer" />
    </div>
</template>
