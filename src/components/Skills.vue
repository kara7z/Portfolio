<template>
  <section id="skills" class="py-24 bg-gray-50 dark:bg-[#09090b] overflow-hidden transition-colors duration-500 relative">
    <!-- Background Decor -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-yellow-500/5 blur-[150px]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
      <div class="text-center max-w-3xl mx-auto" v-fade-in>
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">Technical <span class="gradient-text">Arsenal</span></h2>
      </div>
    </div>

    <!-- Infinite Marquee -->
    <div class="relative flex overflow-x-hidden w-full py-8 bg-white/50 dark:bg-white/5 backdrop-blur-md border-y border-gray-200 dark:border-white/10 z-10" v-fade-in>
      <div class="animate-marquee whitespace-nowrap flex items-center">
        <span v-for="n in 2" :key="n" class="flex items-center">
          <span v-for="(skill, i) in allSkills" :key="skill.name + n + i" class="flex items-center mx-8 group cursor-default">
            <span class="w-3 h-3 rounded-full mr-4 bg-gray-300 dark:bg-zinc-700 group-hover:bg-brand-blue transition-colors duration-300 group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(234,179,8,0.8)]"></span>
            <span class="text-5xl md:text-6xl font-black text-transparent transition-all duration-300 hover:scale-110" 
                  style="-webkit-text-stroke: 1.5px rgba(156, 163, 175, 0.4);"
                  @mouseover="hoveredSkill = skill.name"
                  @mouseleave="hoveredSkill = null"
                  :class="hoveredSkill === skill.name ? 'bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 !text-transparent' : ''">
              {{ skill.name }}
            </span>
          </span>
        </span>
      </div>
    </div>

    <!-- Interactive Categories Grid -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-20">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6" v-fade-in>
        
        <div v-for="(category, idx) in categories" :key="idx" class="rounded-[2rem] bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-100 dark:border-white/10 p-8 shadow-sm hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] transition-all duration-500 group relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500" :class="category.gradient"></div>
          
          <div class="flex items-center mb-8">
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center mr-4 bg-gray-50 dark:bg-[#09090b] border border-gray-100 dark:border-zinc-800 text-gray-900 dark:text-white group-hover:scale-110 transition-transform duration-300" :class="category.iconColor">
              <span v-html="category.icon"></span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ category.title }}</h3>
          </div>
          
          <div class="flex flex-wrap gap-2">
            <span v-for="tech in category.items" :key="tech" class="px-4 py-2 rounded-xl text-sm font-medium bg-gray-50 dark:bg-[#09090b] border border-gray-200 dark:border-zinc-800 text-gray-700 dark:text-gray-300 group-hover:border-opacity-50 transition-colors duration-300" :class="category.hoverBorder">
              {{ tech }}
            </span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const hoveredSkill = ref(null);

const allSkills = [
  { name: 'JavaScript' },
  { name: 'Vue JS' },
  { name: 'React' },
  { name: 'Laravel' },
  { name: 'Tailwind CSS' },
  { name: 'PHP' },
  { name: 'MySQL' },
  { name: 'Twig' },
  { name: 'Git' }
];

const categories = [
  {
    title: 'Frontend',
    gradient: 'from-yellow-400 to-amber-400',
    iconColor: 'group-hover:text-brand-blue',
    hoverBorder: 'group-hover:border-brand-blue/30',
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>`,
    items: ['JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'React JS', 'Vue JS']
  },
  {
    title: 'Backend',
    gradient: 'from-amber-500 to-orange-400',
    iconColor: 'group-hover:text-brand-purple',
    hoverBorder: 'group-hover:border-brand-purple/30',
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" /></svg>`,
    items: ['Laravel', 'PHP', 'MySQL', 'Twig']
  },
  {
    title: 'Tools & DevOps',
    gradient: 'from-gray-400 to-gray-600',
    iconColor: 'group-hover:text-gray-400',
    hoverBorder: 'group-hover:border-gray-400/30',
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014-8.81c-2.28-.327-4.63-.487-7.03-.487-2.4 0-4.75.16-7.03.487m15.074 8.322c-.688.06-1.386.09-2.09.09H16.5a4.5 4.5 0 110-9h.75c.704 0 1.402.03 2.09.09m0 9.18c-.253.962-.584 1.892-.985 2.783-.247.55-.06 1.21.463 1.511l.657.38c.551.318 1.26.117 1.527-.461a20.845 20.845 0 001.44-4.282m-3.102.069a18.03 18.03 0 00.59-4.59c0-1.586-.205-3.124-.59-4.59m0 9.18a23.848 23.848 0 00-8.835 2.535M13.66 6.66a23.847 23.847 0 01-8.835-2.535m0 0A23.74 23.74 0 015.205 3m-.38 1.125a23.91 23.91 0 00-1.014 5.395m1.014-8.81c2.28-.327 4.63-.487 7.03-.487 2.4 0 4.75.16 7.03.487" /></svg>`,
    items: ['Git', 'GitHub', 'Scrum']
  }
];
</script>
