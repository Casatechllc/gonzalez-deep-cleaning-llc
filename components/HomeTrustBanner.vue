<script setup>
import { Motion } from "motion-v"
</script>

<template>
  <section class="relative bg-brand-primary py-16 lg:py-24 overflow-hidden">
    
    <div class="absolute inset-0 opacity-10 pointer-events-none">
      <svg class="absolute top-10 left-10 text-white" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L14.5 9.5L23 12L14.5 14.5L12 23L9.5 14.5L1 12L9.5 9.5L12 1Z" />
      </svg>
      <svg class="absolute bottom-10 right-10 text-white" width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L14.5 9.5L23 12L14.5 14.5L12 23L9.5 14.5L1 12L9.5 9.5L12 1Z" />
      </svg>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        <Motion 
          class="w-full lg:w-1/3 flex justify-center lg:justify-end"
          :initial="{ opacity: 0, scale: 0.8 }"
          :while-in-view="{ opacity: 1, scale: 1 }"
          :viewport="{ once: true }"
        >
          <div class="relative bg-white/20 p-4 rounded-[60px]">
             <img 
               src="https://images.unsplash.com/photo-1581578731548-c64695ce6958?auto=format&fit=crop&q=80&w=600" 
               alt="Gladys with cleaning supplies"
               class="w-72 h-80 lg:w-80 lg:h-96 object-cover rounded-[50px] shadow-2xl"
             />
          </div>
        </Motion>

        <Motion 
          class="w-full lg:w-2/3 text-center lg:text-left"
          :initial="{ opacity: 0, x: 50 }"
          :while-in-view="{ opacity: 1, x: 0 }"
          :viewport="{ once: true }"
          :transition="{ delay: 0.2 }"
        >
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Trusted by Many Happy <br class="hidden md:block" />
            Residential and Small <br class="hidden md:block" />
            Business Clients
          </h2>
          
          <p class="text-xl lg:text-2xl text-teal-50 max-w-2xl font-medium leading-relaxed">
            Homes and offices across <span class="font-bold text-white underline decoration-accent-cta">Harrisonburg and Rockingham County</span> rely on Gonzalez Deep Cleaning LLC for spotless results after every visit!
          </p>

          <div class="mt-8 flex justify-center lg:justify-start items-center gap-3">
             <div class="flex text-yellow-400 text-2xl">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
             </div>
             <span class="text-white font-bold uppercase tracking-widest text-sm">Top Rated Local Specialist</span>
          </div>
        </Motion>

      </div>
    </div>
  </section>
</template>