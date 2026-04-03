<script setup>
import { Motion, AnimatePresence } from "motion-v"
import KitchenDetail from "./KitchenDetail.vue"
import BathroomDetail from "./BathroomDetail.vue"
import LivingDetail from "./LivingDetail.vue"

const currentRoom = ref('Kitchen')

const rooms = [
  { name: 'Kitchen', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { name: 'Bathrooms', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
  { name: 'Living Areas', icon: 'M20 12V8H4v4M3 20h18M4 12v4a2 2 0 002 2h12a2 2 0 002-2v-4' }
]

const currentComponent = computed(() => {
  if (currentRoom.value === 'Kitchen') return KitchenDetail
  if (currentRoom.value === 'Bathrooms') return BathroomDetail
  if (currentRoom.value === 'Living Areas') return LivingDetail
  return KitchenDetail
})
</script>

<template>
  <section class="py-24 bg-white border-y border-brand-light">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16 max-w-2xl mx-auto">
        <h2 class="text-4xl font-black text-neutral-text mb-4">
          The <span class="text-brand-primary">Work of Art</span> by Gladys
        </h2>
        <p class="text-lg text-neutral-text/70 font-medium">
          See exactly how a solo specialist treats every corner of your home. 
          No rushed crews—just meticulous care.
        </p>
      </div>

      <div class="lg:flex lg:gap-16 items-start">
        
        <nav class="lg:w-1/4 lg:sticky lg:top-28 space-y-3 mb-12 lg:mb-0">
          <button 
            v-for="room in rooms" 
            :key="room.name"
            @click="currentRoom = room.name"
            :class="currentRoom === room.name ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20' : 'bg-neutral-background text-neutral-text/60 hover:bg-brand-light hover:text-brand-primary border border-neutral-text/5'"
            class="w-full flex items-center gap-4 p-5 rounded-2xl text-left transition-all duration-300 outline-none group"
          >
            <div 
              :class="currentRoom === room.name ? 'bg-white/10 text-white' : 'bg-brand-light text-brand-primary'"
              class="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="room.icon" />
              </svg>
            </div>
            <span class="text-lg font-bold tracking-tight">{{ room.name }}</span>
            <div v-if="currentRoom === room.name" class="ml-auto w-2.5 h-2.5 bg-accent-cta rounded-full shadow-md animate-pulse"></div>
          </button>
        </nav>

        <div class="lg:w-3/4 bg-neutral-background p-8 md:p-12 rounded-[40px] shadow-inner shadow-neutral-text/5">
          
            <AnimatePresence mode="wait">
                <ClientOnly>
            <Motion 
              :key="currentRoom"
              :initial="{ opacity: 0, y: 15 }"
              :animate="{ opacity: 1, y: 0 }"
              :exit="{ opacity: 0, y: -15 }"
              :transition="{ duration: 0.3, ease: 'easeInOut' }"
            >
              <component :is="currentComponent" />
            </Motion>
            </ClientOnly>
          </AnimatePresence>
          
        </div>

      </div>
    </div>
  </section>
</template>