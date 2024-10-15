<script setup>
import CreditScore from '@/components/dashboard/banking/CreditScore.vue';
import CurrencyCard from '@/components/dashboard/banking/CurrencyCard.vue';
import IncomeExpenditure from '@/components/dashboard/banking/IncomeExpenditure.vue';
import SpendingLimit from '@/components/dashboard/banking/SpendingLimit.vue';
import TransactionsHistory from '@/components/dashboard/banking/TransactionsHistory.vue';
import { generateRandomMultiData } from '@/lib/utils';
import { onBeforeMount, ref } from 'vue';

const randomData = ref(null);

onBeforeMount(() => {
    randomData.value = generateRandomMultiData('2020-10-27T00:00:00', '2023-11-03T00:00:00', 4, 2000, 3000, 2, true);
});
</script>

<template>
    <section>
        <div class="flex flex-col gap-7">
            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7">
                <CurrencyCard
                    class="flex-1"
                    :cardData="{
                        title: 'USD',
                        cardNumber: '**** **** 8234',
                        value: '$12.030,23',
                        percent: '64'
                    }"
                    :data="[12030, 26045, 14560, 24075, 18789, 12000, 17012, 19023, 10245]"
                />
                <CurrencyCard
                    class="flex-1"
                    :cardData="{
                        title: 'GBP',
                        cardNumber: '**** **** 8288',
                        value: '£27.789,56',
                        percent: '32'
                    }"
                    borderColor="rgb(234,88,12)"
                    :bgColor="['rgba(234,88,12,0.3)', 'rgba(234,88,12,0)']"
                    :data="[22000, 29000, 18000, 6000, 29000, 12000, 30000, 24000, 31000]"
                />
                <CurrencyCard
                    class="flex-1"
                    :cardData="{
                        title: 'EUR',
                        cardNumber: '**** **** 9284',
                        value: '€17.864,12',
                        percent: '24'
                    }"
                    borderColor="rgb(37,99,235)"
                    :bgColor="['rgba(37,99,235,0.3)', 'rgba(37,99,235,0)']"
                    :data="[8000, 20000, 10000, 17000, 16001, 5001, 21000, 19000, 17500]"
                />
                <CurrencyCard
                    class="flex-1"
                    :cardData="{
                        title: 'TRY',
                        cardNumber: '**** **** 2534',
                        value: '₺142.847,23 ',
                        percent: '17'
                    }"
                    borderColor="rgb(124,58,237)"
                    :bgColor="['rgba(124,58,237,0.3)', 'rgba(124,58,237,0)']"
                    :data="[10000, 14000, 25000, 12500, 15500, 28000, 12000, 14500, 29500]"
                />
            </div>
            <div class="w-full flex xl:flex-row flex-col gap-6">
                <IncomeExpenditure
                    class="w-full xl:w-auto xl:flex-1"
                    :cardData="{
                        title: 'Total Visitor ',
                        description: 'Sales trends summary, performance analysis'
                    }"
                    currency="$"
                    :labels="['Income', 'Expenditure']"
                    :datasets="randomData"
                    :bgColors="[undefined, ['rgba(165,243,252,0.4)', 'rgba(165,243,252,0)']]"
                    :borderColors="[undefined, 'rgb(8,145,178)']"
                />
                <SpendingLimit class="w-full xl:w-[25rem]" />
            </div>
            <div class="flex xl:flex-row flex-col gap-6">
                <CreditScore class="xl:w-auto w-full" />
                <TransactionsHistory class="xl:w-auto w-full xl:flex-1" />
            </div>
        </div>
    </section>
</template>
