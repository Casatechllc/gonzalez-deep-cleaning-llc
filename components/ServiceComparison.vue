<script setup>
import { Motion } from "motion-v"
const packages = [
  {
    name: 'Routine Care',
    tagline: 'The Subscription for Peace',
    desc: 'Best for busy Harrisonburg families who want a clean home every single week without lifting a finger.',
    image: '/images/clean-bathroom.avif',
    accent: 'bg-brand-primary'
  },
  {
    name: 'Deep Cleaning',
    tagline: 'The Total Reset',
    desc: 'Our signature "Work of Art" clean. We go behind, under, and inside to remove months of hidden dust.',
    image: '/images/carpet-cleaning.avif',
    accent: 'bg-accent-cta'
  },
  {
    name: 'Host-Ready',
    tagline: 'The Focal Refresh',
    desc: 'Designed for the "Friendly City" hosts. We focus on high-traffic areas so your guests only see the shine.',
    image: '/images/cleaner-glove.avif',
    accent: 'bg-neutral-text'
  }
]
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <ClientOnly>
    <Motion 
      v-for="(pkg, idx) in packages" 
      :key="pkg.name"
      class="group bg-neutral-surface rounded-[40px] overflow-hidden shadow-sm border border-brand-light hover:shadow-2xl transition-all duration-500"
      :initial="{ opacity: 0, y: 20 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :transition="{ delay: idx * 0.1 }"
    >
      <div class="h-64 overflow-hidden relative">
        <img :src="pkg.image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div :class="pkg.accent" class="absolute top-6 left-6 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">
          {{ pkg.tagline }}
        </div>
      </div>
      <div class="p-10">
        <h3 class="text-3xl font-black text-neutral-text mb-4">{{ pkg.name }}</h3>
        <p class="text-neutral-text/70 mb-8 font-medium leading-relaxed">{{ pkg.desc }}</p>
        <a href="tel:5405601273" class="inline-flex items-center gap-2 font-black text-brand-primary group-hover:text-accent-cta transition-colors">
          REQUEST THIS PACKAGE <span>→</span>
        </a>
      </div>
    </Motion>
    </ClientOnly>
  </div>
</template>