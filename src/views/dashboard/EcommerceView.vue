<script setup>
import MiniStatCard from '@/components/dashboard/ecommerce/MiniStatCard.vue';
import Orders from '@/components/dashboard/ecommerce/Orders.vue';
import Overview from '@/components/dashboard/ecommerce/Overview.vue';
import SocialMediaRevenue from '@/components/dashboard/ecommerce/SocialMediaRevenue.vue';
import SocialMediaUsers from '@/components/dashboard/ecommerce/SocialMediaUsers.vue';
import { generateRandomData, generateRandomMultiData } from '@/lib/utils';
import { onBeforeMount, ref } from 'vue';

const randomData1 = ref(null);
const randomData2 = ref(null);
const randomData3 = ref(null);
const randomData4 = ref(null);

onBeforeMount(() => {
    randomData1.value = generateRandomData('2020-10-27T00:00:00', '2023-11-03T00:00:00', 4, 400, 800);
    randomData2.value = generateRandomData('2020-10-27T00:00:00', '2023-11-03T00:00:00', 4, 500, 700);
    randomData3.value = generateRandomData('2000-10-27T00:00:00', '2023-11-03T00:00:00', 4, 100, 500);
    randomData4.value = generateRandomMultiData('2020-10-27T00:00:00', '2023-11-03T00:00:00', 4, 10, 150, 3);
});
</script>

<template>
    <section>
        <div class="flex flex-col gap-7">
            <div class="flex flex-wrap gap-7">
                <MiniStatCard
                    class="min-w-80 h-72 flex-1"
                    :cardData="{
                        title: 'Sales Rate ',
                        value: '$256,137.48'
                    }"
                    currency="$"
                    :meterOptionsProps="{
                        showY: false,
                        data: randomData1
                    }"
                >
                    <template #footer>
                        <p class="p-4 border-t border-surface-200 dark:border-surface-800 body-xsmall text-left"><span class="label-xsmall text-green-600">+24%</span> total orders compared last month</p>
                    </template>
                </MiniStatCard>
                <MiniStatCard
                    class="min-w-80 h-72 flex-1"
                    :cardData="{
                        title: 'New Customer ',
                        value: '17.435'
                    }"
                    currency=""
                    :meterOptionsProps="{
                        showY: false,
                        bgColors: ['#A855F7'],
                        data: randomData2
                    }"
                >
                    <template #footer>
                        <p class="p-4 border-t border-surface-200 dark:border-surface-800 body-xsmall text-left"><span class="label-xsmall text-green-600">+12%</span> total orders compared last month</p>
                    </template>
                </MiniStatCard>
                <MiniStatCard
                    class="min-w-80 h-72 flex-1"
                    :cardData="{
                        title: 'AVG. Monthly Order ',
                        value: '32.048'
                    }"
                    currency=""
                    :meterOptionsProps="{
                        showY: false,
                        bgColors: ['#3B82F6'],
                        data: randomData3
                    }"
                >
                    <template #footer>
                        <p class="p-4 border-t border-surface-200 dark:border-surface-800 body-xsmall text-left"><span class="label-xsmall text-green-600">+40%</span> total orders compared last month</p>
                    </template>
                </MiniStatCard>
            </div>
            <Overview
                :cardData="{
                    title: 'Total Visitor ',
                    description: 'Sales trends summary, performance analysis'
                }"
                currency="$"
                :labels="['Fashion', 'Electronics', 'Home']"
                :datasets="randomData4"
                :bgColors="['rgba(151,163,182,1)', 'rgba(205,213,224,1)', 'rgba(227,232,239,1)']"
            />
            <div class="flex flex-wrap gap-7">
                <SocialMediaUsers />
                <Orders />
                <SocialMediaRevenue />
            </div>
        </div>
    </section>
</template>
