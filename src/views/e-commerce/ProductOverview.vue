<script setup>
import { ref } from 'vue';

const color = ref('bluegray');
const size = ref('M');
const liked = ref(false);
const images = ref(['product-overview-3-1.png', 'product-overview-3-2.png', 'product-overview-3-3.png', 'product-overview-3-4.png']);
const selectedImageIndex = ref(0);
const quantity = ref(1);
</script>
<template>
    <div class="card">
        <div class="px-6 py-20 md:px-12 lg:px-20">
            <div class="grid grid-cols-12 gap-4 mb-16">
                <div class="col-span-12 lg:col-span-6">
                    <div class="flex">
                        <div class="flex flex-col w-2/12 justify-between">
                            <img
                                v-for="(image, i) of images"
                                :key="image"
                                :src="'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/ecommerce/productoverview/' + image"
                                class="w-full cursor-pointer border-2 rounded-border border-transparent transition-colors duration-150"
                                :class="{ 'border-primary': selectedImageIndex === i }"
                                @click="selectedImageIndex = i"
                            />
                        </div>
                        <div class="pl-4 w-10/12">
                            <img :src="'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/ecommerce/productoverview/' + images[selectedImageIndex]" class="w-full rounded-border" />
                        </div>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-6 py-4 lg:pl-12">
                    <div class="flex items-center text-xl font-medium text-surface-900 dark:text-surface-0 mb-6">Product Title Placeholder</div>
                    <div class="flex items-center justify-between mb-8">
                        <span class="text-surface-900 dark:text-surface-0 font-medium text-3xl block">$120</span>
                        <div class="flex items-center">
                            <span class="mr-4">
                                <i class="pi pi-star-fill text-yellow-500 mr-1" />
                                <i class="pi pi-star-fill text-yellow-500 mr-1" />
                                <i class="pi pi-star-fill text-yellow-500 mr-1" />
                                <i class="pi pi-star-fill text-yellow-500 mr-1" />
                                <i class="pi pi-star text-surface-700 dark:text-surface-100 mr-1" />
                            </span>
                            <span class="text-sm"><b class="text-surface-900 dark:text-surface-0 mr-1">24</b> <span class="text-surface-500 dark:text-surface-300" />reviews</span>
                        </div>
                    </div>

                    <div class="font-bold text-surface-900 dark:text-surface-0 mb-4">Color</div>
                    <div class="flex items-center mb-8">
                        <div
                            class="w-8 h-8 flex-shrink-0 rounded-full bg-blue-500 mr-4 cursor-pointer transition-all duration-300"
                            :class="color === 'blue' ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-surface-0 dark:ring-offset-surface-950' : null"
                            @click="color = 'blue'"
                        />
                        <div
                            class="w-8 h-8 flex-shrink-0 rounded-full bg-purple-500 mr-4 cursor-pointer transition-all duration-300"
                            :class="color === 'purple' ? 'ring-2 ring-purple-500 ring-offset-2 ring-offset-surface-0 dark:ring-offset-surface-950' : null"
                            @click="color = 'purple'"
                        />
                        <div
                            class="w-8 h-8 flex-shrink-0 rounded-full bg-pink-500 mr-4 cursor-pointer transition-all duration-300"
                            :class="color === 'pink' ? 'ring-2 ring-pink-500 ring-offset-2 ring-offset-surface-0 dark:ring-offset-surface-950' : null"
                            @click="color = 'pink'"
                        />
                    </div>

                    <div class="mb-4 flex items-center justify-between">
                        <span class="font-bold text-surface-900 dark:text-surface-0">Size</span>
                        <a tabindex="0" class="cursor-pointer text-surface-600 dark:text-surface-200 text-sm flex items-center">Size Guide <i class="ml-1 pi pi-angle-right" /></a>
                    </div>
                    <div class="flex items-center mb-8">
                        <div
                            class="h-8 w-8 sm:h-12 sm:w-12 text-surface-900 dark:text-surface-0 inline-flex justify-center items-center flex-shrink-0 rounded-border mr-4 cursor-pointer hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors"
                            :class="{
                                'border-primary border-2 text-primary': size === 'XS',
                                'border border-surface-300 dark:border-surface-500': size !== 'XS'
                            }"
                            @click="size = 'XS'"
                        >
                            XS
                        </div>
                        <div
                            class="h-8 w-8 sm:h-12 sm:w-12 text-surface-900 dark:text-surface-0 inline-flex justify-center items-center flex-shrink-0 rounded-border mr-4 cursor-pointer hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors"
                            :class="{
                                'border-primary border-2 text-primary': size === 'S',
                                'border border-surface-300 dark:border-surface-500': size !== 'S'
                            }"
                            @click="size = 'S'"
                        >
                            S
                        </div>
                        <div
                            class="h-8 w-8 sm:h-12 sm:w-12 text-surface-900 dark:text-surface-0 inline-flex justify-center items-center flex-shrink-0 rounded-border mr-4 cursor-pointer hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors"
                            :class="{
                                'border-primary border-2 text-primary': size === 'M',
                                'border border-surface-300 dark:border-surface-500': size !== 'M'
                            }"
                            @click="size = 'M'"
                        >
                            M
                        </div>
                        <div
                            class="h-8 w-8 sm:h-12 sm:w-12 text-surface-900 dark:text-surface-0 inline-flex justify-center items-center flex-shrink-0 rounded-border mr-4 cursor-pointer hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors"
                            :class="{
                                'border-primary border-2 text-primary': size === 'L',
                                'border border-surface-300 dark:border-surface-500': size !== 'L'
                            }"
                            @click="size = 'L'"
                        >
                            L
                        </div>
                        <div
                            class="h-8 w-8 sm:h-12 sm:w-12 text-surface-900 dark:text-surface-0 inline-flex justify-center items-center flex-shrink-0 rounded-border mr-4 cursor-pointer hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors"
                            :class="{
                                'border-primary border-2 text-primary': size === 'XL',
                                'border border-surface-300 dark:border-surface-500': size !== 'XL'
                            }"
                            @click="size = 'XL'"
                        >
                            XL
                        </div>
                    </div>

                    <div class="font-bold text-surface-900 dark:text-surface-0 mb-4">Quantity</div>
                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <InputNumber
                            v-model="quantity"
                            :show-buttons="true"
                            button-layout="horizontal"
                            spinner-mode="horizontal"
                            :min="0"
                            class="w-32"
                            input-class="w-12 text-center"
                            decrement-button-class="!text-surface-600 dark:!text-surface-200 hover:!text-primary !py-1 !px-1 !bg-transparent"
                            increment-button-class="!text-surface-600 dark:!text-surface-200 hover:!text-primary !py-1 !px-1 !bg-transparent"
                            increment-button-icon="pi pi-plus"
                            decrement-button-icon="pi pi-minus"
                        />
                        <div class="flex items-center flex-1 mt-4 sm:mt-0 ml-0 sm:ml-8">
                            <Button label="Add to Cart" class="flex-1 mr-8" />
                            <i
                                class="pi !text-2xl cursor-pointer"
                                :class="{
                                    'pi-heart text-surface-600 dark:text-surface-200': !liked,
                                    'pi-heart-fill text-pink-500': liked
                                }"
                                @click="liked = !liked"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Tabs value="0">
                <TabList>
                    <Tab value="0">Details</Tab>
                    <Tab value="1">Reviews</Tab>
                    <Tab value="2">Shipping</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel value="0">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-3xl mb-6 mt-2">Product Details</div>
                        <p class="leading-normal text-surface-700 dark:text-surface-100 p-0 mx-0 mt-0 mb-6">
                            Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Duis ultricies lacus sed turpis tincidunt id. Sed tempus urna et pharetra. Metus vulputate eu scelerisque felis imperdiet proin fermentum.
                            Venenatis urna cursus eget nunc scelerisque viverra mauris in. Viverra justo nec ultrices dui sapien eget mi proin. Laoreet suspendisse interdum consectetur libero id faucibus.
                        </p>

                        <div class="grid grid-cols-12 gap-4">
                            <div class="col-span-12 lg:col-span-4">
                                <span class="text-surface-900 dark:text-surface-0 block font-medium mb-4">Highlights</span>
                                <ul class="py-0 pl-4 m-0 text-surface-700 dark:text-surface-100 mb-4">
                                    <li class="mb-2">Vulputate sapien nec.</li>
                                    <li class="mb-2">Purus gravida quis blandit.</li>
                                    <li class="mb-2">Nisi quis eleifend quam adipiscing.</li>
                                    <li>Imperdiet proin fermentum.</li>
                                </ul>
                            </div>
                            <div class="col-span-12 lg:col-span-4">
                                <span class="text-surface-900 dark:text-surface-0 block font-medium mb-4">Size and Fit</span>
                                <ul class="list-none p-0 m-0 text-surface-700 dark:text-surface-100 mb-6">
                                    <li class="mb-4"><span class="font-medium">Leo vel:</span> Egestas congue.</li>
                                    <li class="mb-4"><span class="font-medium">Sociis natoque:</span> Parturient montes nascetur.</li>
                                    <li><span class="font-medium">Suspendisse in:</span> Purus sit amet volutpat.</li>
                                </ul>
                            </div>
                            <div class="col-span-12 lg:col-span-4">
                                <span class="text-surface-900 dark:text-surface-0 block font-medium mb-4">Material & Care</span>
                                <ul class="p-0 m-0 text-surface-700 dark:text-surface-100 flex flex-wrap flex-col">
                                    <li class="flex items-center whitespace-nowrap w-40 mr-2 mb-4">
                                        <i class="pi pi-sun mr-2" />
                                        <span>Not dryer safe</span>
                                    </li>
                                    <li class="flex items-center whitespace-nowrap w-40 mb-4">
                                        <i class="pi pi-times-circle mr-2" />
                                        <span>No chemical wash</span>
                                    </li>
                                    <li class="flex items-center whitespace-nowrap w-40 mb-4 mr-2">
                                        <i class="pi pi-sliders-h mr-2" />
                                        <span>Iron medium heat</span>
                                    </li>
                                    <li class="flex items-center whitespace-nowrap w-40 mb-4">
                                        <i class="pi pi-minus-circle mr-2" />
                                        <span>Dry flat</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value="1">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-3xl mb-6 mt-2">Customer Reviews</div>
                        <ul class="list-none p-0 m-0">
                            <li class="pb-8 border-b border-surface">
                                <span>
                                    <i class="pi pi-star-fill text-yellow-500 mr-1" />
                                    <i class="pi pi-star-fill text-yellow-500 mr-1" />
                                    <i class="pi pi-star-fill text-yellow-500 mr-1" />
                                    <i class="pi pi-star-fill text-yellow-500 mr-1" />
                                    <i class="pi pi-star-fill text-gray-500" />
                                </span>
                                <div class="text-surface-900 dark:text-surface-0 font-medium text-xl my-4">Absolute Perfection!</div>
                                <p class="mx-0 mt-0 mb-4 text-surface-700 dark:text-surface-100 leading-normal">
                                    Blandit libero volutpat sed cras ornare arcu dui vivamus. Arcu dictum varius duis at consectetur lorem donec massa. Imperdiet proin fermentum leo vel orci porta non. Porttitor rhoncus dolor purus non.
                                </p>
                                <span class="text-surface-600 dark:text-surface-200 font-medium">Darlene Robertson, 2 days ago</span>
                            </li>
                            <li class="py-8 border-b border-surface">
                                <span>
                                    <i class="pi pi-star-fill text-yellow-500 mr-1" />
                                    <i class="pi pi-star-fill text-yellow-500 mr-1" />
                                    <i class="pi pi-star-fill text-yellow-500 mr-1" />
                                    <i class="pi pi-star-fill text-yellow-500 mr-1" />
                                    <i class="pi pi-star-fill text-yellow-500" />
                                </span>
                                <div class="text-surface-900 dark:text-surface-0 font-medium text-xl my-4">Classy</div>
                                <p class="mx-0 mt-0 mb-4 text-surface-700 dark:text-surface-100 leading-normal">Venenatis cras sed felis eget. Proin nibh nisl condimentum id venenatis a condimentum.</p>
                                <span class="text-surface-600 dark:text-surface-200 font-medium">Kristin Watson, 2 days ago</span>
                            </li>
                        </ul>
                    </TabPanel>
                    <TabPanel value="2">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-3xl mb-6 mt-2">Shipping Placeholder</div>
                        <p class="leading-normal text-surface-700 dark:text-surface-100 p-0 mx-0 mt-0 mb-6">
                            Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Justo donec enim diam vulputate ut pharetra. Tempus egestas sed sed risus. Feugiat sed lectus vestibulum mattis. Tristique nulla aliquet enim tortor at auctor
                            urna nunc. Habitant morbi tristique senectus et. Facilisi nullam vehicula ipsum.
                        </p>

                        <div class="grid grid-cols-12 gap-4">
                            <div class="col-span-12 md:col-span-6">
                                <span class="text-surface-900 dark:text-surface-0 block font-medium mb-4">Shipping Costs</span>
                                <ul class="py-0 pl-4 m-0 text-surface-700 dark:text-surface-100 mb-4">
                                    <li class="mb-2">Japan - JPY 2,500.</li>
                                    <li class="mb-2">Europe – EUR 10</li>
                                    <li class="mb-2">Switzerland – CHF 10</li>
                                    <li class="mb-2">Canada – CAD 25</li>
                                    <li class="mb-2">USA – USD 20</li>
                                    <li class="mb-2">Australia – AUD 30</li>
                                    <li class="mb-2">United Kingdom – GBP 10</li>
                                </ul>
                            </div>
                            <div class="col-span-12 md:col-span-6">
                                <span class="text-surface-900 dark:text-surface-0 block font-medium mb-4">Return Policy</span>
                                <p class="leading-normal text-surface-700 dark:text-surface-100 p-0 m-0">Pharetra et ultrices neque ornare aenean euismod elementum nisi. Diam phasellus vestibulum lorem sed. Mattis molestie a iaculis at.</p>
                            </div>
                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    </div>
</template>
