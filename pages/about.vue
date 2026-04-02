<script setup>
import { Motion } from "motion-v"
</script>

<template>
  <div class="bg-neutral-background">
    <section class="py-20 lg:py-32">
      <div class="container mx-auto px-4 lg:grid lg:grid-cols-12 gap-16 items-center">
        
        <Motion 
          class="lg:col-span-5 mb-12 lg:mb-0 relative"
          :initial="{ opacity: 0, x: -30 }"
          :whileInView="{ opacity: 1, x: 0 }"
          :viewport="{ once: true }"
        >
          <div class="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800" 
              alt="Gladys, Founder of Gonzalez Deep Cleaning LLC"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="absolute -bottom-6 -right-6 bg-brand-primary text-white p-6 rounded-2xl shadow-xl border-4 border-white">
            <p class="text-xs uppercase tracking-widest font-bold opacity-80 leading-none mb-1">Serving</p>
            <p class="text-xl font-bold">Harrisonburg, VA</p>
          </div>
        </Motion>

        <Motion 
          class="lg:col-span-7"
          :initial="{ opacity: 0, x: 30 }"
          :whileInView="{ opacity: 1, x: 0 }"
          :viewport="{ once: true }"
        >
          <span class="text-brand-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Roots</span>
          <h1 class="text-4xl md:text-5xl font-extrabold text-neutral-text mb-8 leading-tight">
            A Cleaner Home for <br/>
            <span class="text-brand-primary">The Friendly City.</span>
          </h1>
          
          <div class="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              My name is <strong>Gladys</strong>, and I founded <strong>Gonzalez Deep Cleaning LLC</strong> to serve our neighbors here in Harrisonburg and across Rockingham County.
            </p>
            <p>
              As a first-generation entrepreneur, I believe in the value of a hard day's work. I don't believe in "good enough"—I believe in perfection. When you book a cleaning, you aren't getting a crew of strangers; you are getting me, the owner, ensuring every surface in your home is a work of art.
            </p>
            <p class="font-medium italic border-l-4 border-brand-primary pl-6 py-2">
              "My goal is to give Harrisonburg families their weekends back, providing a spotless sanctuary they can be proud of."
            </p>
          </div>
        </Motion>
      </div>
    </section>

    <section class="py-20 bg-brand-light/30">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-neutral-text">Why Harrisonburg Trusts Gladys</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-primary/30 transition-colors">
            <div class="w-10 h-10 bg-brand-light rounded-full flex items-center justify-center mb-4 text-brand-primary">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h3 class="text-xl font-bold text-neutral-text mb-2">Locally Owned</h3>
            <p class="text-gray-600">Based right here in Harrisonburg. I’m not a franchise—I’m your neighbor.</p>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-primary/30 transition-colors">
            <div class="w-10 h-10 bg-brand-light rounded-full flex items-center justify-center mb-4 text-brand-primary">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
            </div>
            <h3 class="text-xl font-bold text-neutral-text mb-2">Fully Insured</h3>
            <p class="text-gray-600">Peace of mind is part of the package. Your home is protected and respected.</p>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-primary/30 transition-colors">
            <div class="w-10 h-10 bg-brand-light rounded-full flex items-center justify-center mb-4 text-brand-primary">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h3 class="text-xl font-bold text-neutral-text mb-2">Fair Pricing</h3>
            <p class="text-gray-600">Direct-from-owner quotes. No hidden franchise fees or corporate middle-men.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>