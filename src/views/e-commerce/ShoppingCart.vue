<script setup>
import { ref } from 'vue';

const options1 = ref(1);
const options2 = ref(1);
const quantityOptions = ref([
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 }
]);
</script>
<template>
    <div class="card">
        <div class="px-6 py-20 md:px-12 lg:px-20">
            <div class="flex flex-col items-center mb-12">
                <div class="text-surface-900 dark:text-surface-0 text-4xl mb-6 font-medium text-center">Your cart total is $82.00</div>
                <p class="text-surface-600 dark:text-surface-200 font-medium text-xl mt-0 mb-6">FREE SHIPPING AND RETURN</p>
                <Button label="Check Out" />
            </div>
            <ul class="list-none p-0 m-0">
                <li class="flex flex-col md:flex-row py-12 border-t border-b border-surface md:items-center">
                    <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/ecommerce/shoppingcart/shopping-cart-2-1.png" class="w-48 flex-shrink-0 mx-auto md:mx-0" />
                    <div class="flex-auto py-8 md:pl-8">
                        <div class="flex flex-wrap items-start sm:items-center sm:flex-row sm:justify-between border-surface pb-12">
                            <div class="w-full sm:w-6/12 flex flex-col">
                                <span class="text-surface-900 dark:text-surface-0 text-xl font-medium mb-4">Product Name</span>
                                <span class="text-surface-600 dark:text-surface-200">Medium</span>
                            </div>
                            <div class="w-full sm:w-6/12 flex items-start justify-between mt-4 sm:mt-0">
                                <div>
                                    <Select v-model="options1" :options="quantityOptions" option-label="label" option-value="value" />
                                </div>
                                <div class="flex flex-col sm:items-end">
                                    <span class="text-surface-900 dark:text-surface-0 text-2xl font-medium mb-2 sm:mb-4">$20.00</span>
                                    <a class="cursor-pointer text-pink-500 font-medium hover:text-pink-600 transition-colors duration-300" tabindex="0">Remove</a>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <span class="inline-flex items-center mb-4">
                                <i class="pi pi-envelope text-surface-600 dark:text-surface-200 mr-2" />
                                <span class="text-surface-600 dark:text-surface-200 mr-2">Order today.</span>
                            </span>
                            <span class="inline-flex items-center mb-4">
                                <i class="pi pi-send text-surface-600 dark:text-surface-200 mr-2" />
                                <span class="text-surface-600 dark:text-surface-200 mr-2">Delivery by <span class="font-bold">Dec 23.</span></span>
                            </span>
                            <span class="flex items-center">
                                <i class="pi pi-exclamation-triangle text-surface-600 dark:text-surface-200 mr-2" />
                                <span class="text-surface-600 dark:text-surface-200">Only 8 Available.</span>
                            </span>
                        </div>
                    </div>
                </li>
                <li class="flex flex-col md:flex-row py-12 border-t border-b border-surface md:items-center">
                    <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/ecommerce/shoppingcart/shopping-cart-2-2.png" class="w-48 flex-shrink-0 mx-auto md:mx-0" />
                    <div class="flex-auto py-8 md:pl-8">
                        <div class="flex flex-wrap items-start sm:items-center sm:flex-row sm:justify-between border-surface pb-12">
                            <div class="w-full sm:w-6/12 flex flex-col">
                                <span class="text-surface-900 dark:text-surface-0 text-xl font-medium mb-4">Product Name</span>
                                <span class="text-surface-600 dark:text-surface-200">Medium</span>
                            </div>
                            <div class="w-full sm:w-6/12 flex items-start justify-between mt-4 sm:mt-0">
                                <div>
                                    <Select v-model="options2" :options="quantityOptions" option-label="label" option-value="value" />
                                </div>
                                <div class="flex flex-col sm:items-end">
                                    <span class="text-surface-900 dark:text-surface-0 text-2xl font-medium mb-2 sm:mb-4">$62.00</span>
                                    <a class="cursor-pointer text-pink-500 font-medium hover:text-pink-600 transition-colors duration-300" tabindex="0">Remove</a>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <span class="inline-flex items-center mb-4">
                                <i class="pi pi-envelope text-surface-600 dark:text-surface-200 mr-2" />
                                <span class="text-surface-600 dark:text-surface-200 mr-2">Order today.</span>
                            </span>
                            <span class="inline-flex items-center mb-4">
                                <i class="pi pi-send text-surface-600 dark:text-surface-200 mr-2" />
                                <span class="text-surface-600 dark:text-surface-200 mr-2">Delivery by <span class="font-bold">Dec 23.</span></span>
                            </span>
                            <span class="flex items-center">
                                <i class="pi pi-exclamation-triangle text-surface-600 dark:text-surface-200 mr-2" />
                                <span class="text-surface-600 dark:text-surface-200">Only 2 Available.</span>
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="flex">
                <div class="w-48 hidden md:block" />
                <ul class="list-none py-0 pr-0 pl-0 md:pl-8 mt-12 mx-0 mb-0 flex-auto">
                    <li class="flex justify-between mb-6">
                        <span class="text-xl text-surface-900 dark:text-surface-0">Subtotal</span>
                        <span class="text-xl text-surface-900 dark:text-surface-0">$82.00</span>
                    </li>
                    <li class="flex justify-between mb-6">
                        <span class="text-xl text-surface-900 dark:text-surface-0">Shipping</span>
                        <span class="text-xl text-surface-900 dark:text-surface-0">Free</span>
                    </li>
                    <li class="flex justify-between mb-6">
                        <span class="text-xl text-surface-900 dark:text-surface-0">VAT</span>
                        <span class="text-xl text-surface-900 dark:text-surface-0">$8.00</span>
                    </li>
                    <li class="flex justify-between border-t border-surface mb-6 pt-6">
                        <span class="text-surface-900 dark:text-surface-0 font-bold text-3xl">Total</span>
                        <span class="text-surface-900 dark:text-surface-0 font-bold text-3xl">$90.00</span>
                    </li>
                    <li class="flex justify-end">
                        <Button label="Check Out" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
