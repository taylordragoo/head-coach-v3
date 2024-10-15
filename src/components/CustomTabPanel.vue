<template>
    <slot></slot>
</template>

<script>
import CustomBaseComponent from './CustomBaseComponent.vue';
export default {
    name: 'CustomTabPanel',
    extends: CustomBaseComponent,
    props: {
        header: null,
        headerStyle: null,
        headerClass: null,
        headerProps: null,
        headerActionProps: null,
        contentStyle: null,
        contentClass: null,
        contentProps: null,
        disabled: Boolean
    }
};
</script>
