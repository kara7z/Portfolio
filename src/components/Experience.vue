<template>
  <section id="experience" class="py-24 bg-[#09090b] transition-colors duration-500 relative overflow-hidden">
    
    <!-- Background texture -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 left-0 w-full h-full" style="background-image: radial-gradient(circle at 20% 50%, rgba(234,179,8,0.06) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(245,158,11,0.04) 0%, transparent 50%);"></div>
      <!-- Grid lines -->
      <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px); background-size: 60px 60px;"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end md:justify-between mb-20" v-fade-in>
        <div>
          <p class="text-brand-blue text-sm font-semibold uppercase tracking-[0.2em] mb-3">Career Path</p>
          <h2 class="text-5xl md:text-6xl font-black text-white tracking-tight leading-none">
            My <span class="gradient-text">Journey</span>
          </h2>
        </div>
        <p class="text-gray-500 max-w-xs text-sm leading-relaxed mt-4 md:mt-0">
          From zero to building production-grade applications. Hands-on, project-driven, real-world experience.
        </p>
      </div>

      <!-- Main Content: Timeline + Stats -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <!-- Left: Vertical Timeline -->
        <div class="lg:col-span-2 space-y-0" v-fade-in>
          
          <!-- Timeline item -->
          <div v-for="(item, i) in timeline" :key="i" class="relative flex gap-8 group">
            <!-- Line -->
            <div class="flex flex-col items-center">
              <div class="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-500 z-10"
                   :class="item.active 
                     ? 'bg-brand-blue border-brand-blue shadow-lg shadow-brand-blue/40' 
                     : 'bg-zinc-900 border-zinc-700 group-hover:border-brand-blue/50'">
                <span v-html="item.icon" :class="item.active ? 'text-black' : 'text-zinc-400 group-hover:text-brand-blue transition-colors'"></span>
              </div>
              <div v-if="i < timeline.length - 1" class="w-px flex-1 mt-2 mb-2 min-h-[3rem]"
                   :class="item.active ? 'bg-gradient-to-b from-brand-blue/60 to-transparent' : 'bg-zinc-800'"></div>
            </div>

            <!-- Content -->
            <div class="pb-10 flex-1">
              <div class="flex flex-wrap items-center gap-3 mb-3">
                <span class="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                      :class="item.active ? 'bg-brand-blue/15 text-brand-blue border border-brand-blue/30' : 'bg-zinc-800 text-zinc-500 border border-zinc-700'">
                  {{ item.year }}
                </span>
                <span v-if="item.active" class="flex items-center gap-1.5 text-xs text-green-400 font-medium">
                  <span class="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  Current
                </span>
              </div>

              <h3 class="text-xl font-bold text-white mb-1 group-hover:text-brand-blue transition-colors duration-300">{{ item.title }}</h3>
              <p class="text-brand-blue/80 text-sm font-semibold mb-4">{{ item.org }}</p>
              <p class="text-gray-400 text-sm leading-relaxed mb-5">{{ item.description }}</p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in item.tags" :key="tag"
                      class="text-xs font-medium px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:border-zinc-700 transition-colors">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>

        </div>

        <!-- Right: Stats & Highlight Cards -->
        <div class="flex flex-col gap-6" v-fade-in>

          <!-- Highlight: Doctuss -->
          <div class="relative rounded-3xl overflow-hidden group cursor-default">
            <div class="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-600"></div>
            <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle at 70% 30%, white 0%, transparent 60%);"></div>
            <div class="relative p-8">
              <p class="text-black/50 text-xs font-bold uppercase tracking-widest mb-4">Graduation Project</p>
              <h3 class="text-4xl font-black text-black mb-3 leading-tight">Doctuss</h3>
              <p class="text-black/70 text-sm leading-relaxed mb-6">
                Full medical management platform — real-time appointment booking, patient records & digital consultations.
              </p>
              <a href="https://github.com/kara7z/Doctuss-PROJECT-FILE-ROUGE" target="_blank"
                 class="inline-flex items-center gap-2 text-sm font-bold text-black bg-black/15 hover:bg-black/25 px-4 py-2.5 rounded-xl transition-all duration-200">
                View Project
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Stats Grid -->
          <div class="grid grid-cols-2 gap-4">
            <div v-for="stat in stats" :key="stat.label"
                 class="rounded-2xl bg-zinc-900 border border-zinc-800 p-6 flex flex-col justify-between group hover:border-brand-blue/40 transition-all duration-300">
              <span class="text-3xl font-black text-white">{{ stat.value }}<span class="text-brand-blue">{{ stat.suffix }}</span></span>
              <span class="text-xs text-zinc-500 font-medium mt-2 leading-tight">{{ stat.label }}</span>
            </div>
          </div>

          <!-- Core Skills -->
          <div class="rounded-3xl bg-zinc-900 border border-zinc-800 p-6">
            <p class="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-4">Core Stack</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in coreStack" :key="tech"
                    class="text-xs font-semibold px-3 py-2 bg-zinc-800 border border-zinc-700 text-zinc-300 rounded-xl hover:border-brand-blue/50 hover:text-brand-blue transition-all duration-200 cursor-default">
                {{ tech }}
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const timeline = [
  {
    title: 'Full Stack Developer (Student)',
    org: 'YouCode Maroc — UM6P Partner',
    year: '2025 – 2027',
    active: true,
    description: 'Intensive, project-based developer training program. Built 6+ production-grade applications from scratch using modern web technologies, collaborating in Agile/Scrum team environments.',
    tags: ['Laravel', 'Vue.js', 'React', 'PHP', 'MySQL', 'Tailwind CSS'],
    icon: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>`
  },
  {
    title: 'Scrum & Agile Practitioner',
    org: 'Team Projects — YouCode',
    year: '2025',
    active: false,
    description: 'Applied Agile methodology across multiple team projects — sprint planning, daily stand-ups, retrospectives, and continuous delivery. Worked in cross-functional dev teams with real delivery pressures.',
    tags: ['Scrum', 'Agile', 'Git', 'GitHub', 'Collaboration'],
    icon: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>`
  },
  {
    title: 'Self-Taught Developer',
    org: 'Personal Projects',
    year: '2023 – 2024',
    active: false,
    description: 'Built foundational skills through self-directed learning — HTML, CSS, JavaScript, and PHP. Created personal projects ranging from static sites to dynamic web apps before joining YouCode.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Self-Learning'],
    icon: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>`
  },
];

const stats = [
  { value: '6', suffix: '+', label: 'Projects Built' },
  { value: '2', suffix: '+', label: 'Years Experience' },
  { value: '8', suffix: '+', label: 'Technologies' },
  { value: '100', suffix: '%', label: 'Hands-on Learning' },
];

const coreStack = ['Laravel', 'Vue.js', 'React', 'PHP', 'MySQL', 'JavaScript', 'Tailwind', 'Git'];
</script>
