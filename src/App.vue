<template>
  <div class="min-h-screen bg-gray-50 dark:bg-[#09090b] text-gray-900 dark:text-gray-200 font-sans selection:bg-brand-blue/30 transition-colors duration-300">
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
</script>

<style>
/* Global scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #09090b; 
}
::-webkit-scrollbar-thumb {
  background: #27272a; 
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #3f3f46; 
}

/* Base transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
