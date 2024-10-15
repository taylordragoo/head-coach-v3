<script setup>
import LineChart from '@/components/dashboard/charts/LineChart.vue';
import 'chartjs-adapter-date-fns';
import { ref } from 'vue';

const props = defineProps({
    class: {
        type: String,
        default: ''
    },
    labels: {
        type: Array,
        default: () => []
    },
    datasets: {
        type: Array,
        default: () => []
    },
    bgColor: {
        type: Array,
        default: null
    },
    borderColor: {
        type: String,
        default: null
    },
    show: {
        type: Number,
        default: 6
    },
    ranges: {
        type: Array,
        default: () => [
            { name: 'Daily', unit: 'day' },
            { name: 'Weekly', unit: 'week' },
            { name: 'Monthly', unit: 'month' },
            { name: 'Yearly', unit: 'year' }
        ]
    },
    tooltipPrefix: {
        type: String,
        default: '$'
    },
    cardData: {
        type: Object,
        default: () => ({
            title: '',
            value: '',
            percent: '',
            positive: true
        })
    }
});

const selectedRange = ref(props.ranges[0]);
</script>

<template>
    <div :class="class" class="min-w-96">
        <div class="flex items-start justify-between gap-2 mb-2">
            <div>
                <span class="label-medium text-surface-500">{{ cardData.title }}</span>
                <div class="flex items-center gap-3.5 mt-2">
                    <span class="title-h7">{{ cardData.value }}</span>
                    <Tag
                        :severity="cardData.positive ? 'success' : 'danger'"
                        :value="cardData.percent + '%'"
                        :pt="{
                            root: {
                                class: '!py-0.5 !px-2'
                            },
                            label: {
                                class: '!text-sm !font-semibold !leading-normal'
                            }
                        }"
                    />
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
        <LineChart :datasets="datasets" :bgColor="bgColor" :borderColor="borderColor" :option="selectedRange.unit" :tooltipPrefix="tooltipPrefix" class="!max-h-40" />
    </div>
</template>
