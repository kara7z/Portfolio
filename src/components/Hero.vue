<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden" @mousemove="handleMouseMove">
    <!-- Subtle Animated Background Gradient -->
    <div class="absolute inset-0 z-0 transition-colors duration-300">
      <div class="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-white dark:from-[#09090b] dark:via-[#18181b] dark:to-[#09090b] transition-colors duration-300"></div>
      
      <!-- Parallax Blobs -->
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/30 dark:bg-yellow-500/15 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 dark:opacity-50 animate-blob"
           :style="{ transform: `translate(${mouseX * 0.05}px, ${mouseY * 0.05}px)` }"></div>
      <div class="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-400/30 dark:bg-amber-500/15 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 dark:opacity-50 animate-blob animation-delay-2000"
           :style="{ transform: `translate(${mouseX * -0.05}px, ${mouseY * -0.05}px)` }"></div>
      <div class="absolute bottom-1/4 left-1/2 w-72 h-72 bg-orange-300/20 dark:bg-yellow-600/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 dark:opacity-30 animate-blob animation-delay-4000"
           :style="{ transform: `translate(${mouseX * 0.03}px, ${mouseY * -0.03}px)` }"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-lg md:text-xl text-brand-blue font-medium mb-4 tracking-wide uppercase">Full Stack Developer</h2>

      <h1 class="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white mb-6 tracking-tight transition-colors duration-300 leading-[1.1]">
        Hi, I'm <span class="gradient-text">Kara</span><br class="hidden sm:block" /><span class="gradient-text"> Oussama</span>
      </h1>
      
      <div class="h-12 md:h-16 mb-8 flex justify-center items-center">
        <p class="text-xl md:text-3xl text-gray-600 dark:text-gray-400 font-light transition-colors duration-300">
          <span class="mr-2">I am a</span>
          <span class="text-gray-900 dark:text-white font-medium border-r-2 border-brand-blue pr-1 animate-pulse">{{ currentTitle }}</span>
        </p>
      </div>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
        <a href="#projects" class="group relative px-10 py-5 bg-brand-blue text-black font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:bg-brand-purple hover:scale-105 glow-pulse flex items-center gap-3 text-lg">
          <span>View My Projects</span>
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
        
        <a href="#contact" class="group px-10 py-5 bg-transparent border-2 border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-300 font-semibold rounded-2xl transition-all duration-300 hover:border-brand-blue hover:text-brand-blue dark:hover:text-white flex items-center gap-3 text-lg hover:bg-brand-blue/5">
          <span>Get in Touch</span>
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.909A2.25 2.25 0 012.25 6.993V6.75" />
          </svg>
        </a>
      </div>

      <!-- Stats Row -->
      <div class="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-20">
        <div class="text-center">
          <h3 class="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">6<span class="text-brand-blue">+</span></h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium">Projects</p>
        </div>
        <div class="text-center">
          <h3 class="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">2<span class="text-brand-purple">+</span></h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium">Years</p>
        </div>
        <div class="text-center">
          <h3 class="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">5<span class="text-brand-blue">+</span></h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium">Technologies</p>
        </div>
      </div>
      
      <!-- Scroll indicator -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" class="text-gray-400 dark:text-gray-500 hover:text-brand-blue dark:hover:text-white transition-colors flex flex-col items-center gap-2">
          <span class="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const titles = [
  "Laravel Developer",
  "Vue JS Enthusiast",
  "React Developer",
  "Problem Solver",
  "YouCode Graduate"
];

const currentTitle = ref('');
const mouseX = ref(0);
const mouseY = ref(0);

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;
let timeoutId = null;

const typeEffect = () => {
  const current = titles[titleIndex];
  
  if (isDeleting) {
    currentTitle.value = current.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    currentTitle.value = current.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
  }

  if (!isDeleting && charIndex === current.length) {
    typingSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    titleIndex = (titleIndex + 1) % titles.length;
    typingSpeed = 500;
  }

  timeoutId = setTimeout(typeEffect, typingSpeed);
};

const handleMouseMove = (e) => {
  mouseX.value = e.clientX - window.innerWidth / 2;
  mouseY.value = e.clientY - window.innerHeight / 2;
};

onMounted(() => {
  timeoutId = setTimeout(typeEffect, 1000);
});

onUnmounted(() => {
  if (timeoutId) clearTimeout(timeoutId);
});
</script>

<style scoped>
@keyframes blob {
  0% { transform: scale(1); }
  33% { transform: scale(1.1); }
  66% { transform: scale(0.9); }
  100% { transform: scale(1); }
}

.animate-blob {
  animation: blob 7s infinite;
  will-change: transform;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
