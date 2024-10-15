<script setup>
import { ref } from 'vue';

const color1 = ref('bluegray');
const color2 = ref('indigo');
const color3 = ref('purple');
const color4 = ref('cyan');
</script>

<template>
    <div class="card">
        <div class="px-6 py-20 md:px-12 lg:px-20">
            <div class="text-surface-900 dark:text-surface-0 font-medium text-4xl mb-6">Popular Products</div>
            <p class="mt-0 p-0 mb-8 text-surface-600 dark:text-surface-200 text-2xl">Exclusive Selection</p>
            <div class="grid grid-cols-12 gap-4 -mt-4 -ml-4 -mr-4">
                <div class="col-span-12 md:col-span-6 lg:col-span-4">
                    <div class="p-2">
                        <div class="shadow p-6 bg-surface-0 dark:bg-surface-900 rounded-border">
                            <div class="relative mb-4">
                                <span class="bg-surface-0 dark:bg-surface-900 text-surface-900 dark:text-surface-0 shadow px-4 py-2 absolute rounded-3xl left-4 top-4">Category</span>
                                <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/ecommerce/productlist/product-list-4-1.png" class="w-full" />
                            </div>
                            <div class="flex justify-between items-center mb-4">
                                <span class="text-surface-900 dark:text-surface-0 font-medium text-xl">Product Name</span>
                                <span>
                                    <i class="pi pi-star-fill text-yellow-500 mr-1" />
                                    <span class="font-medium">5.0</span>
                                </span>
                            </div>
                            <p class="mt-0 mb-4 text-surface-600 dark:text-surface-200 leading-normal">Enim nec dui nunc mattis enim ut tellus. Tincidunt arcu.</p>
                            <span class="text-primary text-xl font-medium">$140.00</span>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-4">
                    <div class="p-2">
                        <div class="shadow p-6 bg-surface-0 dark:bg-surface-900 rounded-border">
                            <div class="relative mb-4">
                                <span class="bg-surface-0 dark:bg-surface-900 text-surface-900 dark:text-surface-0 shadow px-4 py-2 absolute rounded-3xl left-4 top-4">Category</span>
                                <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/ecommerce/productlist/product-list-4-2.png" class="w-full" />
                            </div>
                            <div class="flex justify-between items-center mb-4">
                                <span class="text-surface-900 dark:text-surface-0 font-medium text-xl">Product Name</span>
                                <span>
                                    <i class="pi pi-star-fill text-yellow-500 mr-1" />
                                    <span class="font-medium">5.0</span>
                                </span>
                            </div>
                            <p class="mt-0 mb-4 text-surface-600 dark:text-surface-200 leading-normal">Enim nec dui nunc mattis enim ut tellus. Tincidunt arcu.</p>
                            <span class="text-primary text-xl font-medium">$82.00</span>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-4">
                    <div class="p-2">
                        <div class="shadow p-6 bg-surface-0 dark:bg-surface-900 rounded-border">
                            <div class="relative mb-4">
                                <span class="bg-surface-0 dark:bg-surface-900 text-surface-900 dark:text-surface-0 shadow px-4 py-2 absolute rounded-3xl left-4 top-4">Category</span>
                                <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/ecommerce/productlist/product-list-4-3.png" class="w-full" />
                            </div>
                            <div class="flex justify-between items-center mb-4">
                                <span class="text-surface-900 dark:text-surface-0 font-medium text-xl">Product Name</span>
                                <span>
                                    <i class="pi pi-star-fill text-yellow-500 mr-1" />
                                    <span class="font-medium">5.0</span>
                                </span>
                            </div>
                            <p class="mt-0 mb-4 text-surface-600 dark:text-surface-200 leading-normal">Enim nec dui nunc mattis enim ut tellus. Tincidunt arcu.</p>
                            <span class="text-primary text-xl font-medium">$54.00</span>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-4">
                    <div class="p-2">
                        <div class="shadow p-6 bg-surface-0 dark:bg-surface-900 rounded-border">
                            <div class="relative mb-4">
                                <span class="bg-surface-0 dark:bg-surface-900 text-surface-900 dark:text-surface-0 shadow px-4 py-2 absolute rounded-3xl left-4 top-4">Category</span>
                                <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/ecommerce/productlist/product-list-4-4.png" class="w-full" />
                            </div>
                            <div class="flex justify-between items-center mb-4">
                                <span class="text-surface-900 dark:text-surface-0 font-medium text-xl">Product Name</span>
                                <span>
                                    <i class="pi pi-star-fill text-yellow-500 mr-1" />
                                    <span class="font-medium">5.0</span>
                                </span>
                            </div>
                            <p class="mt-0 mb-4 text-surface-600 dark:text-surface-200 leading-normal">Enim nec dui nunc mattis enim ut tellus. Tincidunt arcu.</p>
                            <span class="text-primary text-xl font-medium">$72.00</span>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-4">
                    <div class="p-2">
                        <div class="shadow p-6 bg-surface-0 dark:bg-surface-900 rounded-border">
                            <div class="relative mb-4">
                                <span class="bg-surface-0 dark:bg-surface-900 text-surface-900 dark:text-surface-0 shadow px-4 py-2 absolute rounded-3xl left-4 top-4">Category</span>
                                <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/ecommerce/productlist/product-list-4-5.png" class="w-full" />
                            </div>
                            <div class="flex justify-between items-center mb-4">
                                <span class="text-surface-900 dark:text-surface-0 font-medium text-xl">Product Name</span>
                                <span>
                                    <i class="pi pi-star-fill text-yellow-500 mr-1" />
                                    <span class="font-medium">5.0</span>
                                </span>
                            </div>
                            <p class="mt-0 mb-4 text-surface-600 dark:text-surface-200 leading-normal">Enim nec dui nunc mattis enim ut tellus. Tincidunt arcu.</p>
                            <span class="text-primary text-xl font-medium">$99.00</span>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-4">
                    <div class="p-2">
                        <div class="shadow p-6 bg-surface-0 dark:bg-surface-900 rounded-border">
                            <div class="relative mb-4">
                                <span class="bg-surface-0 dark:bg-surface-900 text-surface-900 dark:text-surface-0 shadow px-4 py-2 absolute rounded-3xl left-4 top-4">Category</span>
                                <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/ecommerce/productlist/product-list-4-6.png" class="w-full" />
                            </div>
                            <div class="flex justify-between items-center mb-4">
                                <span class="text-surface-900 dark:text-surface-0 font-medium text-xl">Product Name</span>
                                <span>
                                    <i class="pi pi-star-fill text-yellow-500 mr-1" />
                                    <span class="font-medium">5.0</span>
                                </span>
                            </div>
                            <p class="mt-0 mb-4 text-surface-600 dark:text-surface-200 leading-normal">Enim nec dui nunc mattis enim ut tellus. Tincidunt arcu.</p>
                            <span class="text-primary text-xl font-medium">$89.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="card">
        <div class="px-6 py-20 md:px-12 lg:px-20">
            <div class="grid grid-cols-12 gap-4">
                <div class="col-span-12 md:col-span-6 lg:col-span-3 mb-8 lg:mb-0">
                    <div class="mb-4 relative">
                        <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/ecommerce/productlist/product-list-2-1.png" class="w-full" />
                        <button
                            type="button"
                            class="border border-white/20 rounded-border py-2 px-4 absolute inset-x-4 backdrop-blur-sm bottom-4 bg-black/30 text-white inline-flex items-center justify-center hover:bg-black/40 transition-colors duration-300 cursor-pointer font-semibold"
                        >
                            <i class="pi pi-shopping-cart mr-4 text-base" />
                            <span class="text-base">Add to Cart</span>
                        </button>
                    </div>
                    <div class="flex flex-col items-center">
                        <span class="text-xl text-surface-900 dark:text-surface-0 font-medium mb-4">Product Name</span>
                        <span class="text-xl text-surface-900 dark:text-surface-0 mb-4">$150.00</span>
                        <div class="flex items-center mb-4">
                            <div
                                class="w-8 h-8 flex-shrink-0 rounded-full bg-slate-500 mr-4 cursor-pointer transition-all duration-300"
                                :class="color1 === 'bluegray' ? 'ring-2 ring-slate-500 ring-offset-2 ring-offset-surface-0 dark:ring-offset-surface-950' : null"
                                @click="color1 = 'bluegray'"
                            />
                            <div
                                class="w-8 h-8 flex-shrink-0 rounded-full bg-indigo-500 mr-4 cursor-pointer transition-all duration-300"
                                :class="color1 === 'indigo' ? 'ring-2 ring-indigo-500 ring-offset-2 ring-offset-surface-0 dark:ring-offset-surface-950 ' : null"
                                @click="color1 = 'indigo'"
                            />
                            <div
                                class="w-8 h-8 flex-shrink-0 rounded-full bg-purple-500 mr-4 cursor-pointer transition-all duration-300"
                                :class="color1 === 'purple' ? 'ring-2 ring-purple-500 ring-offset-2 ring-offset-surface-0 dark:ring-offset-surface-950' : null"
                                @click="color1 = 'purple'"
                            />
                            <div
                                class="w-8 h-8 flex-shrink-0 rounded-full bg-cyan-500 mr-4 cursor-pointer transition-all duration-300"
                                :class="color1 === 'cyan' ? 'ring-2 ring-cyan-500 ring-offset-2 ring-offset-surface-0 dark:ring-offset-surface-950 ' : null"
                                @click="color1 = 'cyan'"
                            />
                        </div>

                        <span class="text-surface-500 dark:text-surface-300 capitalize">{{ color1 }}</span>
                    </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-3 mb-8 lg:mb-0">
                    <div class="mb-4 relative">
                        <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/ecommerce/productlist/product-list-2-2.png" class="w-full" />
                        <button
                            type="button"
                            class="border border-white/20 rounded-border py-2 px-4 absolute inset-x-4 backdrop-blur-sm bottom-4 bg-black/30 text-white inline-flex items-center justify-center hover:bg-black/40 transition-colors duration-300 cursor-pointer font-semibold"
                        >
                            <i class="pi pi-shopping-cart mr-4 text-base" />
                            <span class="text-base">Add to Cart</span>
                        </button>
                    </div>
                    <div class="flex flex-col items-center">
                        <span class="text-xl text-surface-900 dark:text-surface-0 font-medium mb-4">Product Name</span>
                        <span class="text-xl text-surface-900 dark:text-surface-0 mb-4">$150.00</span>
                        <div class="flex items-center mb-4">
                            <div
                                class="w-8 h-8 flex-shrink-0 rounded-full bg-slate-500 mr-4 cursor-pointer transition-all duration-300"
                                :class="color2 === 'bluegray' ? 'ring-2 ring-slate-500 ring-offset-2 ring-offset-surface-0 dark:ring-offset-surface-950' : null"
                                @click="color2 = 'bluegray'"
                            />
                            <div
                                class="w-8 h-8 flex-shrink-0 rounded-full bg-indigo-500 mr-4 cursor-pointer transition-all duration-300"
                                :class="color2 === 'indigo' ? 'ring-2 ring-indigo-500 ring-offset-2 ring-offset-surface-0 dark:ring-offset-surface-950' : null"
                                @click="color2 = 'indigo'"
                            />
                            <div
                                class="w-8 h-8 flex-shrink-0 rounded-full bg-purple-500 mr-4 cursor-pointer transition-all duration-300"
                                :class="color2 === 'purple' ? 'ring-2 ring-purple-500 ring-offset-2 ring-offset-surface-0 dark:ring-offset-surface-950' : null"
                                @click="color2 = 'purple'"
                            />
                            <div
                                class="w-8 h-8 flex-shrink-0 rounded-full bg-cyan-500 mr-4 cursor-pointer transition-all duration-300"
                                :class="color2 === 'cyan' ? 'ring-2 ring-cyan-500 ring-offset-2 ring-offset-surface-0 dark:ring-offset-surface-950' : null"
                                @click="color2 = 'cyan'"
                            />
                        </div>

                        <span class="text-surface-500 dark:text-surface-300 capitalize">{{ color2 }}</span>
                    </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-3 mb-8 lg:mb-0">
                    <div class="mb-4 relative">
                        <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/ecommerce/productlist/product-list-2-3.png" class="w-full" />
                        <button
                            type="button"
                            class="border border-white/20 rounded-border py-2 px-4 absolute inset-x-4 backdrop-blur-sm bottom-4 bg-black/30 text-white inline-flex items-center justify-center hover:bg-black/40 transition-colors duration-300 cursor-pointer font-semibold"
                        >
                            <i class="pi pi-shopping-cart mr-4 text-base" />
                            <span class="text-base">Add to Cart</span>
                        </button>
                    </div>
                    <div class="flex flex-col items-center">
                        <span class="text-xl text-surface-900 dark:text-surface-0 font-medium mb-4">Product Name</span>
                        <span class="text-xl text-surface-900 dark:text-surface-0 mb-4">$150.00</span>
                        <div class="flex items-center mb-4">
                            <div
                                class="w-8 h-8 flex-shrink-0 rounded-full bg-slate-500 mr-4 cursor-pointer transition-all duration-300"
                                :class="color3 === 'bluegray' ? 'ring-2 ring-slate-500 ring-offset-2 ring-offset-surface-0 dark:ring-offset-surface-950' : null"
                                @click="color3 = 'bluegray'"
                            />
                            <div
                                class="w-8 h-8 flex-shrink-0 rounded-full bg-indigo-500 mr-4 cursor-pointer transition-all duration-300"
                                :class="color3 === 'indigo' ? 'ring-2 ring-indigo-500 ring-offset-2 ring-offset-surface-0 dark:ring-offset-surface-950' : null"
                                @click="color3 = 'indigo'"
                            />
                            <div
                                class="w-8 h-8 flex-shrink-0 rounded-full bg-purple-500 mr-4 cursor-pointer transition-all duration-300"
                                :class="color3 === 'purple' ? 'ring-2 ring-purple-500 ring-offset-2 ring-offset-surface-0 dark:ring-offset-surface-950' : null"
                                @click="color3 = 'purple'"
                            />
                            <div
                                class="w-8 h-8 flex-shrink-0 rounded-full bg-cyan-500 mr-4 cursor-pointer transition-all duration-300"
                                :class="color3 === 'cyan' ? 'ring-2 ring-cyan-500 ring-offset-2 ring-offset-surface-0 dark:ring-offset-surface-950' : null"
                                @click="color3 = 'cyan'"
                            />
                        </div>

                        <span class="text-surface-500 dark:text-surface-300 capitalize">{{ color3 }}</span>
                    </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-3">
                    <div class="mb-4 relative">
                        <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/ecommerce/productlist/product-list-2-4.png" class="w-full" />
                        <button
                            type="button"
                            class="border border-white/20 rounded-border py-2 px-4 absolute inset-x-4 backdrop-blur-sm bottom-4 bg-black/30 text-white inline-flex items-center justify-center hover:bg-black/40 transition-colors duration-300 cursor-pointer font-semibold"
                        >
                            <i class="pi pi-shopping-cart mr-4 text-base" />
                            <span class="text-base">Add to Cart</span>
                        </button>
                    </div>
                    <div class="flex flex-col items-center">
                        <span class="text-xl text-surface-900 dark:text-surface-0 font-medium mb-4">Product Name</span>
                        <span class="text-xl text-surface-900 dark:text-surface-0 mb-4">$150.00</span>
                        <div class="flex items-center mb-4">
                            <div
                                class="w-8 h-8 flex-shrink-0 rounded-full bg-slate-500 mr-4 cursor-pointer transition-all duration-300"
                                :class="color4 === 'bluegray' ? 'ring-2 ring-slate-500 ring-offset-2 ring-offset-surface-0 dark:ring-offset-surface-950' : null"
                                @click="color4 = 'bluegray'"
                            />
                            <div
                                class="w-8 h-8 flex-shrink-0 rounded-full bg-indigo-500 mr-4 cursor-pointer transition-all duration-300"
                                :class="color4 === 'indigo' ? 'ring-2 ring-indigo-500 ring-offset-2 ring-offset-surface-0 dark:ring-offset-surface-950' : null"
                                @click="color4 = 'indigo'"
                            />
                            <div
                                class="w-8 h-8 flex-shrink-0 rounded-full bg-purple-500 mr-4 cursor-pointer transition-all duration-300"
                                :class="color4 === 'purple' ? 'ring-2 ring-purple-500 ring-offset-2 ring-offset-surface-0 dark:ring-offset-surface-950' : null"
                                @click="color4 = 'purple'"
                            />
                            <div
                                class="w-8 h-8 flex-shrink-0 rounded-full bg-cyan-500 mr-4 cursor-pointer transition-all duration-300"
                                :class="color4 === 'cyan' ? 'ring-2 ring-cyan-500 ring-offset-2 ring-offset-surface-0 dark:ring-offset-surface-950' : null"
                                @click="color4 = 'cyan'"
                            />
                        </div>

                        <span class="text-surface-500 dark:text-surface-300 capitalize">{{ color4 }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
