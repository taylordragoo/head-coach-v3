<script setup>
import { ref } from 'vue';

const block1 = ref(`
<div class="flex lg:flex-row flex-col gap-4 bg-surface-0 dark:bg-surface-900">
    <div class="flex-1 flex items-center justify-center">
        <div class="p-6 pt-12 lg:p-12">
            <h1 class="text-3xl lg:text-5xl font-bold text-surface-900 dark:text-surface-0 mb-4 lg:leading-normal text-center lg:text-left">
                Create the screens your <br /><span class="text-primary">visitors deserve to see</span>
            </h1>
            <p class="text-surface-700 dark:text-surface-200 leading-normal mb-8 text-center lg:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div class="flex items-center justify-center lg:justify-start gap-6">
                <Button label="Learn More" type="button" />
                <Button label="Live Demo" type="button" outlined />
            </div>
        </div>
    </div>
    <div class="flex-1 overflow-hidden">
        <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/hero/hero-1.png" alt="hero-1" class="h-full w-full object-cover lg:[clip-path:polygon(12%_0,100%_0%,100%_100%,0_100%)]" />
    </div>
</div>`);

const block2 = ref(`
<div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20 text-center">
    <div class="mb-4 font-bold text-3xl">
        <span class="text-surface-900 dark:text-surface-0">One Product, </span>
        <span class="text-primary-600 dark:text-primary-400">Many Solutions</span>
    </div>
    <div class="text-surface-700 dark:text-surface-0/70 mb-[3rem]">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</div>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-3.5 gap-y-6">
        <div class="w-full p-4">
            <span
                class="w-16 h-16 mb-6 rounded-lg flex items-center justify-center mx-auto bg-surface-0 dark:bg-surface-800 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_0px_2px_0px_rgba(0,0,0,0.06),0px_4px_10px_0px_rgba(0,0,0,0.03)]"
            >
                <i class="pi pi-desktop text-2xl lg:text-3xl text-primary-500 dark:text-primary-400" />
            </span>
            <div class="text-surface-900 dark:text-surface-0 text-xl mb-2 font-medium">Built for Developers</div>
            <p class="text-surface-700 dark:text-surface-0/70 leading-normal max-w-sm mx-auto text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div class="w-full p-4">
            <span
                class="w-16 h-16 mb-6 rounded-lg flex items-center justify-center mx-auto bg-surface-0 dark:bg-surface-800 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_0px_2px_0px_rgba(0,0,0,0.06),0px_4px_10px_0px_rgba(0,0,0,0.03)]"
            >
                <i class="pi pi-lock text-2xl lg:text-3xl text-primary-500 dark:text-primary-400" />
            </span>
            <div class="text-surface-900 dark:text-surface-0 text-xl mb-2 font-medium">End-to-End Encryption</div>
            <p class="text-surface-700 dark:text-surface-0/70 leading-normal max-w-sm mx-auto text-center">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</p>
        </div>
        <div class="w-full p-4">
            <span
                class="w-16 h-16 mb-6 rounded-lg flex items-center justify-center mx-auto bg-surface-0 dark:bg-surface-800 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_0px_2px_0px_rgba(0,0,0,0.06),0px_4px_10px_0px_rgba(0,0,0,0.03)]"
            >
                <i class="pi pi-check-circle text-2xl lg:text-3xl text-primary-500 dark:text-primary-400" />
            </span>
            <div class="text-surface-900 dark:text-surface-0 text-xl mb-2 font-medium">Easy to Use</div>
            <p class="text-surface-700 dark:text-surface-0/70 leading-normal max-w-sm mx-auto text-center">Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.</p>
        </div>
        <div class="w-full p-4">
            <span
                class="w-16 h-16 mb-6 rounded-lg flex items-center justify-center mx-auto bg-surface-0 dark:bg-surface-800 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_0px_2px_0px_rgba(0,0,0,0.06),0px_4px_10px_0px_rgba(0,0,0,0.03)]"
            >
                <i class="pi pi-globe text-2xl lg:text-3xl text-primary-500 dark:text-primary-400" />
            </span>
            <div class="text-surface-900 dark:text-surface-0 text-xl mb-2 font-medium">Fast & Global Support</div>
            <p class="text-surface-700 dark:text-surface-0/70 leading-normal max-w-sm mx-auto text-center">Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.</p>
        </div>
        <div class="w-full p-4">
            <span
                class="w-16 h-16 mb-6 rounded-lg flex items-center justify-center mx-auto bg-surface-0 dark:bg-surface-800 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_0px_2px_0px_rgba(0,0,0,0.06),0px_4px_10px_0px_rgba(0,0,0,0.03)]"
            >
                <i class="pi pi-github text-2xl lg:text-3xl text-primary-500 dark:text-primary-400" />
            </span>
            <div class="text-surface-900 dark:text-surface-0 text-xl mb-2 font-medium">Open Source</div>
            <p class="text-surface-700 dark:text-surface-0/70 leading-normal max-w-sm mx-auto text-center">Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec feugiat.</p>
        </div>
        <div class="w-full p-4">
            <span
                class="w-16 h-16 mb-6 rounded-lg flex items-center justify-center mx-auto bg-surface-0 dark:bg-surface-800 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_0px_2px_0px_rgba(0,0,0,0.06),0px_4px_10px_0px_rgba(0,0,0,0.03)]"
            >
                <i class="pi pi-shield text-2xl lg:text-3xl text-primary-500 dark:text-primary-400" />
            </span>
            <div class="text-surface-900 dark:text-surface-0 text-xl mb-2 font-medium">Trusted Security</div>
            <p class="text-surface-700 dark:text-surface-0/70 leading-normal max-w-sm mx-auto text-center">Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus metus aliquam eleifend.</p>
        </div>
    </div>
</div>`);

