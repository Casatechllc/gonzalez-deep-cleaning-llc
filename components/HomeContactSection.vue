<script setup>
import { Motion } from "motion-v"
</script>

<template>
  <section class="py-24 bg-[#F0FDF4]"> 
    <div class="container mx-auto px-4">
      
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-black text-emerald-900 leading-tight mb-4">
          Speak with a Real Person <span class="text-emerald-600 block md:inline">No Call Centers Here</span>
        </h2>
        <p class="text-lg text-emerald-800/80 max-w-3xl mx-auto leading-relaxed font-medium">
          Have a question about our services? Not sure what kind of cleaning you need? 
          Gladys, our **friendly local specialist**, is happy to walk you through your options. 
          No pressure. Just helpful guidance from a Harrisonburg neighbor who cares.
        </p>
      </div>

      <Motion
            as="a"
            class="w-full bg-accent-cta text-white py-6 rounded-full text-xl font-black shadow-lg hover:bg-accent-hover transition-all flex items-center justify-center gap-3"
            :while-hover="{ scale: 1.02 }"
            :while-press="{ scale: 0.98 }"
            href = "tel:5405601273"
          >
            REQUEST A QUOTE NOW
            <span class="text-2xl">→</span>
        </Motion>
          <!--
      <ClientOnly>
      <Motion 
        class="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-[40px] shadow-[0_20px_50px_rgba(5,150,105,0.1)] border border-emerald-100"
        :initial="{ opacity: 0, y: 30 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :viewport="{ once: true }"
      >
        <form class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Name" 
              class="w-full px-6 py-4 border border-emerald-100 bg-emerald-50/30 rounded-full focus:border-emerald-500 focus:bg-white outline-none transition-all placeholder:text-emerald-700/40" />
            
            <input type="email" placeholder="Email" 
              class="w-full px-6 py-4 border border-emerald-100 bg-emerald-50/30 rounded-full focus:border-emerald-500 focus:bg-white outline-none transition-all placeholder:text-emerald-700/40" />
          </div>
          
          <input type="tel" placeholder="Phone Number" 
            class="w-full px-6 py-4 border border-emerald-100 bg-emerald-50/30 rounded-full focus:border-emerald-500 focus:bg-white outline-none transition-all placeholder:text-emerald-700/40" />
          
          <input type="text" placeholder="Full Address" 
            class="w-full px-6 py-4 border border-emerald-100 bg-emerald-50/30 rounded-full focus:border-emerald-500 focus:bg-white outline-none transition-all placeholder:text-emerald-700/40" />
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Town/City (e.g. Harrisonburg)" 
              class="w-full px-6 py-4 border border-emerald-100 bg-emerald-50/30 rounded-full focus:border-emerald-500 focus:bg-white outline-none transition-all placeholder:text-emerald-700/40" />

            <select class="w-full px-6 py-4 border border-emerald-100 bg-emerald-50/30 rounded-full focus:border-emerald-500 focus:bg-white outline-none transition-all appearance-none text-emerald-700/60">
              <option>Service Type</option>
              <option>Routine Maintenance</option>
              <option>Deep Clean Reset</option>
              <option>Host-Ready Special</option>
            </select>
          </div>

          <div class="py-4">
            <div class="bg-emerald-50/50 border border-emerald-100 p-4 rounded-2xl inline-flex items-center gap-4">
              <input type="checkbox" class="w-6 h-6 rounded border-emerald-300 text-emerald-600 focus:ring-emerald-500" />
              <span class="text-sm font-bold text-emerald-800">I'm not a robot</span>
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/RecaptchaLogo.svg" class="h-8 ml-8 opacity-40 grayscale" alt="reCAPTCHA" />
            </div>
          </div>

          <Motion
            as="button"
            type="submit"
            class="w-full bg-accent-cta text-white py-6 rounded-full text-xl font-black shadow-lg hover:bg-accent-hover transition-all flex items-center justify-center gap-3"
            :while-hover="{ scale: 1.02 }"
            :while-press="{ scale: 0.98 }"
          >
            REQUEST A QUOTE NOW
            <span class="text-2xl">→</span>
          </Motion>
        </form>

        <p class="mt-8 text-center text-emerald-900/40 text-sm italic font-black uppercase tracking-widest">
          **We are not accepting job applications at the moment
        </p>
      </Motion>
      </ClientOnly>
    -->

    </div>
  </section>
</template>