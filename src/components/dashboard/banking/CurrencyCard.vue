<script setup>
import MiniLineChart from '@/components/dashboard/charts/MiniLineChart.vue';

defineProps({
    class: {
        type: String,
        default: ''
    },
    data: {
        type: Array,
        required: true
    },
    bgColor: {
        type: Array,
        default: null
    },
    borderColor: {
        type: String,
        default: null
    },
    currency: {
        type: String,
        default: '$'
    },
    cardData: {
        type: Object,
        default: () => ({
            title: '',
            cardNumber: '',
            value: '',
            percent: ''
        })
    }
});
</script>

<template>
    <div :class="class" class="card mb-0 p-0 min-w-64 rounded-2xl border border-surface shadow-[0px_1px_2px_0px_rgba(18,18,23,0.05)]">
        <div class="px-4 pt-3.5 pb-1">
            <div class="flex items-start gap-2">
                <span class="flex-1 label-medium">{{ cardData.title }}</span>
                <button><i class="pi pi-ellipsis-h text-surface-500 hover:text-surface-950 dark:hover:text-surface-0 transition-all" /></button>
            </div>
            <div class="flex items-center gap-1 mt-1">
                <span class="body-xsmall">{{ cardData.cardNumber }}</span>
                <button><i class="!text-sm pi pi-clone text-surface-500 hover:text-surface-950 dark:hover:text-surface-0 transition-all" /></button>
            </div>
            <div class="mt-2 flex items-center gap-3">
                <span class="label-large">{{ cardData.value }}</span>
                <div class="px-2 py-0.5 rounded-lg bg-green-100 text-green-700 text-sm font-semibold">{{ cardData.percent }}%</div>
            </div>
        </div>
        <MiniLineChart class="!max-h-20" :tooltipPrefix="currency" :data="data" :bgColor="bgColor" :borderColor="borderColor" />
    </div>
</template>
