<script lang="ts">
import {defineComponent} from 'vue'
import { initFlowbite } from 'flowbite'
import {onMounted} from "vue";
import MainMenu from "../pages/MainMenu.vue";

// initialize components based on data attribute selectors
onMounted(() => {
  setTimeout(() => initFlowbite(), 250);
})

export default defineComponent({
  name: "Layout",
  components: {MainMenu}
})
</script>

<template>
  <div class="flex flex-col">
    <MainMenu />
  </div>
</template>

<style scoped>

</style>
