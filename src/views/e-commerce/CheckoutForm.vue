<script setup>
import { ref } from 'vue';

const quantities1 = ref([1, 1, 1]);
const value4 = ref(null);
const checked2 = ref(true);
const checked3 = ref(true);

const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);

const selectedCity = ref(null);
</script>

<template>
    <div class="card">
        <div class="">
            <div class="grid grid-cols-12 gap-4 grid-nogutter">
                <div class="col-span-12 lg:col-span-6 h-full px-6 py-20 md:px-12 lg:px-20">
                    <ul class="flex list-none flex-wrap p-0 mb-12">
                        <li class="flex items-center text-primary mr-2">Cart <i class="pi pi-chevron-right text-surface-500 dark:text-surface-300 text-xs ml-2" /></li>
                        <li class="flex items-center text-surface-500 dark:text-surface-300 mr-2">Information<i class="pi pi-chevron-right text-surface-500 dark:text-surface-300 text-xs ml-2" /></li>
                        <li class="flex items-center text-surface-500 dark:text-surface-300 mr-2">Shipping<i class="pi pi-chevron-right text-surface-500 dark:text-surface-300 text-xs ml-2" /></li>
                        <li class="flex items-center text-surface-500 dark:text-surface-300 mr-2">Payment</li>
                    </ul>
                    <div class="grid grid-cols-12 gap-4 formgrid">
                        <div class="col-span-12 field mb-12">
                            <span class="text-surface-900 dark:text-surface-0 text-2xl block font-medium mb-8">Contact Information</span>
                            <InputText id="email" placeholder="Email" type="text" class="w-full mb-4" />
                            <div class="flex items-center">
                                <Checkbox id="checkbox-2" v-model="checked2" name="checkbox-2" :binary="true" class="text-surface-900 dark:text-surface-0" />
                                <label id="checkbox-2" class="text-surface-900 dark:text-surface-0 ml-2">Email me with news and offers</label>
                            </div>
                        </div>
                        <div class="col-span-12 field mb-4">
                            <span class="text-surface-900 dark:text-surface-0 text-2xl block font-medium mb-8">Shipping</span>
                            <Select v-model="selectedCity" :options="cities" placeholder="Country / Region" option-label="name" :show-clear="true" class="w-full" />
                        </div>
                        <div class="col-span-12 lg:col-span-6 field mb-4">
                            <InputText id="name" placeholder="Name" type="text" class="w-full" />
                        </div>
                        <div class="col-span-12 lg:col-span-6 field mb-4">
                            <InputText id="lastname" placeholder="Last Name" type="text" class="w-full" />
                        </div>
                        <div class="col-span-12 field mb-4">
                            <InputText id="address" placeholder="Address" type="text" class="w-full" />
                        </div>
                        <div class="col-span-12 field mb-4">
                            <InputText id="address2" placeholder="Apartment, suite, etc" type="text" class="w-full" />
                        </div>
                        <div class="col-span-12 lg:col-span-6 field mb-4">
                            <InputText id="pc" placeholder="Postal Code" type="text" class="w-full" />
                        </div>
                        <div class="col-span-12 lg:col-span-6 field mb-4">
                            <InputText id="city" placeholder="City" type="text" class="w-full" />
                        </div>
                        <div class="col-span-12 lg:col-span-6 field mb-4">
                            <div class="flex items-center">
                                <Checkbox id="checkbox-3" v-model="checked3" name="checkbox-3" :binary="true" class="text-surface-900 dark:text-surface-0" />
                                <label id="checkbox-3" class="text-surface-900 dark:text-surface-0 ml-2">Save for next purchase</label>
                            </div>
                        </div>
                        <div class="col-span-12 flex flex-col lg:flex-row justify-center items-center lg:justify-end mt-12">
                            <Button class="mt-4 lg:mt-0 w-full lg:w-auto lg:px-12 order-2 lg:order-1 lg:mr-6" label="Return to Cart" text />
                            <Button class="w-full lg:w-auto lg:px-12 order-1 lg:order-2" label="Continue to Shipping" />
                        </div>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-6 px-6 py-20 md:px-12 lg:px-20 bg-surface-50 dark:bg-surface-900">
                    <div class="border-b pb-4 border-surface">
                        <span class="text-surface-900 dark:text-surface-0 font-medium text-xl">Your Cart</span>
                    </div>
                    <div class="flex flex-col lg:flex-row flex-wrap lg:items-center py-2 mt-4 border-b border-surface">
                        <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/ecommerce/checkoutform/checkoutform-1-2.png" class="w-32 h-32 flex-shrink-0 mb-4" />
                        <div class="flex-auto lg:ml-4">
                            <div class="flex items-center justify-between mb-4">
                                <span class="text-surface-900 dark:text-surface-0 font-medium">Product Name</span>
                                <span class="text-surface-900 dark:text-surface-0 font-bold">$123.00</span>
                            </div>
                            <div class="text-surface-600 dark:text-surface-200 text-sm mb-4">Black | Large</div>
                            <div class="flex flex-auto justify-between items-center">
                                <InputNumber
                                    v-model="quantities1[0]"
                                    :show-buttons="true"
                                    button-layout="horizontal"
                                    spinner-mode="horizontal"
                                    :min="0"
                                    input-class="w-12 text-center py-2 px-1 border-transparent"
                                    decrement-button-class="!text-surface-600 dark:!text-surface-200 hover:!text-primary !py-1 !px-1 !bg-transparent"
                                    increment-button-class="!text-surface-600 dark:!text-surface-200 hover:!text-primary !py-1 !px-1 !bg-transparent"
                                    increment-button-icon="pi pi-plus"
                                    decrement-button-icon="pi pi-minus"
                                />
                                <Button icon="pi pi-trash" text rounded />
                            </div>
                        </div>
                    </div>
                    <div class="py-2 mt-4 border-b border-surface">
                        <InputGroup class="mb-4">
                            <InputText v-model="value4" type="text" placeholder="Promo code" class="w-full" />
                            <Button label="Apply" :disabled="!value4" />
                        </InputGroup>
                    </div>
                    <div class="py-2 mt-4">
                        <div class="flex justify-between items-center mb-4">
                            <span class="text-surface-900 dark:text-surface-0 font-medium">Subtotal</span>
                            <span class="text-surface-900 dark:text-surface-0">$123.00</span>
                        </div>
                        <div class="flex justify-between items-center mb-4">
                            <span class="text-surface-900 dark:text-surface-0 font-medium">Shipping</span>
                            <span class="text-primary font-bold">Free</span>
                        </div>
                        <div class="flex justify-between items-center mb-4">
                            <span class="text-surface-900 dark:text-surface-0 font-bold">Total</span>
                            <span class="text-surface-900 dark:text-surface-0 font-medium text-xl">$123.00</span>
                        </div>
                    </div>
                    <div class="py-2 mt-4 bg-highlight flex items-center justify-center">
                        <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/ecommerce/checkoutform/checkoutform-1-3.png" class="mr-2" alt="Country Flag" /><span
                            class="text-highlight-contrast font-medium"
                            >No additional duties or taxes.</span
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
