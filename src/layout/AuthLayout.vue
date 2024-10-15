<script setup>
import AppConfig from './AppConfig.vue';
import { useLayout } from './composables/layout';

const { onConfigSidebarToggle } = useLayout();
</script>

<template>
    <main>
        <router-view />
    </main>
    <button class="layout-config-button config-link" @click="onConfigSidebarToggle">
        <i class="pi pi-cog" />
    </button>
    <AppConfig location="landing" />
</template>
