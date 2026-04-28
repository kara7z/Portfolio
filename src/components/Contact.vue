<template>
  <section id="contact" class="py-24 bg-white dark:bg-[#18181b] transition-colors duration-500 relative overflow-hidden">
    <!-- Background Decor -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <div class="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-yellow-400/5 blur-[150px]"></div>
      <div class="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-amber-400/5 blur-[120px]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="mb-16" v-fade-in>
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">Let's Work <span class="gradient-text">Together</span></h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 font-light mt-4 max-w-2xl">
          Have a project in mind or looking for a full stack developer? I'm currently open to new opportunities and exciting collaborations.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8" v-fade-in>
        
        <!-- Contact Form -->
        <div class="lg:col-span-3 rounded-[2rem] bg-gray-50 dark:bg-white/5 backdrop-blur-xl border border-gray-100 dark:border-white/10 p-8 md:p-10 shadow-sm">
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-semibold text-gray-700 dark:text-gray-400 mb-2">Name</label>
                <input type="text" id="name" v-model="form.name" required
                  class="w-full px-5 py-4 bg-white dark:bg-[#09090b] border border-gray-200 dark:border-zinc-800 rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-600 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all duration-300"
                  placeholder="Your name">
              </div>
              <div>
                <label for="email" class="block text-sm font-semibold text-gray-700 dark:text-gray-400 mb-2">Email</label>
                <input type="email" id="email" v-model="form.email" required
                  class="w-full px-5 py-4 bg-white dark:bg-[#09090b] border border-gray-200 dark:border-zinc-800 rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-600 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all duration-300"
                  placeholder="you@example.com">
              </div>
            </div>
            
            <div>
              <label for="message" class="block text-sm font-semibold text-gray-700 dark:text-gray-400 mb-2">Message</label>
              <textarea id="message" v-model="form.message" rows="6" required
                class="w-full px-5 py-4 bg-white dark:bg-[#09090b] border border-gray-200 dark:border-zinc-800 rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-600 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."></textarea>
            </div>
            
            <button type="submit" 
              class="w-full group px-8 py-5 bg-brand-blue text-black font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:bg-brand-purple flex items-center justify-center gap-3 shadow-lg shadow-brand-blue/20 hover:shadow-brand-purple/30 text-lg glow-pulse">
              <span>Send Message</span>
              <svg class="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </form>
        </div>

        <!-- Contact Info -->
        <div class="lg:col-span-2 flex flex-col gap-6">
          
          <!-- Email Card -->
          <a href="mailto:kara.ossama12@gmail.com" class="group rounded-[2rem] bg-gray-50 dark:bg-white/5 backdrop-blur-xl border border-gray-100 dark:border-white/10 p-8 shadow-sm hover:shadow-xl hover:border-brand-blue/30 transition-all duration-300 flex items-center gap-5">
            <div class="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-brand-blue/20 transition-all duration-300">
              <svg class="w-7 h-7 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.909A2.25 2.25 0 012.25 6.993V6.75" />
              </svg>
            </div>
            <div>
              <p class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Email</p>
              <p class="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-brand-blue transition-colors">kara.ossama12@gmail.com</p>
            </div>
          </a>

          <!-- Phone Card -->
          <a href="tel:+212669911100" class="group rounded-[2rem] bg-gray-50 dark:bg-white/5 backdrop-blur-xl border border-gray-100 dark:border-white/10 p-8 shadow-sm hover:shadow-xl hover:border-brand-purple/30 transition-all duration-300 flex items-center gap-5">
            <div class="w-14 h-14 bg-brand-purple/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-brand-purple/20 transition-all duration-300">
              <svg class="w-7 h-7 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.25-3.95-6.847-6.847l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <div>
              <p class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Phone</p>
              <p class="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-brand-purple transition-colors">+212 669 911 100</p>
            </div>
          </a>

          <!-- Social Links Card -->
          <div class="rounded-[2rem] bg-gray-900 dark:bg-white/5 border border-zinc-800 dark:border-white/10 p-8 relative overflow-hidden group flex-1">
            <div class="absolute inset-0 bg-brand-blue/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-[2rem]"></div>
            <div class="relative z-10">
              <h4 class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">Find me on</h4>
              <div class="flex gap-4">
                <a href="https://github.com/kara7z" target="_blank" rel="noopener noreferrer" 
                   class="flex items-center justify-center w-14 h-14 bg-white/10 border border-white/10 rounded-2xl text-white hover:bg-brand-blue hover:text-black hover:border-brand-blue transition-all duration-300 hover:scale-110">
                  <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                  </svg>
                </a>
                
                <a href="https://www.linkedin.com/in/oussama-kara/" target="_blank" rel="noopener noreferrer" 
                   class="flex items-center justify-center w-14 h-14 bg-white/10 border border-white/10 rounded-2xl text-white hover:bg-[#0a66c2] hover:border-[#0a66c2] transition-all duration-300 hover:scale-110">
                  <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-950 dark:bg-[#09090b] border-t border-zinc-800 relative overflow-hidden">
    <!-- Subtle glow -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand-blue/60 to-transparent"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        <!-- Brand Column -->
        <div class="md:col-span-2">
          <div class="flex items-center gap-3 mb-5">
            <span class="text-xl font-bold text-white">Kara Oussama</span>
          </div>
          <p class="text-gray-400 leading-relaxed max-w-sm text-sm mb-6">
            A passionate Full Stack Developer from Morocco building scalable, secure, and user-centric web applications. YouCode graduate. Always learning.
          </p>
          <div class="flex items-center gap-3">
            <a href="https://github.com/kara7z" target="_blank" rel="noopener noreferrer"
               class="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-brand-blue hover:border-brand-blue transition-all duration-300">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/oussama-kara/" target="_blank" rel="noopener noreferrer"
               class="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-[#0a66c2] hover:border-[#0a66c2] transition-all duration-300">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="mailto:kara.ossama12@gmail.com"
               class="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-black hover:bg-brand-blue hover:border-brand-blue transition-all duration-300">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.909A2.25 2.25 0 012.25 6.993V6.75" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Navigation Column -->
        <div>
          <h4 class="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Navigation</h4>
          <ul class="space-y-3">
            <li v-for="link in footerNav" :key="link.name">
              <a :href="link.href" class="flex items-center gap-2 text-gray-400 hover:text-brand-blue text-sm transition-colors duration-200 group">
                <span class="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-brand-blue transition-colors"></span>
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Tech Stack Column -->
        <div>
          <h4 class="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Tech Stack</h4>
          <div class="flex flex-wrap gap-2">
            <span v-for="tech in techStack" :key="tech" class="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-400 text-xs font-medium rounded-lg hover:border-brand-blue/50 hover:text-brand-blue transition-all duration-200">
              {{ tech }}
            </span>
          </div>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-gray-500 text-sm">
          &copy; {{ new Date().getFullYear() }} Kara Oussama. Crafted with Vue 3 & Tailwind CSS.
        </p>
        <div class="flex items-center gap-2 text-gray-500 text-sm">
          <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Open to work
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  message: ''
});

const footerNav = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const techStack = ['Laravel', 'Vue.js', 'React', 'PHP', 'MySQL', 'Tailwind CSS', 'JavaScript', 'Git'];

const submitForm = () => {
  alert(`Thanks for your message, ${form.value.name}! I will get back to you soon.`);
  form.value = { name: '', email: '', message: '' };
};
</script>
