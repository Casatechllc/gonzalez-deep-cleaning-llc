<script setup>
import { Motion } from "motion-v"

const features = [
  {
    title: 'Trusted Cleaner',
    description: 'A local neighbor you can trust—even when you’re not home.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  },
  {
    title: 'Reliable Communication',
    description: 'Honest, direct, and reliable communication with Gladys.',
    icon: 'M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
  },
  {
    title: 'Detailed Cleaning',
    description: 'Meticulous attention to detail—not just surface-level work.',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
  },
  {
    title: 'Building Relationships',
    description: 'A Harrisonburg local who values long-term community ties.',
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
  }
]
</script>

<template>
  <section class="py-24 bg-white overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row items-center gap-16">
        
        <div class="w-full lg:w-1/2 space-y-4">
          <Motion 
            v-for="(feature, index) in features" 
            :key="feature.title"
            class="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-50 group hover:border-brand-primary/30 transition-colors"
            :initial="{ opacity: 0, x: -30 }"
            :while-in-view="{ opacity: 1, x: 0 }"
            :viewport="{ once: true }"
            :transition="{ delay: index * 0.1 }"
          >
            <div class="flex-shrink-0 w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon" />
              </svg>
            </div>
            
            <div>
              <h3 class="text-xl font-bold text-neutral-text">{{ feature.title }}</h3>
              <p class="text-gray-500 font-medium">{{ feature.description }}</p>
            </div>
          </Motion>
        </div>

        <div class="w-full lg:w-1/2">
          <Motion 
            :initial="{ opacity: 0, x: 30 }"
            :while-in-view="{ opacity: 1, x: 0 }"
            :viewport="{ once: true }"
          >
            <h2 class="text-4xl md:text-5xl font-black text-neutral-text leading-tight mb-6">
              Expert Hands. <br />
              <span class="text-accent-cta italic">Exceptional Results.</span>
            </h2>
            
            <p class="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              Whether it’s a one-time reset or ongoing maintenance, you need a cleaning service that respects your time, your home, and your expectations.
            </p>
            
            <p class="text-xl font-bold text-neutral-text mb-10">
              That’s exactly what I deliver to my neighbors in Harrisonburg.
            </p>

            <Motion
              as="button"
              class="relative bg-accent-cta text-white px-10 py-5 rounded-full text-xl font-black shadow-xl hover:bg-accent-hover focus:ring-4 focus:ring-accent-cta/30"
              :while-hover="{ scale: 1.05 }"
              :while-press="{ scale: 0.95 }"
              @click="$router.push('/contact')"
            >
              Request your free quote today
            </Motion>
          </Motion>
        </div>

      </div>
    </div>
  </section>
</template>