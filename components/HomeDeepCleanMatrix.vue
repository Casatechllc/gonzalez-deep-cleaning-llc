<script setup>
import { Motion } from "motion-v"

const services = [
  {
    title: 'Kitchen Sanitation',
    description: 'A deep scrub of stove-tops, microwave interiors, and cabinet faces. We remove grease and grime that daily wipes miss.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z' // Sparkle/Flash
  },
  {
    title: 'Bathroom Refresh',
    description: 'Meticulous disinfection of tiles, grout, and fixtures. We ensure a sterile, high-shine finish for your most-used spaces.',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' // Lab/Clean
  },
  {
    title: 'Baseboards & Trim',
    description: 'Hand-wiping every inch of baseboards, door frames, and window sills to remove dust and pet hair buildup.',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' // Home
  },
  {
    title: 'Window Tracks',
    description: 'Removing the dirt and debris that accumulates in window tracks and sliders—a detail often missed by big crews.',
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2 17l.621-4.931a2 2 0 011.432-1.708l6.326-1.807a2 2 0 001.242-1.242l1.807-6.326a2 2 0 011.708-1.432L20 2m-2 18l-1.12-2.241a2 2 0 010-1.789L18 14' // Precision
  },
  {
    title: 'Upholstery Care',
    description: 'Deep vacuuming of sofas and chairs, including under cushions, to remove allergens and hidden dust.',
    icon: 'M20 12V8H4v4M3 20h18M4 12v4a2 2 0 002 2h12a2 2 0 002-2v-4' // Sofa
  },
  {
    title: 'Home Organization',
    description: 'Beyond cleaning, we help declutter and straighten up living areas to create a more functional, peaceful environment.',
    icon: 'M4 6h16M4 12h16m-7 6h7' // Organize
  }
]
</script>

<template>
  <section class="py-24 bg-[#FDF2E9]"> <div class="container mx-auto px-4 text-center">
      
      <div class="mb-20">
        <h2 class="text-3xl md:text-5xl font-black text-neutral-text leading-tight mb-4">
          Not Just Clean. Insured, Qualified, and <br />
          <span class="text-accent-cta">Delivering Results That Matter</span>
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto font-medium">
          Our services meet the highest standards in health, safety, and cleanliness. 
          Experience a detail-oriented clean that franchises can't match.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        <Motion 
          v-for="(service, index) in services" 
          :key="service.title"
          class="relative bg-white p-8 pt-12 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-100"
          :initial="{ opacity: 0, y: 30 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true }"
          :transition="{ delay: index * 0.1 }"
        >
          <div class="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-50 group-hover:scale-110 transition-transform duration-300">
            <div class="w-16 h-16 bg-neutral-background rounded-full flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.icon" />
              </svg>
            </div>
          </div>

          <h3 class="text-2xl font-extrabold text-neutral-text mb-4">{{ service.title }}</h3>
          <p class="text-gray-500 leading-relaxed font-medium">
            {{ service.description }}
          </p>
        </Motion>
      </div>

    </div>
  </section>
</template>