const block3 = ref(`
<div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
    <div class="text-surface-900 dark:text-surface-0 font-bold text-4xl lg:text-6xl mb-6 text-center">Pricing Plans</div>
    <div class="text-surface-700 dark:text-surface-0/70 text-xl mb-12 text-center leading-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
    <div class="flex lg:flex-row flex-col gap-8 lg:gap-4 xl:gap-12 max-w-7xl mx-auto">
        <div
            class="w-full flex-1 py-4 px-4 lg:px-6 flex rounded-lg flex-col bg-surface-0 dark:bg-surface-800 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_0px_2px_0px_rgba(0,0,0,0.06),0px_4px_10px_0px_rgba(0,0,0,0.03)]"
        >
            <div class="text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Basic</div>
            <div class="text-surface-600 dark:text-surface-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
            <div class="my-4 w-full h-px bg-surface-300 dark:bg-surface-700" />
            <div class="flex items-center gap-2">
                <span class="font-bold text-2xl text-surface-900 dark:text-surface-0">$9</span>
                <span class="font-medium text-surface-600 dark:text-surface-300">per month</span>
            </div>
            <div class="my-4 w-full h-px bg-surface-300 dark:bg-surface-600" />
            <ul class="list-none flex flex-col gap-4 flex-1">
                <li class="flex items-center gap-2">
                    <i class="pi pi-check-circle text-green-500 text-lg" />
                    <span class="text-surface-800 dark:text-surface-100 leading-6"> Arcu vitae elementum </span>
                </li>
                <li class="flex items-center gap-2">
                    <i class="pi pi-check-circle text-green-500 text-lg" />
                    <span class="text-surface-800 dark:text-surface-100 leading-6"> Dui faucibus in ornare </span>
                </li>
                <li class="flex items-center gap-2">
                    <i class="pi pi-check-circle text-green-500 text-lg" />
                    <span class="text-surface-800 dark:text-surface-100 leading-6"> Morbi tincidunt augue </span>
                </li>
            </ul>
            <div class="my-4 w-full h-px bg-surface-300 dark:bg-surface-700" />
            <Button label="Buy Now" class="px-5 py-3" />
        </div>
        <div
            class="w-full flex-1 py-4 px-4 lg:px-6 flex rounded-lg flex-col bg-surface-0 dark:bg-surface-800 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_0px_2px_0px_rgba(0,0,0,0.06),0px_4px_10px_0px_rgba(0,0,0,0.03)]"
        >
            <div class="text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Premium</div>
            <div class="text-surface-600 dark:text-surface-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
            <div class="my-4 w-full h-px bg-surface-300 dark:bg-surface-700" />
            <div class="flex items-center gap-2">
                <span class="font-bold text-2xl text-surface-900 dark:text-surface-0">$29</span>
                <span class="font-medium text-surface-600 dark:text-surface-300">per month</span>
            </div>
            <div class="my-4 w-full h-px bg-surface-300 dark:bg-surface-700" />
            <ul class="list-none flex flex-col gap-4 flex-1">
                <li class="flex items-center gap-2">
                    <i class="pi pi-check-circle text-green-500 text-lg" />
                    <span class="text-surface-800 dark:text-surface-100 leading-6"> Arcu vitae elementum </span>
                </li>
                <li class="flex items-center gap-2">
                    <i class="pi pi-check-circle text-green-500 text-lg" />
                    <span class="text-surface-800 dark:text-surface-100 leading-6"> Dui faucibus in ornare </span>
                </li>
                <li class="flex items-center gap-2">
                    <i class="pi pi-check-circle text-green-500 text-lg" />
                    <span class="text-surface-800 dark:text-surface-100 leading-6"> Morbi tincidunt augue </span>
                </li>
                <li class="flex items-center gap-2">
                    <i class="pi pi-check-circle text-green-500 text-lg" />
                    <span class="text-surface-800 dark:text-surface-100 leading-6"> Duis ultricies lacus sed </span>
                </li>
            </ul>
            <div class="my-4 w-full h-px bg-surface-300 dark:bg-surface-700" />
            <Button label="Buy Now" class="px-5 py-3" />
        </div>
        <div
            class="w-full flex-1 py-4 px-4 lg:px-6 flex rounded-lg flex-col bg-surface-0 dark:bg-surface-800 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_0px_2px_0px_rgba(0,0,0,0.06),0px_4px_10px_0px_rgba(0,0,0,0.03)]"
        >
            <div class="text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Enterprise</div>
            <div class="text-surface-600 dark:text-surface-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
            <div class="my-4 w-full h-px bg-surface-300 dark:bg-surface-700" />
            <div class="flex items-center gap-2">
                <span class="font-bold text-2xl text-surface-900 dark:text-surface-0">$49</span>
                <span class="font-medium text-surface-600 dark:text-surface-300">per month</span>
            </div>
            <div class="my-4 w-full h-px bg-surface-300 dark:bg-surface-700" />
            <ul class="list-none flex flex-col gap-4 flex-1">
                <li class="flex items-center gap-2">
                    <i class="pi pi-check-circle text-green-500 text-lg" />
                    <span class="text-surface-800 dark:text-surface-100 leading-6"> Arcu vitae elementum </span>
                </li>
                <li class="flex items-center gap-2">
                    <i class="pi pi-check-circle text-green-500 text-lg" />
                    <span class="text-surface-800 dark:text-surface-100 leading-6"> Dui faucibus in ornare </span>
                </li>
                <li class="flex items-center gap-2">
                    <i class="pi pi-check-circle text-green-500 text-lg" />
                    <span class="text-surface-800 dark:text-surface-100 leading-6"> Morbi tincidunt augue </span>
                </li>
                <li class="flex items-center gap-2">
                    <i class="pi pi-check-circle text-green-500 text-lg" />
                    <span class="text-surface-800 dark:text-surface-100 leading-6"> Duis ultricies lacus sed </span>
                </li>
                <li class="flex items-center gap-2">
                    <i class="pi pi-check-circle text-green-500 text-lg" />
                    <span class="text-surface-800 dark:text-surface-100 leading-6"> Imperdiet proin </span>
                </li>
                <li class="flex items-center gap-2">
                    <i class="pi pi-check-circle text-green-500 text-lg" />
                    <span class="text-surface-800 dark:text-surface-100 leading-6"> Nisi scelerisque </span>
                </li>
            </ul>
            <div class="my-4 w-full h-px bg-surface-300 dark:bg-surface-700" />
            <Button label="Buy Now" class="px-5 py-3" />
        </div>
    </div>
</div>`);

