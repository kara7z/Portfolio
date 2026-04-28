<template>
  <section id="projects" class="py-24 bg-white dark:bg-[#18181b] transition-colors duration-500 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div class="mb-16 md:flex md:items-end md:justify-between" v-fade-in>
        <div class="max-w-2xl">
          <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">Featured <span class="gradient-text">Projects</span></h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 font-light">A selection of my best work, spanning full-stack applications, scalable SaaS platforms, and creative web experiences.</p>
        </div>
        
        <div class="hidden md:block">
          <a href="https://github.com/kara7z" target="_blank" rel="noopener noreferrer" class="group flex items-center gap-2 text-brand-blue font-medium hover:text-brand-purple transition-colors duration-300">
            <span>View GitHub</span>
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" v-fade-in>
        
        <div v-for="(project, index) in projects" :key="index" 
             class="group relative bg-gray-50 dark:bg-[#09090b] border border-gray-100 dark:border-zinc-800 rounded-[2.5rem] overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_40px_rgba(234,179,8,0.1)] transition-all duration-500 hover:-translate-y-2"
             :class="project.featured ? 'md:col-span-2 lg:col-span-3 flex flex-col lg:flex-row' : 'flex flex-col'">
          
          <!-- Image Section -->
          <div class="relative overflow-hidden bg-gray-200 dark:bg-zinc-800" 
               :class="project.featured ? 'lg:w-[55%] h-72 lg:h-auto' : 'w-full h-64'">
            <img :src="project.image" :alt="project.title" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
            
            <div class="absolute top-6 left-6 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-xl" v-html="project.icon"></div>
            
            <span class="absolute top-6 right-6 inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase backdrop-blur-md border shadow-lg"
                  :class="project.featured ? 'bg-brand-blue text-black border-brand-blue/50' : 'bg-zinc-900/60 text-gray-100 border-zinc-600/50'">
              {{ project.badge }}
            </span>
          </div>

          <!-- Content Section -->
          <div class="p-8 md:p-10 flex flex-col justify-between relative z-10" 
               :class="project.featured ? 'lg:w-[45%]' : 'flex-grow'">
            
            <div>
              <h3 class="text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-brand-blue transition-colors duration-300 tracking-tight">{{ project.title }}</h3>
              
              <p class="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-light text-lg">
                {{ project.description }}
              </p>

              <!-- Tech Stack -->
              <div class="flex flex-wrap gap-2 mb-8">
                <span v-for="tech in project.tech" :key="tech" class="text-xs font-semibold text-gray-600 dark:text-gray-400 bg-white dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 px-3 py-1.5 rounded-lg transition-colors duration-300">
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Action Button -->
            <a :href="project.github" target="_blank" rel="noopener noreferrer" 
               class="inline-flex items-center justify-center w-full md:w-auto px-6 py-4 bg-gray-900 dark:bg-zinc-800 text-white rounded-2xl font-semibold transition-all duration-300 hover:bg-brand-blue hover:text-black hover:shadow-lg hover:shadow-brand-blue/30 group/btn self-start">
              <span>View Source</span>
              <svg class="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <!-- Mobile GitHub Link -->
      <div class="mt-12 md:hidden text-center" v-fade-in>
        <a href="https://github.com/kara7z" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-8 py-4 bg-brand-blue text-black rounded-full font-bold transition-all duration-300 shadow-lg shadow-brand-blue/30">
          <span>View All on GitHub</span>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    title: 'Doctuss Platform',
    featured: true,
    badge: 'Fil Rouge',
    image: '/images/doctuss.png',
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>`,
    description: 'My Fil Rouge graduation project — a full-scale medical management platform connecting doctors and patients. Features real-time appointment scheduling, secure patient records, doctor dashboards, and a clean consultation workflow built entirely with Laravel.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/kara7z/Doctuss-PROJECT-FILE-ROUGE'
  },
  {
    title: 'WorkSphere SaaS',
    featured: false,
    badge: 'Productivity',
    image: '/images/worksphere.png',
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>`,
    description: 'A remote-first SaaS workspace platform built for distributed teams. Includes Kanban-style task boards, multi-project dashboards, team roles, and an internal messaging system — all in one unified interface.',
    tech: ['Laravel', 'React JS', 'Tailwind', 'MySQL'],
    github: 'https://github.com/kara7z/WorkSphere---Virtual-Workspace'
  },
  {
    title: 'EasyColoc',
    featured: false,
    badge: 'Finance App',
    image: '/images/easycoloc.png',
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>`,
    description: 'A smart colocation management app that eliminates money disputes between roommates. Automatically calculates shared expenses, splits rent fairly, and tracks every payment — keeping everyone on the same page.',
    tech: ['Laravel', 'PHP', 'Tailwind CSS', 'JS'],
    github: 'https://github.com/kara7z/EasyColoc-Platform'
  },
  {
    title: 'GourmetLibrary',
    featured: false,
    badge: 'Social Media',
    image: '/images/gourmet.png',
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>`,
    description: 'A community-driven recipe platform where food lovers discover, save, and share gourmet recipes. Built with a clean social feed, user authentication, and a curated library of culinary content.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Tailwind'],
    github: 'https://github.com/kara7z/GourmetLibrary-full-stack'
  },
  {
    title: 'Space Odyssey',
    featured: false,
    badge: 'Creative UI',
    image: '/images/spacetravel.png',
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.438 4.438 0 002.946-2.946 4.493 4.493 0 004.306-1.758q-2.25-.56-4.5-4.5z" /></svg>`,
    description: 'A visually immersive space-travel landing page built purely to push CSS and JavaScript to their limits. Scroll-triggered animations, parallax star fields, and a cinematic cosmic aesthetic from start to finish.',
    tech: ['HTML5', 'CSS3', 'JS', 'Animations'],
    github: 'https://github.com/kara7z/Space-Travel-Odyssey'
  },
  {
    title: 'BlogCMS',
    featured: false,
    badge: 'CMS App',
    image: '/images/blogcms.png',
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>`,
    description: 'A full-featured CMS built for digital publishers and bloggers. Supports multi-role user access, a rich text editor, post scheduling, category management, and a complete admin dashboard for content control.',
    tech: ['Laravel', 'PHP', 'HTML', 'CSS', 'MySQL'],
    github: 'https://github.com/kara7z/BlogCMS-website'
  }
]);
</script>
