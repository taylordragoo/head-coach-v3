<script setup>
import { computed, watch } from 'vue';
import { useLayout } from '@/layout/composables/layout';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import moment from 'moment';
import AppBreadcrumb from './AppBreadcrumb.vue';
import World from "../models/World";
import League from "../models/League";
import User from "../models/User";
import Team from "../models/Team";
import Player from "../models/Player";
import Staff from "../models/Staff";
import { CareerController } from "@/controllers";

const { layoutState, isDarkTheme, onMenuToggle, onConfigSidebarToggle } = useLayout();
const value1 = ref(0);
const loadingDialog = ref(false);
const interval = ref(null);
const router = useRouter();
const careerController = CareerController.getInstance();
const notificationsBars = [
    {
        id: 'inbox',
        label: 'Inbox',
        badge: '2'
    },
    {
        id: 'general',
        label: 'General'
    },
    {
        id: 'archived',
        label: 'Archived'
    }
];
const notifications = [
    {
        id: 'inbox',
        data: [
            {
                image: '/demo/images/avatar/avatar-square-m-2.jpg',
                name: 'Michael Lee',
                description: 'You have a new message from the support team regarding your recent inquiry.',
                time: '1 hour ago',
                new: true
            },
            {
                image: '/demo/images/avatar/avatar-square-f-1.jpg',
                name: 'Alice Johnson',
                description: 'Your report has been successfully submitted and is under review.',
                time: '10 minutes ago',
                new: true
            },
            {
                image: '/demo/images/avatar/avatar-square-f-2.jpg',
                name: 'Emily Davis',
                description: 'The project deadline has been updated to September 30th. Please check the details.',
                time: 'Yesterday at 4:35 PM',
                new: false
            }
        ]
    },
    {
        id: 'general',
        data: [
            {
                image: '/demo/images/avatar/avatar-square-f-1.jpg',
                name: 'Alice Johnson',
                description: 'Reminder: Your subscription is about to expire in 3 days. Renew now to avoid interruption.',
                time: '30 minutes ago',
                new: true
            },
            {
                image: '/demo/images/avatar/avatar-square-m-2.jpg',
                name: 'Michael Lee',
                description: 'The server maintenance has been completed successfully. No further downtime is expected.',
                time: 'Yesterday at 2:15 PM',
                new: false
            }
        ]
    },
    {
        id: 'archived',
        data: [
            {
                image: '/demo/images/avatar/avatar-square-m-1.jpg',
                name: 'Lucas Brown',
                description: 'Your appointment with Dr. Anderson has been confirmed for October 12th at 10:00 AM.',
                time: '1 week ago',
                new: true
            },
            {
                image: '/demo/images/avatar/avatar-square-f-2.jpg',
                name: 'Emily Davis',
                description: 'The document you uploaded has been successfully archived for future reference.',
                time: '2 weeks ago',
                new: false
            }
        ]
    }
];
const selectedNotificationBar = ref(notificationsBars?.[0].id ?? 'inbox');
function toggleSearchBar() {
    layoutState.searchBarActive = !layoutState.searchBarActive;
}
function showRightMenu() {
    layoutState.rightMenuVisible = !layoutState.rightMenuVisible;
}

const goBack = () => {
    router.go(-1);
};
const goForward = () => {
    router.go(1);
};
const user = computed(() => {
    return User.query().with('team', (query) => {
        query.with('players', (query) => {
            query.with('ratings');
        })
    }).first();
})
const world = computed(() => {
    return World.query().with('leagues', (query) => {
        query.with('teams', (query) => {
            query
                .with('head_coach')
                .with('offensive_coordinator')
                .with('defensive_coordinator')
                .with('qb_coach')
                .with('rb_coach')
                .with('te_coach')
                .with('wr_coach')
                .with('oline_coach')
                .with('dline_coach')
                .with('linebacker_coach')
                .with('secondary_coach')
                .with('special_teams_coach')
                .with('strength_coach')
                .with('coach')
                .with('owner')
                .with('president')
                .with('chief_executive_officer')
                .with('general_manager')
                .with('director_pro_scouting')
                .with('director_college_scouting')
                .with('scout')
                .with('sports_medicine_director')
                .with('doctor')
                .with('trainer')
                .with('budget')
                .with('depthChart')
                .with('players', (query) => {
                    query.with('ratings')
                        .with('position')
                        .with('contract')
                        .with('born')
                        .with('injuries')
                        .with('health')
                        .with('draft')
                })
        });
    }).first()
})
watch(value1, (newValue) => {
  if(newValue > 100) {
    endProgress();
    loadingDialog.value = false;
    console.log("Loading over");
  }
});
const league = computed(() => {
    return League.query().where('id', 1).first();
});
const onTopbarContMenuButtonClick = async (event) => {
    openContinue();
    continueToTomorrow(world.value.date);
    setTimeout(() => {
        careerController.continueCareer();
    }, 500);
}
const continueToTomorrow = (date) => {
    console.log(date);
    const new_date = getHumanDate(getTomorrow(date))
    console.log(new_date);
    World.where('id', 0).update({date: new_date});
}
const getHumanDate = (date) => {
    return moment(date).format('MM/DD/YYYY');
}
const getTomorrow = (date) => {
    let new_date = moment(getHumanDate(date)).add(1,'days');
    return new_date;
}
const openContinue = () => {
    loadingDialog.value = true;
    restartTimer();
}
const restartTimer = () => {
    clearInterval(interval.value);
    value1.value = 0;
    setTimeout(() => {
        startProgress();
    }, 100);
}
const startProgress = () => {
    interval.value = setInterval(() => {
        let newValue = value1.value + Math.floor(Math.random() * 10) + 1;
        value1.value = newValue;
        console.log(value1.value);
    }, 500);
}
const endProgress = () => {
    console.log('ending loading')
    clearInterval(interval.value);
    interval.value = null;
    setTimeout(() => {
        hideDialog()
    }, 500);
}
const hideDialog = () => {
    loadingDialog.value = false;
}
const saveData = () => {
    careerController.saveCareer();
}
</script>