const block4 = ref(`
<div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
    <div class="text-surface-700 dark:text-surface-100 text-center">
        <div class="text-primary font-bold mb-4"><i class="pi pi-discord" />&nbsp;POWERED BY DISCORD</div>
        <div class="text-surface-900 dark:text-surface-0 font-bold text-5xl mb-4">Join Our Design Community</div>
        <div class="text-surface-700 dark:text-surface-100 text-2xl mb-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
        <Button label="Join Now" icon="pi pi-discord" raised rounded class="font-bold px-8 py-4 whitespace-nowrap" />
    </div>
</div>`);

const block5 = ref(`
<div class="min-h-40 bg-surface-0 dark:bg-surface-950">
    <div class="bg-surface-900 text-gray-100 py-4 px-6 lg:px-20 flex justify-between items-center flex-wrap">
        <div class="font-bold">🔥 Hot Deals!</div>
        <div class="inline-flex gap-1 items-center">
            <span class="leading-normal hidden lg:flex">Libero voluptatum atque exercitationem praesentium provident odit.</span>
            <a class="text-surface-0 underline font-bold" href="#">Learn More</a>
        </div>
        <Button icon="pi pi-times" text rounded severity="secondary" class="!text-surface-0 hover:!bg-surface-500/20" />
    </div>
</div>`);

const block6 = ref(`
<div class="bg-surface-0 dark:bg-surface-950 px-6 py-8 md:px-12 lg:px-20">
    <ul class="list-none p-0 m-0 flex items-center font-medium mb-4">
        <li>
            <a class="text-surface-500 dark:text-surface-300 no-underline leading-normal cursor-pointer">Application</a>
        </li>
        <li class="px-2">
            <i class="pi pi-angle-right text-surface-500 dark:text-surface-300 leading-normal" />
        </li>
        <li>
            <span class="text-surface-900 dark:text-surface-0 leading-normal">Analytics</span>
        </li>
    </ul>
    <div class="flex items-start flex-col lg:justify-between lg:flex-row">
        <div>
            <div class="font-medium text-3xl text-surface-900 dark:text-surface-0">Customers</div>
            <div class="flex items-center text-surface-700 dark:text-surface-100 flex-wrap">
                <div class="mr-8 flex items-center mt-4">
                    <i class="pi pi-users mr-2" />
                    <span>332 Active Users</span>
                </div>
                <div class="mr-8 flex items-center mt-4">
                    <i class="pi pi-globe mr-2" />
                    <span>9402 Sessions</span>
                </div>
                <div class="flex items-center mt-4">
                    <i class="pi pi-clock mr-2" />
                    <span>2.32m Avg. Duration</span>
                </div>
            </div>
        </div>
        <div class="mt-4 lg:mt-0">
            <Button label="Add" class="mr-2" outlined icon="pi pi-user-plus" />
            <Button label="Save" icon="pi pi-check" />
        </div>
    </div>
</div>`);

const block7 = ref(`
<div class="bg-surface-50 dark:bg-surface-950 px-6 py-8 md:px-12 lg:px-20">
    <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 md:col-span-6 lg:col-span-3">
            <div class="bg-surface-0 dark:bg-surface-900 shadow p-4 rounded-border">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-surface-500 dark:text-surface-300 font-medium mb-4">Orders</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium !text-xl">152</div>
                    </div>
                    <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/30 rounded-border w-10 h-10">
                        <i class="pi pi-shopping-cart text-blue-500 dark:text-blue-200 !text-xl" />
                    </div>
                </div>
                <span class="text-green-500 font-medium">24 new </span>
                <span class="text-surface-500 dark:text-surface-300">since last visit</span>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 lg:col-span-3">
            <div class="bg-surface-0 dark:bg-surface-900 shadow p-4 rounded-border">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-surface-500 dark:text-surface-300 font-medium mb-4">Revenue</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium !text-xl">$2.100</div>
                    </div>
                    <div class="flex items-center justify-center bg-orange-100 dark:bg-orange-400/30 rounded-border w-10 h-10">
                        <i class="pi pi-map-marker text-orange-500 dark:text-orange-200 !text-xl" />
                    </div>
                </div>
                <span class="text-green-500 font-medium">%52+ </span>
                <span class="text-surface-500 dark:text-surface-300">since last week</span>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 lg:col-span-3">
            <div class="bg-surface-0 dark:bg-surface-900 shadow p-4 rounded-border">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-surface-500 dark:text-surface-300 font-medium mb-4">Customers</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium !text-xl">28441</div>
                    </div>
                    <div class="w-10 h-10 flex items-center justify-center bg-cyan-100 dark:bg-cyan-400/30 rounded-border">
                        <i class="pi pi-inbox text-cyan-500 dark:text-cyan-200 !text-xl" />
                    </div>
                </div>
                <span class="text-green-500 font-medium">520 </span>
                <span class="text-surface-500 dark:text-surface-300">newly registered</span>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 lg:col-span-3">
            <div class="bg-surface-0 dark:bg-surface-900 shadow p-4 rounded-border">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-surface-500 dark:text-surface-300 font-medium mb-4">Comments</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium !text-xl">152 Unread</div>
                    </div>
                    <div class="w-10 h-10 flex items-center justify-center bg-purple-100 dark:bg-purple-400/30 rounded-border">
                        <i class="pi pi-comment text-purple-500 dark:text-purple-200 !text-xl" />
                    </div>
                </div>
                <span class="text-green-500 font-medium">85 </span>
                <span class="text-surface-500 dark:text-surface-300">responded</span>
            </div>
        </div>
    </div>
</div>`);

