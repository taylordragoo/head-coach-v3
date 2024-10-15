<script setup>
import FollowerAnalytics from '@/components/dashboard/marketing/FollowerAnalytics.vue';
import OrderHistory from '@/components/dashboard/marketing/OrderHistory.vue';
import SalesOverview from '@/components/dashboard/marketing/SalesOverview.vue';
import StatCard from '@/components/dashboard/marketing/StatCard.vue';
import { generateRandomData, generateRandomMultiData } from '@/lib/utils';
import { onBeforeMount, ref } from 'vue';

const randomData1 = ref([]);
const randomData2 = ref([]);
const randomData3 = ref([]);
const randomData4 = ref([]);

onBeforeMount(() => {
    randomData1.value = generateRandomData('2020-10-27T00:00:00', '2023-11-03T00:00:00', 4, 2000, 3000);
    randomData2.value = generateRandomData('2023-10-27T00:00:00', '2024-11-03T00:00:00', 4, 1500, 3200);
    randomData3.value = generateRandomData('2000-10-27T00:00:00', '2023-11-03T00:00:00', 4, 1400, 5000);
    randomData4.value = generateRandomMultiData('2020-10-27T00:00:00', '2023-11-03T00:00:00', 4, 2000, 3000, 2, true);
});
</script>

<template>
    <section class="flex flex-col [&>*]:py-8 [&>*:first-child]:!pt-0 [&>*:last-child]:!pb-0 divide-y divide-[var(--surface-border)]">
        <div class="grid grid-cols-1 xl:grid-cols-3 divide-y xl:divide-y-0 xl:divide-x divide-[var(--surface-border)]">
            <StatCard
                class="pb-6 xl:pb-0 xl:pr-6"
                :cardData="{
                    title: 'Sales Revenue',
                    value: '$7,460.47',
                    percent: '64',
                    positive: true
                }"
                :datasets="randomData1"
            />
            <StatCard
                class="py-6 xl:py-0 xl:px-6"
                :cardData="{
                    title: 'AVG. order value',
                    value: '$2,460.34',
                    percent: '12',
                    positive: false
                }"
                borderColor="rgb(190,18,60)"
                :bgColor="['rgba(190,18,60,0.1)', 'rgba(190,18,60,0)']"
                :datasets="randomData2"
            />
            <StatCard
                class="pt-6 xl:pt-0 xl:pl-6"
                :cardData="{
                    title: 'Total Visitor ',
                    value: '27.329',
                    percent: '32',
                    positive: true
                }"
                borderColor="rgb(21,128,61)"
                currency=""
                :bgColor="['rgba(21,128,61,0.1)', 'rgba(21,128,61,0)']"
                :datasets="randomData3"
            />
        </div>
        <div class="flex xl:flex-row flex-col xl:divide-y-0 divide-y xl:divide-x divide-[var(--surface-border)]">
            <SalesOverview
                class="flex-1 xl:pr-6 pb-6 xl:pb-0"
                :cardData="{
                    title: 'Total Visitor ',
                    description: 'Sales trends summary, performance analysis'
                }"
                currency="$"
                :labels="['Income', 'Expenses']"
                :datasets="randomData4"
                :bgColors="[undefined, ['rgba(165,243,252,0.4)', 'rgba(165,243,252,0)']]"
                :borderColors="[undefined, 'rgb(8,145,178)']"
            />
            <FollowerAnalytics class="xl:w-auto w-full xl:pl-6 pt-6 xl:pt-0" />
        </div>
        <OrderHistory />
    </section>
</template>