<template>
    <div class="layout-topbar">
        <div class="topbar-left">
            <a tabindex="0" class="menu-button" @click="goBack">
                <i class="pi pi-arrow-left" />
            </a>
            <a tabindex="0" class="menu-button" @click="goForward">
                <i class="pi pi-arrow-right" />
            </a>
            <span class="topbar-separator" />
            <AppBreadcrumb />
            <img class="mobile-logo" :src="`/layout/images/logo-${isDarkTheme ? 'white' : 'dark'}.svg`" alt="diamond-layout" />
        </div>

        <div class="topbar-right">
            <ul class="topbar-menu">
                <li class="right-sidebar-item">
                    <a class="right-sidebar-button" @click="toggleSearchBar">
                        <i class="pi pi-search" />
                    </a>
                </li>
                <li class="right-sidebar-item">
                    <button class="app-config-button" @click="onConfigSidebarToggle">
                        <i class="pi pi-cog" />
                    </button>
                </li>
                <li class="right-sidebar-item static sm:relative">
                    <a
                        v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'animate-scalein', leaveActiveClass: 'animate-fadeout', leaveToClass: 'hidden', hideOnOutsideClick: true }"
                        class="right-sidebar-button relative z-50"
                    >
                        <span class="w-2 h-2 rounded-full bg-red-500 absolute top-2 right-2.5" />
                        <i class="pi pi-bell" />
                    </a>
                    <div
                        class="list-none m-0 rounded-2xl border border-surface absolute bg-surface-0 dark:bg-surface-900 overflow-hidden hidden origin-top min-w-72 sm:w-[22rem] mt-2 right-0 z-50 top-auto shadow-[0px_56px_16px_0px_rgba(0,0,0,0.00),0px_36px_14px_0px_rgba(0,0,0,0.01),0px_20px_12px_0px_rgba(0,0,0,0.02),0px_9px_9px_0px_rgba(0,0,0,0.03),0px_2px_5px_0px_rgba(0,0,0,0.04)]"
                    >
                        <div class="p-4 flex items-center justify-between border-b border-surface">
                            <span class="label-small text-surface-950 dark:text-surface-0">Notifications</span>
                            <button class="py-1 px-2 text-surface-950 dark:text-surface-0 label-x-small hover:bg-emphasis border border-surface rounded-lg shadow-[0px_1px_2px_0px_rgba(18,18,23,0.05)] transition-all">Mark all as read</button>
                        </div>
                        <div class="flex items-center border-b border-surface">
                            <button
                                v-for="(item, index) of notificationsBars"
                                :key="index"
                                @click="selectedNotificationBar = item.id"
                                :class="selectedNotificationBar === item.id ? 'border-surface-950 dark:border-surface-0' : 'border-transparent'"
                                class="px-3.5 py-2 inline-flex items-center border-b gap-2"
                            >
                                <span :class="selectedNotificationBar === item.id ? 'text-surface-950 dark:text-surface-0' : ''" class="label-small">{{ item.label }}</span>
                                <Badge v-if="item?.badge" :value="item.badge" severity="success" size="small" class="!rounded-md" />
                            </button>
                        </div>
                        <ul class="flex flex-col divide-y divide-[var(--surface-border)] max-h-80 overflow-auto">
                            <li v-for="(item, index) of notifications.find((f) => f.id === selectedNotificationBar).data" :key="index">
                                <div class="flex items-center gap-3 px-6 py-3.5 cursor-pointer hover:bg-emphasis transition-all">
                                    <OverlayBadge value="" severity="danger" class="inline-flex">
                                        <Avatar :image="item.image" size="large" pt:image:class="!rounded-lg" />
                                    </OverlayBadge>
                                    <div class="flex items-center gap-3">
                                        <div class="flex flex-col">
                                            <span class="label-small text-left text-surface-950 dark:text-surface-0">{{ item.name }}</span>
                                            <span class="label-xsmall text-left line-clamp-1">{{ item.description }}</span>
                                            <span class="label-xsmall text-left">{{ item.time }}</span>
                                        </div>
                                        <Badge v-if="item.new" value="" severity="success" />
                                    </div>
                                </div>
                                <span v-if="index !== notifications.length - 1" />
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="profile-item static sm:relative">
                    <a
                        class="!bg-none !border-none !outline-none"
                        v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'animate-scalein', leaveActiveClass: 'animate-fadeout', leaveToClass: 'hidden', hideOnOutsideClick: true }"
                    >
                        <Avatar image="/layout/images/profile.jpg" pt:image:class="!rounded-lg" class="!w-10 !h-10" />
                    </a>
                    <div
                        class="list-none p-2 m-0 rounded-2xl border border-surface overflow-hidden absolute bg-surface-0 dark:bg-surface-900 hidden origin-top w-52 mt-2 right-0 z-[999] top-auto shadow-[0px_56px_16px_0px_rgba(0,0,0,0.00),0px_36px_14px_0px_rgba(0,0,0,0.01),0px_20px_12px_0px_rgba(0,0,0,0.02),0px_9px_9px_0px_rgba(0,0,0,0.03),0px_2px_5px_0px_rgba(0,0,0,0.04)]"
                    >
                        <ul class="flex flex-col gap-1">
                            <li>
                                <a class="label-small dark:text-surface-400 flex gap-2 py-2 px-2.5 rounded-lg items-center hover:bg-emphasis transition-colors duration-150 cursor-pointer">
                                    <i class="pi pi-cog" />
                                    <span>Settings</span>
                                </a>
                            </li>
                            <li>
                                <a @click="saveData" class="label-small dark:text-surface-400 flex gap-2 py-2 px-2.5 rounded-lg items-center hover:bg-emphasis transition-colors duration-150 cursor-pointer">
                                    <i class="pi pi-inbox" />
                                    <span>Save</span>
                                </a>
                            </li>
                            <li>
                                <a class="label-small dark:text-surface-400 flex gap-2 py-2 px-2.5 rounded-lg items-center hover:bg-emphasis transition-colors duration-150 cursor-pointer">
                                    <i class="pi pi-calendar" />
                                    <span>Load</span>
                                </a>
                            </li>
                            <li>
                                <a class="label-small dark:text-surface-400 flex gap-2 py-2 px-2.5 rounded-lg items-center hover:bg-emphasis transition-colors duration-150 cursor-pointer">
                                    <i class="pi pi-power-off" />
                                    <span>Quit</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>

                <li>
                    <div class="flex items-center gap-2">
                        <div class="flex-1">
                            <div class="label-small text-left text-surface-950 dark:text-surface-0">{{ league?.phase_name }}</div>
                            <time class="mt-1 body-xsmall">{{ world?.date }}</time>
                        </div>
                        <div class="flex flex-col items-center">
                            <Tag
                                severity='success'
                                :value="world?.currentDayOfWeek"
                                :pt="{
                                    root: {
                                        class: '!py-0.5 !px-3'
                                    },
                                    label: {
                                        class: '!text-sm !font-semibold !leading-normal !capitalize'
                                    }
                                }"
                            />
                            <span class="mt-1 body-xsmall text-center">{{ user?.first }} {{ user?.last }}</span>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="flex items-center gap-2">
                        <Button
                            @click="onTopbarContMenuButtonClick"
                            label="Continue"
                            severity="secondary"
                            outlined
                            icon="pi pi-chevron-right"
                            iconPos="right"
                            class="!text-surface-950 dark:!text-surface-0 !px-5 !py-3 !rounded-lg !label-xsmall"
                            :pt="{
                                icon: {
                                    class: '!text-sm'
                                }
                            }"
                        />
                    </div>
                </li>

            </ul>
        </div>
        <Dialog v-model:visible="loadingDialog" :style="{width: '800px'}" :draggable="false" :closable="false" :modal="true" class='p-fluid bg-white'>
            <div class="justify-content-center">
                <h5>Loading...</h5>
                <div class="grid">
                    <div class="col">
                        <ProgressBar :value="value1" show-progress variant="success" mode="determinate" :showValue="false"> Percent Complete: {{value1}}% </ProgressBar>
                    </div>
                </div>
            </div>
        </Dialog>
    </div>
</template>