const block8 = ref(`
<div class="bg-surface-50 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
    <div class="bg-surface-0 dark:bg-surface-900 p-6 shadow rounded-border w-full lg:w-6/12 mx-auto">
        <div class="text-center mb-8">
            <svg class="mb-4 mx-auto fill-surface-600 dark:fill-surface-200 h-16" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.7207 6.18211L14.9944 3.11148L3.46855 9.28678L0.579749 7.73444L14.9944 0L23.6242 4.62977L20.7207 6.18211ZM14.9996 12.3574L26.5182 6.1821L29.4216 7.73443L14.9996 15.4621L6.37724 10.8391L9.27337 9.28677L14.9996 12.3574ZM2.89613 16.572L0 15.0196V24.2656L14.4147 32V28.8953L2.89613 22.7132V16.572ZM11.5185 18.09L0 11.9147V8.81001L14.4147 16.5376V25.7904L11.5185 24.2312V18.09ZM24.2086 15.0194V11.9147L15.5788 16.5377V31.9998L18.475 30.4474V18.09L24.2086 15.0194ZM27.0969 22.7129V10.3623L30.0004 8.81V24.2653L21.3706 28.895V25.7904L27.0969 22.7129Z"
                />
            </svg>

            <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">Welcome Back</div>
            <span class="text-surface-600 dark:text-surface-200 font-medium leading-normal">Don't have an account?</span>
            <a class="font-medium no-underline ml-2 text-primary cursor-pointer">Create today!</a>
        </div>

        <div>
            <label for="email1" class="text-surface-900 dark:text-surface-0 font-medium mb-2 block">Email</label>
            <InputText id="email1" type="text" placeholder="Email address" class="w-full mb-4" />

            <label for="password1" class="text-surface-900 dark:text-surface-0 font-medium mb-2 block">Password</label>
            <InputText id="password1" type="password" placehoder="Password" class="w-full mb-4" />

            <div class="flex items-center justify-between mb-12">
                <div class="flex items-center">
                    <Checkbox id="rememberme1" v-model="checked" :binary="true" class="mr-2" />
                    <label for="rememberme1">Remember me</label>
                </div>
                <a class="font-medium no-underline ml-2 text-primary text-right cursor-pointer">Forgot password?</a>
            </div>

            <Button label="Sign In" icon="pi pi-user" class="w-full" />
        </div>
    </div>
</div>`);

const block9 = ref(`
<div class="bg-surface-0 dark:bg-surface-950 p-10 md:p-20">
    <div class="bg-surface-0 dark:bg-surface-950">
        <div class="font-medium text-3xl text-surface-900 dark:text-surface-0 mb-4">Movie Information</div>
        <div class="text-surface-500 dark:text-surface-300 mb-8">Morbi tristique blandit turpis. In viverra ligula id nulla hendrerit rutrum.</div>
        <ul class="list-none p-0 m-0">
            <li class="flex items-center py-4 px-2 border-t border-surface flex-wrap">
                <div class="text-surface-500 dark:text-surface-300 w-6/12 md:w-2/12 font-medium">Title</div>
                <div class="text-surface-900 dark:text-surface-0 w-full md:w-8/12 md:order-none order-1">Heat</div>
                <div class="w-6/12 md:w-2/12 flex justify-end">
                    <Button label="Edit" icon="pi pi-pencil" text />
                </div>
            </li>
            <li class="flex items-center py-4 px-2 border-t border-surface flex-wrap">
                <div class="text-surface-500 dark:text-surface-300 w-6/12 md:w-2/12 font-medium">Genre</div>
                <div class="text-surface-900 dark:text-surface-0 w-full md:w-8/12 md:order-none order-1">
                    <Chip label="Crime" class="mr-2" />
                    <Chip label="Drama" class="mr-2" />
                    <Chip label="Thriller" />
                </div>
                <div class="w-6/12 md:w-2/12 flex justify-end">
                    <Button label="Edit" icon="pi pi-pencil" text />
                </div>
            </li>
            <li class="flex items-center py-4 px-2 border-t border-surface flex-wrap">
                <div class="text-surface-500 dark:text-surface-300 w-6/12 md:w-2/12 font-medium">Director</div>
                <div class="text-surface-900 dark:text-surface-0 w-full md:w-8/12 md:order-none order-1">Michael Mann</div>
                <div class="w-6/12 md:w-2/12 flex justify-end">
                    <Button label="Edit" icon="pi pi-pencil" text />
                </div>
            </li>
            <li class="flex items-center py-4 px-2 border-t border-surface flex-wrap">
                <div class="text-surface-500 dark:text-surface-300 w-6/12 md:w-2/12 font-medium">Actors</div>
                <div class="text-surface-900 dark:text-surface-0 w-full md:w-8/12 md:order-none order-1">Robert De Niro, Al Pacino</div>
                <div class="w-6/12 md:w-2/12 flex justify-end">
                    <Button label="Edit" icon="pi pi-pencil" text />
                </div>
            </li>
            <li class="flex items-center py-4 px-2 border-t border-b border-surface flex-wrap">
                <div class="text-surface-500 dark:text-surface-300 w-6/12 md:w-2/12 font-medium">Plot</div>
                <div class="text-surface-900 dark:text-surface-0 w-full md:w-8/12 md:order-none order-1 leading-normal">
                    A group of professional bank robbers start to feel the heat from police when they unknowingly leave a clue at their latest heist.
                </div>
                <div class="w-6/12 md:w-2/12 flex justify-end">
                    <Button label="Edit" icon="pi pi-pencil" text />
                </div>
            </li>
        </ul>
    </div>
</div>`);

const block10 = ref(`
<div class="bg-surface-0 dark:bg-surface-900 p-6 shadow rounded">
    <div class="text-3xl font-medium text-surface-900 dark:text-surface-0 mb-4">Card Title</div>
    <div class="font-medium text-surface-500 dark:text-surface-300 mb-4">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
    <div style="height: 150px" class="border-2 border-dashed border-surface-200 dark:border-surface-700"></div>
</div>`);

const checked = ref(false);
</script>

