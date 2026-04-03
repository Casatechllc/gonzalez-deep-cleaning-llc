<script setup>
import { Motion } from "motion-v"
</script>

<template>
  <header class="relative min-h-[85vh] flex items-center overflow-hidden">
    <div class="absolute inset-0 z-0">
      <img 
        src="/images/pristine-living-room.jpg" 
        class="w-full h-full object-cover brightness-[0.4]" 
        alt="Pristine Living Room"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-neutral-text/90 to-transparent"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-3xl">
        <div class="flex items-center gap-2 mb-6 bg-white/10 backdrop-blur-md w-fit px-4 py-2 rounded-full border border-white/20">
          <div class="flex text-yellow-400">
            <span v-for="i in 5" :key="i">★</span>
          </div>
          <span class="text-white text-sm font-bold uppercase tracking-widest">Harrisonburg's Best</span>
        </div>

        <h1 class="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
          The Clean You <br/>
          <span class="text-brand-primary">Deserve.</span>
        </h1>
        
        <p class="text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
          Forget the franchises. Get a "work of art" clean directly from Gladys. 
          Harrisonburg’s most trusted solo-operator cleaning service.
        </p>

        <div class="flex flex-col sm:flex-row items-center gap-6">
            <ClientOnly>
          <Motion
            as="button"
            class="group relative bg-accent-cta text-white px-10 py-5 rounded-full text-xl font-black shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] transition-all"
            :while-hover="{ scale: 1.05 }"
            @click="$router.push('/contact')"
          >
            GET A FREE QUOTE
            <span class="inline-block ml-2 group-hover:translate-x-2 transition-transform">→</span>
          </Motion>
          </ClientOnly>

          <div class="hidden lg:block">
            <svg width="60" height="40" viewBox="0 0 60 40" fill="none" class="text-brand-primary animate-bounce-x">
              <path d="M2 20H58M58 20L42 4M58 20L42 36" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
@keyframes bounce-x {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(10px); }
}
.animate-bounce-x {
  animation: bounce-x 1.5s infinite;
}
</style>