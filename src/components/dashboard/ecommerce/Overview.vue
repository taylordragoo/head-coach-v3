<script setup>
import 'chartjs-adapter-date-fns';
import { ref } from 'vue';
import BarChart from '../charts/BarChart.vue';

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
    bgColors: {
        type: Array,
        default: null
    },
    borderColors: {
        type: Array,
        default: null
    },
    ranges: {
        type: Array,
        default: () => [
            { name: 'Weekly', unit: 'week' },
            { name: 'Monthly', unit: 'month' },
            { name: 'Quarter', unit: 'quarter' },
            { name: 'Yearly', unit: 'year' }
        ]
    }
});
const selectedRange = ref(props.ranges[0]);
</script>

<template>
    <div :class="class" class="card mb-0 h-96 min-w-96 flex flex-col p-6 border border-surface rounded-2xl overflow-hidden">
        <div class="flex items-start justify-between gap-2 mb-4">
            <div>
                <h3 class="label-medium">E-Commerce Overview</h3>
                <span class="body-xsmall">Trends summary, performance analysis </span>
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
        <div class="flex-1 w-full h-full overflow-x-auto">
            <BarChart :labels="labels" :datasets="datasets" :bgColors="bgColors" :borderColors="borderColors" :option="selectedRange.unit" class="min-w-[640px] flex-1 h-full w-full cursor-pointer" />
        </div>
    </div>
</template>
