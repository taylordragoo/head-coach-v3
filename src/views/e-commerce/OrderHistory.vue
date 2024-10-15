<template>
    <div class="card">
        <div class="px-6 py-20 md:px-12 lg:px-20">
            <div class="flex flex-col md:flex-row justify-between items-center mb-6">
                <div class="flex flex-col text-center md:text-left">
                    <span class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-2">My Orders</span>
                    <span class="text-surface-600 dark:text-surface-200 text-xl">Dignissim diam quis enim lobortis.</span>
                </div>
                <IconField icon-position="left" class="mt-8 mb-2 md:mt-0 md:mb-0 w-full lg:w-[25rem]">
                    <InputIcon class="pi pi-search" />
                    <InputText placeholder="Search" class="w-full" />
                </IconField>
            </div>
            <div class="bg-surface-0 dark:bg-surface-900 grid grid-cols-12 gap-4 grid-nogutter rounded-border shadow overflow-hidden">
                <div class="col-span-12 flex p-2 bg-surface-100 dark:bg-surface-700 rounded-t">
                    <div class="p-2 flex-auto text-center md:text-left">
                        <span class="text-surface-700 dark:text-surface-100 block">Order Number</span>
                        <span class="text-surface-900 dark:text-surface-0 font-medium block mt-2">45123</span>
                    </div>
                    <Divider align="center" layout="vertical" class="h-full mx-0 lg:mx-4 border-surface" />
                    <div class="p-2 flex-auto text-center md:text-left">
                        <span class="text-surface-700 dark:text-surface-100 block">Order Date</span>
                        <span class="text-surface-900 dark:text-surface-0 font-medium block mt-2">7 February 2023</span>
                    </div>
                    <Divider align="center" layout="vertical" class="h-full mx-0 lg:mx-4 border-surface" />
                    <div class="p-2 flex-auto text-center md:text-left">
                        <span class="text-surface-700 dark:text-surface-100 block">Total Amount</span>
                        <span class="text-surface-900 dark:text-surface-0 font-medium block mt-2">$123.00</span>
                    </div>
                </div>
                <div class="col-span-12">
                    <div class="p-2 my-6 flex flex-col lg:flex-row justify-between items-center">
                        <div class="flex flex-col lg:flex-row justify-center items-center px-2">
                            <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/ecommerce/orderhistory/orderhistory-1-1.png" alt="product" class="w-32 h-32 mr-4 flex-shrink-0" />
                            <div class="flex flex-col my-auto text-center md:text-left">
                                <span class="text-surface-900 dark:text-surface-0 font-medium mb-4 mt-4 lg:mt-0">Product Name Placeholder A Little Bit Long One</span>
                                <span class="text-surface-600 dark:text-surface-200 text-sm mb-4">White | Small</span>
                                <a tabindex="0" class="p-2 cursor-pointer w-36 mx-auto lg:mx-0 rounded-border font-medium text-center border border-primary text-primary hover:bg-primary/10 duration-150"
                                    >Buy Again <span class="font-light">| $12</span></a
                                >
                            </div>
                        </div>
                        <div class="bg-highlight mr-0 lg:mr-4 mt-6 lg:mt-0 p-2 flex items-center rounded-full">
                            <span class="bg-primary text-primary-contrast flex items-center justify-center rounded-full mr-2 min-w-8 min-h-8">
                                <i class="pi pi-check" />
                            </span>
                            <span class="text-highlight-contrast">Delivered on 7 February 2023</span>
                        </div>
                    </div>
                    <Divider class="w-full block lg:hidden border-surface" />
                    <div class="p-2 my-6 flex flex-col lg:flex-row justify-between items-center">
                        <div class="flex flex-col lg:flex-row justify-center items-center px-2">
                            <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/ecommerce/orderhistory/orderhistory-1-2.png" alt="product" class="w-32 h-32 mr-4 flex-shrink-0" />
                            <div class="flex flex-col my-auto text-center md:text-left">
                                <span class="text-surface-900 dark:text-surface-0 font-medium mb-4 mt-4 lg:mt-0">Product Name Placeholder A Little Bit Long One</span>
                                <span class="text-surface-600 dark:text-surface-200 text-sm mb-4">White | Small</span>
                                <a tabindex="0" class="p-2 cursor-pointer w-36 mx-auto lg:mx-0 rounded-border font-medium text-center border border-primary text-primary hover:bg-primary/10 duration-150"
                                    >Buy Again <span class="font-light">| $12</span></a
                                >
                            </div>
                        </div>
                        <div class="bg-highlight mr-0 lg:mr-4 mt-6 lg:mt-0 p-2 flex items-center rounded-full">
                            <span class="bg-primary text-primary-contrast flex items-center justify-center rounded-full mr-2 min-w-8 min-h-8">
                                <i class="pi pi-check" />
                            </span>
                            <span class="text-highlight-contrast">Delivered on 7 February 2023</span>
                        </div>
                    </div>
                    <Divider class="w-full block lg:hidden border-surface" />
                    <div class="p-2 my-6 flex flex-col lg:flex-row justify-between items-center">
                        <div class="flex flex-col lg:flex-row justify-center items-center px-2">
                            <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/ecommerce/orderhistory/orderhistory-1-3.png" alt="product" class="w-32 h-32 mr-4 flex-shrink-0" />
                            <div class="flex flex-col my-auto text-center md:text-left">
                                <span class="text-surface-900 dark:text-surface-0 font-medium mb-4 mt-4 lg:mt-0">Product Name Placeholder A Little Bit Long One</span>
                                <span class="text-surface-600 dark:text-surface-200 text-sm mb-4">White | Small</span>
                                <a tabindex="0" class="p-2 cursor-pointer w-36 mx-auto lg:mx-0 rounded-border font-medium text-center border border-primary text-primary hover:bg-primary/10 duration-150"
                                    >Buy Again <span class="font-light">| $12</span></a
                                >
                            </div>
                        </div>
                        <div class="bg-highlight mr-0 lg:mr-4 mt-6 lg:mt-0 p-2 flex items-center rounded-full">
                            <span class="bg-primary text-primary-contrast flex items-center justify-center rounded-full mr-2 min-w-8 min-h-8">
                                <i class="pi pi-check" />
                            </span>
                            <span class="text-highlight-contrast">Delivered on 7 February 2023</span>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 p-0 flex border-t border-surface">
                    <a tabindex="0" class="cursor-pointer py-6 flex flex-col md:flex-row text-center justify-center items-center font-medium text-primary hover:bg-primary hover:text-primary-contrast duration-150 w-full"
                        ><i class="pi pi-folder mr-2 mb-2 md:mb-0" />Archive Order</a
                    >
                    <a tabindex="0" class="cursor-pointer py-6 flex flex-col md:flex-row text-center justify-center items-center font-medium text-primary hover:bg-primary hover:text-primary-contrast duration-150 w-full"
                        ><i class="pi pi-refresh mr-2 mb-2 md:mb-0" />Return</a
                    >
                    <a tabindex="0" class="cursor-pointer py-6 flex flex-col md:flex-row text-center justify-center items-center font-medium text-primary hover:bg-primary hover:text-primary-contrast duration-150 w-full"
                        ><i class="pi pi-file mr-2 mb-2 md:mb-0" />View Invoice</a
                    >
                    <a tabindex="0" class="cursor-pointer py-6 flex flex-col md:flex-row text-center justify-center items-center font-medium text-primary hover:bg-primary hover:text-primary-contrast duration-150 w-full"
                        ><i class="pi pi-comment mr-2 mb-2 md:mb-0" />Write a Review</a
                    >
                </div>
            </div>
            <div class="bg-surface-0 dark:bg-surface-900 grid grid-cols-12 gap-4 grid-nogutter mt-8 rounded-border shadow overflow-hidden">
                <div class="col-span-12 flex p-2 bg-surface-100 dark:bg-surface-700 rounded-t">
                    <div class="p-2 flex-auto text-center md:text-left">
                        <span class="text-surface-700 dark:text-surface-100 block">Order Number</span>
                        <span class="text-surface-900 dark:text-surface-0 font-medium block mt-2">45123</span>
                    </div>
                    <Divider align="center" layout="vertical" class="h-full mx-0 lg:mx-4 border-surface" />
                    <div class="p-2 flex-auto text-center md:text-left">
                        <span class="text-surface-700 dark:text-surface-100 block">Order Date</span>
                        <span class="text-surface-900 dark:text-surface-0 font-medium block mt-2">7 February 2023</span>
                    </div>
                    <Divider align="center" layout="vertical" class="h-full mx-0 lg:mx-4 border-surface" />
                    <div class="p-2 flex-auto text-center md:text-left">
                        <span class="text-surface-700 dark:text-surface-100 block">Total Amount</span>
                        <span class="text-surface-900 dark:text-surface-0 font-medium block mt-2">$123.00</span>
                    </div>
                </div>
                <div class="col-span-12">
                    <div class="p-2 my-6 flex flex-col lg:flex-row justify-between items-center">
                        <div class="flex flex-col lg:flex-row justify-center items-center px-2">
                            <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/ecommerce/orderhistory/orderhistory-1-4.png" alt="product" class="w-32 h-32 mr-4 flex-shrink-0" />
                            <div class="flex flex-col my-auto text-center md:text-left">
                                <span class="text-surface-900 dark:text-surface-0 font-medium mb-4 mt-4 lg:mt-0">Product Name Placeholder A Little Bit Long One</span>
                                <span class="text-surface-600 dark:text-surface-200 text-sm mb-4">White | Small</span>
                                <a tabindex="0" class="p-2 cursor-pointer w-36 mx-auto lg:mx-0 rounded-border font-medium text-center border border-primary text-primary hover:bg-primary/10 duration-150"
                                    >Buy Again <span class="font-light">| $12</span></a
                                >
                            </div>
                        </div>
                        <div class="bg-highlight mr-0 lg:mr-4 mt-6 lg:mt-0 p-2 flex items-center rounded-full">
                            <span class="bg-primary text-primary-contrast flex items-center justify-center rounded-full mr-2 min-w-8 min-h-8">
                                <i class="pi pi-check" />
                            </span>
                            <span class="text-highlight-contrast">Delivered on 7 February 2023</span>
                        </div>
                    </div>
                    <Divider class="w-full block lg:hidden border-surface" />
                    <div class="p-2 my-6 flex flex-col lg:flex-row justify-between items-center">
                        <div class="flex flex-col lg:flex-row justify-center items-center px-2">
                            <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/ecommerce/orderhistory/orderhistory-1-5.png" alt="product" class="w-32 h-32 mr-4 flex-shrink-0" />
                            <div class="flex flex-col my-auto text-center md:text-left">
                                <span class="text-surface-900 dark:text-surface-0 font-medium mb-4 mt-4 lg:mt-0">Product Name Placeholder A Little Bit Long One</span>
                                <span class="text-surface-600 dark:text-surface-200 text-sm mb-4">White | Small</span>
                                <a tabindex="0" class="p-2 cursor-pointer w-36 mx-auto lg:mx-0 rounded-border font-medium text-center border border-primary text-primary hover:bg-primary/10 duration-150"
                                    >Buy Again <span class="font-light">| $12</span></a
                                >
                            </div>
                        </div>
                        <div class="bg-highlight mr-0 lg:mr-4 mt-6 lg:mt-0 p-2 flex items-center rounded-full">
                            <span class="bg-primary text-primary-contrast flex items-center justify-center rounded-full mr-2 min-w-8 min-h-8">
                                <i class="pi pi-check" />
                            </span>
                            <span class="text-highlight-contrast">Delivered on 7 February 2023</span>
                        </div>
                    </div>
                    <Divider class="w-full block lg:hidden border-surface" />
                    <div class="p-2 my-6 flex flex-col lg:flex-row justify-between items-center">
                        <div class="flex flex-col lg:flex-row justify-center items-center px-2">
                            <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/ecommerce/orderhistory/orderhistory-1-6.png" alt="product" class="w-32 h-32 mr-4 flex-shrink-0" />
                            <div class="flex flex-col my-auto text-center md:text-left">
                                <span class="text-surface-900 dark:text-surface-0 font-medium mb-4 mt-4 lg:mt-0">Product Name Placeholder A Little Bit Long One</span>
                                <span class="text-surface-600 dark:text-surface-200 text-sm mb-4">White | Small</span>
                                <a tabindex="0" class="p-2 cursor-pointer w-36 mx-auto lg:mx-0 rounded-border font-medium text-center border border-primary text-primary hover:bg-primary/10 duration-150"
                                    >Buy Again <span class="font-light">| $12</span></a
                                >
                            </div>
                        </div>
                        <div class="bg-highlight mr-0 lg:mr-4 mt-6 lg:mt-0 p-2 flex items-center rounded-full">
                            <span class="bg-primary text-primary-contrast flex items-center justify-center rounded-full mr-2 min-w-8 min-h-8">
                                <i class="pi pi-check" />
                            </span>
                            <span class="text-highlight-contrast">Delivered on 7 February 2023</span>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 p-0 flex border-t border-surface">
                    <a tabindex="0" class="cursor-pointer py-6 flex flex-col md:flex-row text-center justify-center items-center font-medium text-primary hover:bg-primary hover:text-primary-contrast duration-150 w-full"
                        ><i class="pi pi-folder mr-2 mb-2 md:mb-0" />Archive Order</a
                    >
                    <a tabindex="0" class="cursor-pointer py-6 flex flex-col md:flex-row text-center justify-center items-center font-medium text-primary hover:bg-primary hover:text-primary-contrast duration-150 w-full"
                        ><i class="pi pi-refresh mr-2 mb-2 md:mb-0" />Return</a
                    >
                    <a tabindex="0" class="cursor-pointer py-6 flex flex-col md:flex-row text-center justify-center items-center font-medium text-primary hover:bg-primary hover:text-primary-contrast duration-150 w-full"
                        ><i class="pi pi-file mr-2 mb-2 md:mb-0" />View Invoice</a
                    >
                    <a tabindex="0" class="cursor-pointer py-6 flex flex-col md:flex-row text-center justify-center items-center font-medium text-primary hover:bg-primary hover:text-primary-contrast duration-150 w-full"
                        ><i class="pi pi-comment mr-2 mb-2 md:mb-0" />Write a Review</a
                    >
                </div>
            </div>
        </div>
    </div>
</template>
