<template>
  <div class="bg-surface-900 min-h-screen flex items-center px-6 md:px-12 lg:px-24">
    <div class="flex flex-row items-center">
      <div class="w-full lg:w-6/12 p-6 ml-20">
        <div class="flex inline-flex">
          <h1 class="text-8xl font-bold text-white mt-2 mb-4">
              PRO GM
          </h1>
          <h1 class="text-8xl font-bold text-white mt-0 mb-4 ml-4">
              <span class="text-yellow-500 dark:text-yellow-400 underline">25</span>
          </h1>
        </div>
        <p class="text-3xl text-gray-400 mt-0 mb-8">Arcu cursus euismod quis viverra nibh cras. Amet justo donec enim diam vulputate ut.</p>
        <ul class="list-none p-0 m-0">
            <li class="mb-4 flex items-center"><i class="pi pi-compass text-yellow-500 text-xl mr-2" /><span class="text-gray-400 leading-normal">Senectus et netus et malesuada fames.</span></li>
            <li class="mb-4 flex items-center"><i class="pi pi-map text-yellow-500 text-xl mr-2" /><span class="text-gray-400 leading-normal">Orci a scelerisque purus semper eget.</span></li>
            <li class="mb-4 flex items-center"><i class="pi pi-calendar text-yellow-500 text-xl mr-2" /><span class="text-gray-400 leading-normal">Aenean sed adipiscing diam donec adipiscing tristique.</span></li>
        </ul>
      </div>
      <div class="w-full lg:w-6/12 p-6">
        <div class="text-center">
          <div class='row'>
              <Button type="button" @click='openContinue' label="Continue" style="width:20rem" class="mb-2" />
          </div>
          <div class='row'>
              <Button type="button" @click="openNew" label="New" style="width:20rem" class="mb-2"/>
          </div>
          <div class='row'>
              <Button type="button" @click="openEditor" label="Editor" style="width:20rem" class="mb-2"/>
          </div>
          <div class='row'>
              <Button type="button" label="Settings" style="width:20rem" class="mb-2"/>
          </div>
          <div class='row'>
              <Button @click="closeApp" type="button" label="Quit" style="width:20rem" class="mb-2"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from 'primevue/button';
import { useRouter } from 'vue-router'

export default {
  name: 'MainMenu',
  components: {
    Button
  },
  methods: {
    goToDashboard() {
      console.log('go to dashboard')
      this.$router.push({ name: 'Dashboard' });
    }
  }
};
</script>