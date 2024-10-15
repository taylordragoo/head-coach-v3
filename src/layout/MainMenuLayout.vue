<script setup>
import Footer from '@/components/landing/Footer.vue';
import Topbar from '@/components/landing/Topbar.vue';
import AppConfig from './AppConfig.vue';
import { useLayout } from './composables/layout';

const { onConfigSidebarToggle } = useLayout();
</script>

<template>
    <Topbar />
    <main>
        <router-view />
    </main>
    <Footer />
    <button class="layout-config-button config-link" @click="onConfigSidebarToggle">
        <i class="pi pi-cog" />
    </button>
    <AppConfig location="landing" />
</template>
