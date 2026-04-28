<template>
  <section id="about" class="py-24 bg-white dark:bg-[#18181b] transition-colors duration-500 overflow-hidden relative">
    <!-- Background Decor -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-yellow-400/5 blur-[120px]"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-amber-400/5 blur-[120px]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div class="mb-16" v-fade-in>
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">About <span class="gradient-text">Me</span></h2>
      </div>

      <!-- Bento Box Grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]" v-fade-in>
        
        <!-- Box 1: Profile Image -->
        <div class="md:col-span-1 md:row-span-2 relative rounded-[2rem] overflow-hidden group shadow-sm border border-gray-100 dark:border-zinc-800">
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
          <img src="/images/profile.png?v=2" alt="Kara Oussama" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMzNzQxNTEiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOWNhM2FmIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Qcm9maWxlIEltYWdlPC90ZXh0Pjwvc3ZnPg=='"/>
          <div class="absolute bottom-6 left-6 z-20">
            <h3 class="text-white text-2xl font-bold">Kara Oussama</h3>
            <p class="text-gray-300 text-sm font-medium">Morocco</p>
          </div>
        </div>

        <!-- Box 2: Main Bio -->
        <div class="md:col-span-3 rounded-[2rem] bg-gray-50 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 p-8 md:p-10 flex flex-col justify-center shadow-sm transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10">
          <p class="text-xl md:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed font-light">
            I am a results-driven <strong class="font-bold text-gray-900 dark:text-white">Full Stack Developer</strong> proudly trained at YouCode (UM6P). I specialize in building scalable, secure, and user-centric web applications from the ground up.
          </p>
        </div>

        <!-- Box 3: Quote/Philosophy -->
        <div class="md:col-span-2 rounded-[2rem] bg-gradient-to-br from-yellow-400 to-amber-500 p-8 md:p-10 flex flex-col justify-center text-black relative overflow-hidden group shadow-lg">
          <div class="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
          <h4 class="text-lg font-medium text-black/60 mb-2 uppercase tracking-wider">My Philosophy</h4>
          <h3 class="text-3xl md:text-4xl font-bold leading-tight">"Learning by Doing"</h3>
        </div>

        <!-- Box 4: YouCode Graduate -->
        <div class="md:col-span-1 rounded-[2rem] bg-gray-50 dark:bg-[#09090b] border border-gray-200 dark:border-zinc-800 p-8 flex flex-col justify-center items-center text-center shadow-sm group hover:border-brand-blue/50 transition-colors duration-300">
          <svg class="w-12 h-12 text-brand-blue mb-4 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
          </svg>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white">YouCode</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Graduate</p>
        </div>

        <!-- Box 5: Experience Stat -->
        <div class="md:col-span-2 rounded-[2rem] bg-gray-900 dark:bg-white/5 border border-zinc-800 dark:border-white/10 p-8 flex items-center justify-between group overflow-hidden relative">
          <div class="absolute inset-0 bg-brand-blue/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-[2rem]"></div>
          <div class="relative z-10">
            <h3 class="text-5xl md:text-6xl font-black text-white">2<span class="text-brand-blue">+</span></h3>
            <p class="text-lg text-gray-400 mt-2 font-medium">Years of Hands-on<br/>Project Experience</p>
          </div>
          <div class="relative z-10 w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
            <svg class="w-8 h-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
        </div>

        <!-- Box 6: Agile/Scrum -->
        <div class="md:col-span-2 rounded-[2rem] bg-gray-50 dark:bg-[#09090b] border border-gray-200 dark:border-zinc-800 p-8 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow duration-300">
          <div class="flex items-center gap-4 mb-4">
            <span class="p-3 bg-brand-blue/10 text-brand-blue rounded-xl">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            </span>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Agile & Scrum</h3>
          </div>
          <p class="text-gray-600 dark:text-gray-400">
            Highly experienced in Agile environments, actively participating in sprints, stand-ups, and continuous delivery pipelines.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>
