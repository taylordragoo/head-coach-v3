<script setup>
import { ref } from 'vue';
import MultiLineChart from '../charts/MultiLineChart.vue';

defineProps({
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
    currency: {
        type: String,
        default: '$'
    }
});

const select = ref({ name: 'Weekly', value: 'week' });
const options = ref([
    { name: 'Weekly', value: 'week' },
    { name: 'Monthly', value: 'month' },
    { name: 'Yearly', value: 'year' }
]);
</script>

<template>
    <div :class="class" class="card mb-0 px-7 pb-7 pt-6 border rounded-3xl border-surface flex flex-col justify-between overflow-hidden">
        <div class="flex items-start justify-between mb-4">
            <div class="label-medium">Income and Expenditure</div>
            <SelectButton v-model="select" :options="options" optionLabel="name" aria-labelledby="basic" />
        </div>
        <div class="flex-1 w-full overflow-auto">
            <MultiLineChart :datasets="datasets" :labels="labels" :bgColors="bgColors" :borderColors="borderColors" :option="select.value" />
        </div>
    </div>
</template>
