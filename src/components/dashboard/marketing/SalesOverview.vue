<script setup>
import MultiLineChart from '@/components/dashboard/charts/MultiLineChart.vue';
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
    },
    currency: {
        type: String,
        default: '$'
    },
    cardData: {
        type: Object,
        default: () => ({
            title: '',
            description: ''
        })
    }
});

const selectedRange = ref(props.ranges[0]);
</script>

<template>
    <div :class="class" class="min-w-96 flex flex-col overflow-hidden">
        <div class="flex items-start justify-between gap-2 mb-2">
            <div>
                <h3 class="label-medium">{{ cardData.title }}</h3>
                <span class="body-xsmall">{{ cardData.description }}</span>
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
        <div class="w-full flex-1 overflow-auto">
            <MultiLineChart :datasets="datasets" :bgColors="bgColors" :borderColors="borderColors" :option="selectedRange.unit" class="!max-h-80 h-full w-full cursor-pointer" />
        </div>
    </div>
</template>
