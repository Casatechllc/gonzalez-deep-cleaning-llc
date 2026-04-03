<script setup>
import { Motion } from "motion-v"
</script>

<template>
  <section class="relative bg-neutral-text text-white overflow-hidden">
    <div class="absolute inset-0 z-0 opacity-40">
      <img 
        src="/images/spotless-livingspace.png" 
        class="w-full h-full object-cover" 
        alt="Spotless, beautifully organized living space in Harrisonburg, VA"
      />
    </div>

    <div class="absolute inset-0 z-10 bg-gradient-to-t from-neutral-text via-neutral-text/80 to-transparent lg:bg-gradient-to-r lg:from-neutral-text lg:via-neutral-text/90 lg:to-transparent"></div>

    <div class="container mx-auto px-4 py-24 md:py-32 relative z-20">
      <div class="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
        <Motion 
          class="lg:col-span-8 text-center lg:text-left mb-12 lg:mb-0"
          :initial="{ opacity: 0, x: -50 }"
          :whileInView="{ opacity: 1, x: 0 }"
          :viewport="{ once: true, amount: 0.5 }"
        >
          <div class="inline-block px-4 py-1.5 rounded-full bg-brand-primary text-white font-bold text-xs uppercase tracking-widest mb-6 border border-brand-light/20">
            Harrisonburg's Solo-Cleaner Specialist
          </div>
          
          <h2 class="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
            Ready to Support <br/>
            A <span class="text-accent-cta italic">Local</span> Small <br/>
            Business in VA?
          </h2>
          
          <p class="text-xl text-teal-50 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
            Skip the big franchises and corporate bureaucracy. Experience a meticulous, detail-oriented clean personally executed by Gladys. 
            <strong>Your spotless sanctuary is just a click away.</strong>
          </p>
          
          <div class="mt-8 flex items-center justify-center lg:justify-start gap-4">
             <img src="/images/harrisonburg-va.avif" alt="VA State Seal" class="h-16 w-40 opacity-80" />
             <p class="text-sm font-semibold text-white/80">Locally Owned & Operated in Harrisonburg</p>
          </div>
        </Motion>

        <Motion 
          class="lg:col-span-4 flex justify-center lg:justify-end"
          :initial="{ opacity: 0, scale: 0.8 }"
          :whileInView="{ opacity: 1, scale: 1 }"
          :viewport="{ once: true, amount: 0.5 }"
          :transition="{ delay: 0.3 }"
        >
          <Motion
            as="button"
            class="group relative bg-accent-cta text-white px-12 py-7 rounded-full text-2xl font-black shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:shadow-[0_0_50px_rgba(245,158,11,0.7)] hover:bg-accent-hover transition-all"
            :while-hover="{ scale: 1.05 }"
            :while-press="{ scale: 0.95 }"
            @click="$router.push('/contact')"
          >
            REQUEST QUOTE NOW
            <span class="inline-block ml-3 group-hover:translate-x-3 transition-transform">→</span>
          </Motion>
        </Motion>

      </div>
    </div>
  </section>
</template>