<template>
    <div>
        <BlockViewer header="Hero" :code="block1" free>
            <div class="flex lg:flex-row flex-col gap-4 bg-surface-0 dark:bg-surface-900">
                <div class="flex-1 flex items-center justify-center">
                    <div class="p-6 pt-12 lg:p-12">
                        <h1 class="text-3xl lg:text-5xl font-bold text-surface-900 dark:text-surface-0 mb-4 lg:leading-normal text-center lg:text-left">Create the screens your <br /><span class="text-primary">visitors deserve to see</span></h1>
                        <p class="text-surface-700 dark:text-surface-200 leading-normal mb-8 text-center lg:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="flex items-center justify-center lg:justify-start gap-6">
                            <Button label="Learn More" type="button" />
                            <Button label="Live Demo" type="button" outlined />
                        </div>
                    </div>
                </div>
                <div class="flex-1 overflow-hidden">
                    <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/hero/hero-1.png" alt="hero-1" class="h-full w-full object-cover lg:[clip-path:polygon(12%_0,100%_0%,100%_100%,0_100%)]" />
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Feature" :code="block2" free>
            <div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20 text-center">
                <div class="mb-4 font-bold text-3xl">
                    <span class="text-surface-900 dark:text-surface-0">One Product, </span>
                    <span class="text-primary-600 dark:text-primary-400">Many Solutions</span>
                </div>
                <div class="text-surface-700 dark:text-surface-0/70 mb-[3rem]">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</div>
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-3.5 gap-y-6">
                    <div class="w-full p-4">
                        <span class="w-16 h-16 mb-6 rounded-lg flex items-center justify-center mx-auto bg-surface-0 dark:bg-surface-800 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_0px_2px_0px_rgba(0,0,0,0.06),0px_4px_10px_0px_rgba(0,0,0,0.03)]">
                            <i class="pi pi-desktop text-2xl lg:text-3xl text-primary-500 dark:text-primary-400" />
                        </span>
                        <div class="text-surface-900 dark:text-surface-0 text-xl mb-2 font-medium">Built for Developers</div>
                        <p class="text-surface-700 dark:text-surface-0/70 leading-normal max-w-sm mx-auto text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div class="w-full p-4">
                        <span class="w-16 h-16 mb-6 rounded-lg flex items-center justify-center mx-auto bg-surface-0 dark:bg-surface-800 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_0px_2px_0px_rgba(0,0,0,0.06),0px_4px_10px_0px_rgba(0,0,0,0.03)]">
                            <i class="pi pi-lock text-2xl lg:text-3xl text-primary-500 dark:text-primary-400" />
                        </span>
                        <div class="text-surface-900 dark:text-surface-0 text-xl mb-2 font-medium">End-to-End Encryption</div>
                        <p class="text-surface-700 dark:text-surface-0/70 leading-normal max-w-sm mx-auto text-center">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</p>
                    </div>
                    <div class="w-full p-4">
                        <span class="w-16 h-16 mb-6 rounded-lg flex items-center justify-center mx-auto bg-surface-0 dark:bg-surface-800 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_0px_2px_0px_rgba(0,0,0,0.06),0px_4px_10px_0px_rgba(0,0,0,0.03)]">
                            <i class="pi pi-check-circle text-2xl lg:text-3xl text-primary-500 dark:text-primary-400" />
                        </span>
                        <div class="text-surface-900 dark:text-surface-0 text-xl mb-2 font-medium">Easy to Use</div>
                        <p class="text-surface-700 dark:text-surface-0/70 leading-normal max-w-sm mx-auto text-center">Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.</p>
                    </div>
                    <div class="w-full p-4">
                        <span class="w-16 h-16 mb-6 rounded-lg flex items-center justify-center mx-auto bg-surface-0 dark:bg-surface-800 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_0px_2px_0px_rgba(0,0,0,0.06),0px_4px_10px_0px_rgba(0,0,0,0.03)]">
                            <i class="pi pi-globe text-2xl lg:text-3xl text-primary-500 dark:text-primary-400" />
                        </span>
                        <div class="text-surface-900 dark:text-surface-0 text-xl mb-2 font-medium">Fast & Global Support</div>
                        <p class="text-surface-700 dark:text-surface-0/70 leading-normal max-w-sm mx-auto text-center">Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.</p>
                    </div>
                    <div class="w-full p-4">
                        <span class="w-16 h-16 mb-6 rounded-lg flex items-center justify-center mx-auto bg-surface-0 dark:bg-surface-800 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_0px_2px_0px_rgba(0,0,0,0.06),0px_4px_10px_0px_rgba(0,0,0,0.03)]">
                            <i class="pi pi-github text-2xl lg:text-3xl text-primary-500 dark:text-primary-400" />
                        </span>
                        <div class="text-surface-900 dark:text-surface-0 text-xl mb-2 font-medium">Open Source</div>
                        <p class="text-surface-700 dark:text-surface-0/70 leading-normal max-w-sm mx-auto text-center">Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec feugiat.</p>
                    </div>
                    <div class="w-full p-4">
                        <span class="w-16 h-16 mb-6 rounded-lg flex items-center justify-center mx-auto bg-surface-0 dark:bg-surface-800 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_0px_2px_0px_rgba(0,0,0,0.06),0px_4px_10px_0px_rgba(0,0,0,0.03)]">
                            <i class="pi pi-shield text-2xl lg:text-3xl text-primary-500 dark:text-primary-400" />
                        </span>
                        <div class="text-surface-900 dark:text-surface-0 text-xl mb-2 font-medium">Trusted Security</div>
                        <p class="text-surface-700 dark:text-surface-0/70 leading-normal max-w-sm mx-auto text-center">Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus metus aliquam eleifend.</p>
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Pricing" :code="block3" free>
            <div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
                <div class="text-surface-900 dark:text-surface-0 font-bold text-4xl lg:text-6xl mb-6 text-center">Pricing Plans</div>
                <div class="text-surface-700 dark:text-surface-0/70 text-xl mb-12 text-center leading-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
                <div class="flex lg:flex-row flex-col gap-8 lg:gap-4 xl:gap-12 max-w-7xl mx-auto">
                    <div class="w-full flex-1 py-4 px-4 lg:px-6 flex rounded-lg flex-col bg-surface-0 dark:bg-surface-800 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_0px_2px_0px_rgba(0,0,0,0.06),0px_4px_10px_0px_rgba(0,0,0,0.03)]">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Basic</div>
                        <div class="text-surface-600 dark:text-surface-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
                        <div class="my-4 w-full h-px bg-surface-300 dark:bg-surface-700" />
                        <div class="flex items-center gap-2">
                            <span class="font-bold text-2xl text-surface-900 dark:text-surface-0">$9</span>
                            <span class="font-medium text-surface-600 dark:text-surface-300">per month</span>
                        </div>
                        <div class="my-4 w-full h-px bg-surface-300 dark:bg-surface-600" />
                        <ul class="list-none flex flex-col gap-4 flex-1">
                            <li class="flex items-center gap-2">
                                <i class="pi pi-check-circle text-green-500 text-lg" />
                                <span class="text-surface-800 dark:text-surface-100 leading-6"> Arcu vitae elementum </span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="pi pi-check-circle text-green-500 text-lg" />
                                <span class="text-surface-800 dark:text-surface-100 leading-6"> Dui faucibus in ornare </span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="pi pi-check-circle text-green-500 text-lg" />
                                <span class="text-surface-800 dark:text-surface-100 leading-6"> Morbi tincidunt augue </span>
                            </li>
                        </ul>
                        <div class="my-4 w-full h-px bg-surface-300 dark:bg-surface-700" />
                        <Button label="Buy Now" class="px-5 py-3" />
                    </div>
                    <div class="w-full flex-1 py-4 px-4 lg:px-6 flex rounded-lg flex-col bg-surface-0 dark:bg-surface-800 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_0px_2px_0px_rgba(0,0,0,0.06),0px_4px_10px_0px_rgba(0,0,0,0.03)]">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Premium</div>
                        <div class="text-surface-600 dark:text-surface-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
                        <div class="my-4 w-full h-px bg-surface-300 dark:bg-surface-700" />
                        <div class="flex items-center gap-2">
                            <span class="font-bold text-2xl text-surface-900 dark:text-surface-0">$29</span>
                            <span class="font-medium text-surface-600 dark:text-surface-300">per month</span>
                        </div>
                        <div class="my-4 w-full h-px bg-surface-300 dark:bg-surface-700" />
                        <ul class="list-none flex flex-col gap-4 flex-1">
                            <li class="flex items-center gap-2">
                                <i class="pi pi-check-circle text-green-500 text-lg" />
                                <span class="text-surface-800 dark:text-surface-100 leading-6"> Arcu vitae elementum </span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="pi pi-check-circle text-green-500 text-lg" />
                                <span class="text-surface-800 dark:text-surface-100 leading-6"> Dui faucibus in ornare </span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="pi pi-check-circle text-green-500 text-lg" />
                                <span class="text-surface-800 dark:text-surface-100 leading-6"> Morbi tincidunt augue </span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="pi pi-check-circle text-green-500 text-lg" />
                                <span class="text-surface-800 dark:text-surface-100 leading-6"> Duis ultricies lacus sed </span>
                            </li>
                        </ul>
                        <div class="my-4 w-full h-px bg-surface-300 dark:bg-surface-700" />
                        <Button label="Buy Now" class="px-5 py-3" />
                    </div>
                    <div class="w-full flex-1 py-4 px-4 lg:px-6 flex rounded-lg flex-col bg-surface-0 dark:bg-surface-800 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_0px_2px_0px_rgba(0,0,0,0.06),0px_4px_10px_0px_rgba(0,0,0,0.03)]">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Enterprise</div>
                        <div class="text-surface-600 dark:text-surface-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
                        <div class="my-4 w-full h-px bg-surface-300 dark:bg-surface-700" />
                        <div class="flex items-center gap-2">
                            <span class="font-bold text-2xl text-surface-900 dark:text-surface-0">$49</span>
                            <span class="font-medium text-surface-600 dark:text-surface-300">per month</span>
                        </div>
                        <div class="my-4 w-full h-px bg-surface-300 dark:bg-surface-700" />
                        <ul class="list-none flex flex-col gap-4 flex-1">
                            <li class="flex items-center gap-2">
                                <i class="pi pi-check-circle text-green-500 text-lg" />
                                <span class="text-surface-800 dark:text-surface-100 leading-6"> Arcu vitae elementum </span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="pi pi-check-circle text-green-500 text-lg" />
                                <span class="text-surface-800 dark:text-surface-100 leading-6"> Dui faucibus in ornare </span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="pi pi-check-circle text-green-500 text-lg" />
                                <span class="text-surface-800 dark:text-surface-100 leading-6"> Morbi tincidunt augue </span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="pi pi-check-circle text-green-500 text-lg" />
                                <span class="text-surface-800 dark:text-surface-100 leading-6"> Duis ultricies lacus sed </span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="pi pi-check-circle text-green-500 text-lg" />
                                <span class="text-surface-800 dark:text-surface-100 leading-6"> Imperdiet proin </span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="pi pi-check-circle text-green-500 text-lg" />
                                <span class="text-surface-800 dark:text-surface-100 leading-6"> Nisi scelerisque </span>
                            </li>
                        </ul>
                        <div class="my-4 w-full h-px bg-surface-300 dark:bg-surface-700" />
                        <Button label="Buy Now" class="px-5 py-3" />
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Call to Action" :code="block4" free>
            <div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
                <div class="text-surface-700 dark:text-surface-100 text-center">
                    <div class="text-primary font-bold mb-4"><i class="pi pi-discord" />&nbsp;POWERED BY DISCORD</div>
                    <div class="text-surface-900 dark:text-surface-0 font-bold text-5xl mb-4">Join Our Design Community</div>
                    <div class="text-surface-700 dark:text-surface-100 text-2xl mb-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
                    <Button label="Join Now" icon="pi pi-discord" raised rounded class="font-bold px-8 py-4 whitespace-nowrap" />
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Banner" :code="block5" containerClass="bg-surface-0 dark:bg-surface-950 py-20" free>
            <div class="min-h-40 bg-surface-0 dark:bg-surface-950">
                <div class="bg-surface-900 text-gray-100 py-4 px-6 lg:px-20 flex justify-between items-center flex-wrap">
                    <div class="font-bold">🔥 Hot Deals!</div>
                    <div class="inline-flex gap-1 items-center">
                        <span class="leading-normal hidden lg:flex">Libero voluptatum atque exercitationem praesentium provident odit.</span>
                        <a class="text-surface-0 underline font-bold" href="#">Learn More</a>
                    </div>
                    <Button icon="pi pi-times" text rounded severity="secondary" class="!text-surface-0 hover:!bg-surface-500/20" />
                </div>
            </div>
        </BlockViewer>

        <div class="block-category-title">Application UI</div>
        <BlockViewer header="Page Heading" :code="block6" free>
            <div class="bg-surface-0 dark:bg-surface-950 px-6 py-8 md:px-12 lg:px-20">
                <ul class="list-none p-0 m-0 flex items-center font-medium mb-4">
                    <li>
                        <a class="text-surface-500 dark:text-surface-300 no-underline leading-normal cursor-pointer">Application</a>
                    </li>
                    <li class="px-2">
                        <i class="pi pi-angle-right text-surface-500 dark:text-surface-300 leading-normal" />
                    </li>
                    <li>
                        <span class="text-surface-900 dark:text-surface-0 leading-normal">Analytics</span>
                    </li>
                </ul>
                <div class="flex items-start flex-col lg:justify-between lg:flex-row">
                    <div>
                        <div class="font-medium text-3xl text-surface-900 dark:text-surface-0">Customers</div>
                        <div class="flex items-center text-surface-700 dark:text-surface-100 flex-wrap">
                            <div class="mr-8 flex items-center mt-4">
                                <i class="pi pi-users mr-2" />
                                <span>332 Active Users</span>
                            </div>
                            <div class="mr-8 flex items-center mt-4">
                                <i class="pi pi-globe mr-2" />
                                <span>9402 Sessions</span>
                            </div>
                            <div class="flex items-center mt-4">
                                <i class="pi pi-clock mr-2" />
                                <span>2.32m Avg. Duration</span>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 lg:mt-0">
                        <Button label="Add" class="mr-2" outlined icon="pi pi-user-plus" />
                        <Button label="Save" icon="pi pi-check" />
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Stats" :code="block7" free>
            <div class="bg-surface-50 dark:bg-surface-950 px-6 py-8 md:px-12 lg:px-20">
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-12 md:col-span-6 lg:col-span-3">
                        <div class="bg-surface-0 dark:bg-surface-900 shadow p-4 rounded-border">
                            <div class="flex justify-between mb-4">
                                <div>
                                    <span class="block text-surface-500 dark:text-surface-300 font-medium mb-4">Orders</span>
                                    <div class="text-surface-900 dark:text-surface-0 font-medium !text-xl">152</div>
                                </div>
                                <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/30 rounded-border w-10 h-10">
                                    <i class="pi pi-shopping-cart text-blue-500 dark:text-blue-200 !text-xl" />
                                </div>
                            </div>
                            <span class="text-green-500 font-medium">24 new </span>
                            <span class="text-surface-500 dark:text-surface-300">since last visit</span>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-6 lg:col-span-3">
                        <div class="bg-surface-0 dark:bg-surface-900 shadow p-4 rounded-border">
                            <div class="flex justify-between mb-4">
                                <div>
                                    <span class="block text-surface-500 dark:text-surface-300 font-medium mb-4">Revenue</span>
                                    <div class="text-surface-900 dark:text-surface-0 font-medium !text-xl">$2.100</div>
                                </div>
                                <div class="flex items-center justify-center bg-orange-100 dark:bg-orange-400/30 rounded-border w-10 h-10">
                                    <i class="pi pi-map-marker text-orange-500 dark:text-orange-200 !text-xl" />
                                </div>
                            </div>
                            <span class="text-green-500 font-medium">%52+ </span>
                            <span class="text-surface-500 dark:text-surface-300">since last week</span>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-6 lg:col-span-3">
                        <div class="bg-surface-0 dark:bg-surface-900 shadow p-4 rounded-border">
                            <div class="flex justify-between mb-4">
                                <div>
                                    <span class="block text-surface-500 dark:text-surface-300 font-medium mb-4">Customers</span>
                                    <div class="text-surface-900 dark:text-surface-0 font-medium !text-xl">28441</div>
                                </div>
                                <div class="w-10 h-10 flex items-center justify-center bg-cyan-100 dark:bg-cyan-400/30 rounded-border">
                                    <i class="pi pi-inbox text-cyan-500 dark:text-cyan-200 !text-xl" />
                                </div>
                            </div>
                            <span class="text-green-500 font-medium">520 </span>
                            <span class="text-surface-500 dark:text-surface-300">newly registered</span>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-6 lg:col-span-3">
                        <div class="bg-surface-0 dark:bg-surface-900 shadow p-4 rounded-border">
                            <div class="flex justify-between mb-4">
                                <div>
                                    <span class="block text-surface-500 dark:text-surface-300 font-medium mb-4">Comments</span>
                                    <div class="text-surface-900 dark:text-surface-0 font-medium !text-xl">152 Unread</div>
                                </div>
                                <div class="w-10 h-10 flex items-center justify-center bg-purple-100 dark:bg-purple-400/30 rounded-border">
                                    <i class="pi pi-comment text-purple-500 dark:text-purple-200 !text-xl" />
                                </div>
                            </div>
                            <span class="text-green-500 font-medium">85 </span>
                            <span class="text-surface-500 dark:text-surface-300">responded</span>
                        </div>
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Sign-In" :code="block8" containerClass="bg-surface-50 dark:bg-surface-950" free>
            <div class="bg-surface-50 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
                <div class="bg-surface-0 dark:bg-surface-900 p-6 shadow rounded-border w-full lg:w-6/12 mx-auto">
                    <div class="text-center mb-8">
                        <svg class="mb-4 mx-auto fill-surface-600 dark:fill-surface-200 h-16" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M20.7207 6.18211L14.9944 3.11148L3.46855 9.28678L0.579749 7.73444L14.9944 0L23.6242 4.62977L20.7207 6.18211ZM14.9996 12.3574L26.5182 6.1821L29.4216 7.73443L14.9996 15.4621L6.37724 10.8391L9.27337 9.28677L14.9996 12.3574ZM2.89613 16.572L0 15.0196V24.2656L14.4147 32V28.8953L2.89613 22.7132V16.572ZM11.5185 18.09L0 11.9147V8.81001L14.4147 16.5376V25.7904L11.5185 24.2312V18.09ZM24.2086 15.0194V11.9147L15.5788 16.5377V31.9998L18.475 30.4474V18.09L24.2086 15.0194ZM27.0969 22.7129V10.3623L30.0004 8.81V24.2653L21.3706 28.895V25.7904L27.0969 22.7129Z"
                            />
                        </svg>

                        <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">Welcome Back</div>
                        <span class="text-surface-600 dark:text-surface-200 font-medium leading-normal">Don't have an account?</span>
                        <a class="font-medium no-underline ml-2 text-primary cursor-pointer">Create today!</a>
                    </div>

                    <div>
                        <label for="email1" class="text-surface-900 dark:text-surface-0 font-medium mb-2 block">Email</label>
                        <InputText id="email1" type="text" placeholder="Email address" class="w-full mb-4" />

                        <label for="password1" class="text-surface-900 dark:text-surface-0 font-medium mb-2 block">Password</label>
                        <InputText id="password1" type="password" placehoder="Password" class="w-full mb-4" />

                        <div class="flex items-center justify-between mb-12">
                            <div class="flex items-center">
                                <Checkbox id="rememberme1" v-model="checked" :binary="true" class="mr-2" />
                                <label for="rememberme1">Remember me</label>
                            </div>
                            <a class="font-medium no-underline ml-2 text-primary text-right cursor-pointer">Forgot password?</a>
                        </div>

                        <Button label="Sign In" icon="pi pi-user" class="w-full" />
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Description List" :code="block9" containerClass="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20" free>
            <div class="bg-surface-0 dark:bg-surface-950 p-10 md:p-20">
                <div class="bg-surface-0 dark:bg-surface-950">
                    <div class="font-medium text-3xl text-surface-900 dark:text-surface-0 mb-4">Movie Information</div>
                    <div class="text-surface-500 dark:text-surface-300 mb-8">Morbi tristique blandit turpis. In viverra ligula id nulla hendrerit rutrum.</div>
                    <ul class="list-none p-0 m-0">
                        <li class="flex items-center py-4 px-2 border-t border-surface flex-wrap">
                            <div class="text-surface-500 dark:text-surface-300 w-6/12 md:w-2/12 font-medium">Title</div>
                            <div class="text-surface-900 dark:text-surface-0 w-full md:w-8/12 md:order-none order-1">Heat</div>
                            <div class="w-6/12 md:w-2/12 flex justify-end">
                                <Button label="Edit" icon="pi pi-pencil" text />
                            </div>
                        </li>
                        <li class="flex items-center py-4 px-2 border-t border-surface flex-wrap">
                            <div class="text-surface-500 dark:text-surface-300 w-6/12 md:w-2/12 font-medium">Genre</div>
                            <div class="text-surface-900 dark:text-surface-0 w-full md:w-8/12 md:order-none order-1">
                                <Chip label="Crime" class="mr-2" />
                                <Chip label="Drama" class="mr-2" />
                                <Chip label="Thriller" />
                            </div>
                            <div class="w-6/12 md:w-2/12 flex justify-end">
                                <Button label="Edit" icon="pi pi-pencil" text />
                            </div>
                        </li>
                        <li class="flex items-center py-4 px-2 border-t border-surface flex-wrap">
                            <div class="text-surface-500 dark:text-surface-300 w-6/12 md:w-2/12 font-medium">Director</div>
                            <div class="text-surface-900 dark:text-surface-0 w-full md:w-8/12 md:order-none order-1">Michael Mann</div>
                            <div class="w-6/12 md:w-2/12 flex justify-end">
                                <Button label="Edit" icon="pi pi-pencil" text />
                            </div>
                        </li>
                        <li class="flex items-center py-4 px-2 border-t border-surface flex-wrap">
                            <div class="text-surface-500 dark:text-surface-300 w-6/12 md:w-2/12 font-medium">Actors</div>
                            <div class="text-surface-900 dark:text-surface-0 w-full md:w-8/12 md:order-none order-1">Robert De Niro, Al Pacino</div>
                            <div class="w-6/12 md:w-2/12 flex justify-end">
                                <Button label="Edit" icon="pi pi-pencil" text />
                            </div>
                        </li>
                        <li class="flex items-center py-4 px-2 border-t border-b border-surface flex-wrap">
                            <div class="text-surface-500 dark:text-surface-300 w-6/12 md:w-2/12 font-medium">Plot</div>
                            <div class="text-surface-900 dark:text-surface-0 w-full md:w-8/12 md:order-none order-1 leading-normal">
                                A group of professional bank robbers start to feel the heat from police when they unknowingly leave a clue at their latest heist.
                            </div>
                            <div class="w-6/12 md:w-2/12 flex justify-end">
                                <Button label="Edit" icon="pi pi-pencil" text />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Card" :code="block10" containerClass="px-6 py-20 md:px-12 lg:px-20" free>
            <div class="bg-surface-0 dark:bg-surface-900 p-6 shadow rounded">
                <div class="text-3xl font-medium text-surface-900 dark:text-surface-0 mb-4">Card Title</div>
                <div class="font-medium text-surface-500 dark:text-surface-300 mb-4">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
                <div style="height: 150px" class="border-2 border-dashed border-surface-200 dark:border-surface-700" />
            </div>
        </BlockViewer>
    </div>
</template>
