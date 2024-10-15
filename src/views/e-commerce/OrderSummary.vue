<template>
    <div class="card">
        <div class="px-6 py-20 md:px-12 lg:px-20">
            <span class="text-surface-700 dark:text-surface-100 text-xl">Thanks!</span>
            <div class="text-surface-900 dark:text-surface-0 font-bold text-4xl my-2">Successful Order 🚀</div>
            <p class="text-surface-700 dark:text-surface-100 text-xl mt-0 mb-6 p-0">Your order is on the way. It'll be shipped today. We'll inform you.</p>
            <div class="h-[3px] bg-gradient-to-r from-primary from-10% via-transparent to-transparent" />
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between py-8">
                <div class="mb-4 sm:mb-0">
                    <span class="font-medium text-xl text-surface-900 dark:text-surface-0 mr-2">Order number:</span>
                    <span class="font-medium text-xl text-primary">451234</span>
                </div>
                <div>
                    <Button label="Details" icon="pi pi-list" class="mr-2" outlined severity="secondary" />
                    <Button label="Print" icon="pi pi-print" outlined severity="secondary" />
                </div>
            </div>
            <div class="rounded-border border-surface border">
                <ul class="list-none p-0 m-0">
                    <li class="p-4 border-b border-surface flex items-start sm:items-center">
                        <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/ecommerce/ordersummary/order-summary-1-1.png" class="w-12 sm:w-32 flex-shrink-0 mr-4 shadow" />
                        <div class="flex flex-col">
                            <span class="text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Product Name</span>
                            <span class="text-surface-600 dark:text-surface-200 mb-4">Blue | Medium</span>
                            <span class="text-surface-900 dark:text-surface-0 font-medium">Quantity 1</span>
                        </div>
                        <span class="text-surface-900 dark:text-surface-0 font-medium text-lg ml-auto">$12.00</span>
                    </li>
                    <li class="p-4 flex items-center">
                        <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/ecommerce/ordersummary/order-summary-1-2.png" class="w-12 sm:w-32 flex-shrink-0 mr-4 shadow" />
                        <div class="flex flex-col">
                            <span class="text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Product Name</span>
                            <span class="text-surface-600 dark:text-surface-200 mb-4">Yellow | Large</span>
                            <span class="text-surface-900 dark:text-surface-0 font-medium">Quantity 1</span>
                        </div>
                        <span class="text-surface-900 dark:text-surface-0 font-medium text-lg ml-auto">$24.00</span>
                    </li>
                </ul>
            </div>
            <div class="flex flex-wrap mt-8 pb-4">
                <div class="w-full lg:w-6/12 pl-4">
                    <span class="font-medium text-surface-900 dark:text-surface-0">Shipping Address</span>
                    <div class="flex flex-col text-surface-900 dark:text-surface-0 mt-4 mb-8">
                        <span class="mb-1">Celeste Slater</span>
                        <span class="mb-1">606-3727 Ullamcorper. Roseville NH 11523</span>
                        <span>(786) 713-8616</span>
                    </div>

                    <span class="font-medium text-surface-900 dark:text-surface-0">Payment</span>
                    <div class="flex items-center mt-4">
                        <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/ecommerce/ordersummary/visa.png" class="w-16 mr-4" />
                        <div class="flex flex-col">
                            <span class="text-surface-900 dark:text-surface-0 mb-1">Visa Debit Card</span>
                            <span class="text-surface-900 dark:text-surface-0 font-medium">**** **** **** 1234</span>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-6/12 pl-4 lg:pl-0 lg:pr-4 flex items-end mt-8 lg:mt-0">
                    <ul class="list-none p-0 m-0 w-full">
                        <li class="mb-4">
                            <span class="font-medium text-surface-900 dark:text-surface-0">Summary</span>
                        </li>
                        <li class="flex justify-between mb-4">
                            <span class="text-surface-900 dark:text-surface-0">Subtotal</span>
                            <span class="text-surface-900 dark:text-surface-0 font-medium text-lg">$36.00</span>
                        </li>
                        <li class="flex justify-between mb-4">
                            <span class="text-surface-900 dark:text-surface-0">Shipping</span>
                            <span class="text-surface-900 dark:text-surface-0 font-medium text-lg">$5.00</span>
                        </li>
                        <li class="flex justify-between mb-4">
                            <span class="text-surface-900 dark:text-surface-0">Tax</span>
                            <span class="text-surface-900 dark:text-surface-0 font-medium text-lg">$4.00</span>
                        </li>
                        <li class="flex justify-between border-t border-surface py-4">
                            <span class="text-surface-900 dark:text-surface-0 font-medium">Total</span>
                            <span class="text-surface-900 dark:text-surface-0 font-bold text-lg">$41.00</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="px-6 py-20 md:px-12 lg:px-20">
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <span class="text-2xl font-medium text-surface-900 dark:text-surface-0">Thanks for your order!</span>
                <div class="flex mt-4 sm:mt-0">
                    <div class="flex flex-col items-center">
                        <span class="text-surface-900 dark:text-surface-0 font-medium mb-2">Order ID</span>
                        <span class="text-surface-700 dark:text-surface-100">451234</span>
                    </div>
                    <div class="flex flex-col items-center ml-12 md:ml-20">
                        <span class="text-surface-900 dark:text-surface-0 font-medium mb-2">Order Date</span>
                        <span class="text-surface-700 dark:text-surface-100">7 Feb 2023</span>
                    </div>
                </div>
            </div>
            <div class="flex flex-col md:flex-row md:items-center border-b border-surface py-8">
                <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/ecommerce/ordersummary/order-summary-2-1.png" class="w-60 flex-shrink-0 md:mr-12" />
                <div class="flex-auto mt-4 md:mt-0">
                    <span class="text-xl text-surface-900 dark:text-surface-0">Product Name</span>
                    <div class="font-medium text-2xl text-surface-900 dark:text-surface-0 mt-4 mb-8">Order Processing</div>
                    <div class="rounded-border overflow-hidden bg-surface-200 dark:bg-surface-700 mb-4 h-[7px]">
                        <div class="bg-primary text-primary-contrast rounded-border w-4/12 h-full" />
                    </div>
                    <div class="flex w-full justify-between">
                        <span class="text-surface-900 dark:text-surface-0 text-xs sm:text-base">Ordered</span>
                        <span class="text-surface-900 dark:text-surface-0 font-medium text-xs sm:text-base">Processing</span>
                        <span class="text-surface-500 dark:text-surface-300 text-xs sm:text-base">Shipping</span>
                        <span class="text-surface-500 dark:text-surface-300 text-xs sm:text-base">Delivered</span>
                    </div>
                </div>
            </div>
            <div class="py-8 flex justify-between flex-wrap">
                <div class="flex sm:mr-8 mb-8">
                    <span class="font-medium text-surface-900 dark:text-surface-0 text-xl mr-20">Product Name</span>
                    <span class="text-surface-900 dark:text-surface-0 text-xl">$21.00</span>
                </div>
                <div class="flex flex-col sm:mr-8 mb-8">
                    <span class="font-medium text-surface-900 dark:text-surface-0 text-xl">Shipping Address</span>
                    <div class="flex flex-col text-surface-900 dark:text-surface-0 mt-4">
                        <span class="mb-1">Celeste Slater</span>
                        <span class="mb-1">606-3727 Ullamcorper. Roseville NH 11523</span>
                        <span>(786) 713-8616</span>
                    </div>
                </div>
                <div class="flex flex-col">
                    <span class="font-medium text-surface-900 dark:text-surface-0 text-xl">Payment</span>
                    <div class="flex items-center mt-4">
                        <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/ecommerce/ordersummary/visa.png" class="w-16 mr-4" />
                        <div class="flex flex-col">
                            <span class="text-surface-900 dark:text-surface-0 mb-1">Visa Debit Card</span>
                            <span class="text-surface-900 dark:text-surface-0 font-medium">**** **** **** 1234</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
