<template>
  <div class="min-h-screen bg-gray-900 flex items-center">
    <div class="py-8 px-4 mx-auto max-w-screen-xl">
      <div class="grid space-y-8 lg:grid-cols-2 lg:gap-12 lg:space-y-0">
        <div>
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Head Coach 2024</h2>
          <p class="mb-4 text-gray-500 sm:text-xl dark:text-gray-400">Welcome to the ultimate American Football management simulation. As the head coach, you'll strategize, make crucial decisions, and lead your team to victory. Are you ready to take the field?</p>
        </div>
        <div>
          <button type="button" @click="goToDashboard" class="flex justify-between items-center p-4 mb-6 bg-white rounded-lg border-l-8 shadow dark:bg-gray-800 dark:hover:bg-gray-700 border-primary-600 dark:border-primary-500 hover:bg-gray-50">
            <div>
              <span class="block mb-1 text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Begin the journey</span>
              <span class="text-xl font-semibold text-primary-600 dark:text-primary-500">New</span>
            </div>
            <svg class="w-6 h-6 text-primary-600 dark:text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
          <a href="#" class="flex justify-between items-center p-4 mb-6 bg-white rounded-lg border-l-8 border-purple-600 shadow dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-purple-500 hover:bg-gray-50">
            <div>
              <span class="block mb-1 text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Load your last save</span>
              <span class="text-xl font-semibold text-purple-600 dark:text-purple-500">Continue</span>
            </div>
            <svg class="w-6 h-6 text-purple-600 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
          <a href="#" class="flex justify-between items-center p-4 mb-6 bg-white rounded-lg border-l-8 border-teal-600 shadow dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-teal-500 hover:bg-gray-50">
            <div>
              <span class="block mb-1 text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Adjust game settings</span>
              <span class="text-xl font-semibold text-teal-600 dark:text-teal-500">Settings</span>
            </div>
            <svg class="w-6 h-6 text-teal-600 dark:text-teal-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
          <a href="#" class="flex justify-between items-center p-4 mb-6 bg-white rounded-lg border-l-8 border-red-500 shadow dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-red-500 hover:bg-gray-50">
            <div>
              <span class="block mb-1 text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Exit the game</span>
              <span class="text-xl font-semibold text-purple-600 dark:text-red-500">Quit</span>
            </div>
            <svg class="w-6 h-6 text-purple-600 dark:text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'MainMenu',
  methods: {
    goToDashboard() {
      console.log('go to dashboard')
      this.$router.push({ name: 'Dashboard' });
    }
  }
});
</script>

<style scoped>

</style>
