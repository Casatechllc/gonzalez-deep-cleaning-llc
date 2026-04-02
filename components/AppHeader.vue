<script setup>
import { Motion } from "motion-v"

const isMenuOpen = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'FAQ', path: '/faq' },
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="sticky top-0 z-50 w-full border-b border-gray-100 bg-neutral-surface/80 backdrop-blur-md">
    <div class="container mx-auto px-4">
      <div class="flex h-20 items-center justify-between">
        
        <NuxtLink to="/" class="group flex items-center gap-2">
          <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary text-white shadow-sm transition-transform group-hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
          </div>
          <div class="flex flex-col">
            <span class="text-lg font-bold leading-none text-neutral-text tracking-tight">GONZALEZ</span>
            <span class="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-primary">Deep Cleaning</span>
          </div>
        </NuxtLink>

        <div class="hidden md:flex md:items-center md:gap-8">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.path" 
            :to="link.path"
            class="text-sm font-medium text-gray-600 transition-colors hover:text-brand-primary"
            active-class="text-brand-primary font-bold"
          >
            {{ link.name }}
          </NuxtLink>

          <Motion
            as="button"
            class="ml-4 rounded-full bg-accent-cta px-6 py-2.5 text-sm font-bold text-white shadow-md hover:bg-accent-hover focus:ring-4 focus:ring-accent-cta/20"
            :while-hover="{ scale: 1.05 }"
            :while-press="{ scale: 0.95 }"
            @click="$router.push('/contact')"
          >
            Get a Quote
          </Motion>
        </div>

        <button 
          @click="toggleMenu"
          class="flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 md:hidden"
          aria-label="Toggle Menu"
        >
          <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        <Motion
          v-if="isMenuOpen"
          :initial="{ height: 0, opacity: 0 }"
          :animate="{ height: 'auto', opacity: 1 }"
          :exit="{ height: 0, opacity: 0 }"
          class="overflow-hidden md:hidden"
        >
          <div class="space-y-4 pb-8 pt-4">
            <NuxtLink 
              v-for="link in navLinks" 
              :key="link.path" 
              :to="link.path"
              @click="isMenuOpen = false"
              class="block text-base font-medium text-gray-700 hover:text-brand-primary"
            >
              {{ link.name }}
            </NuxtLink>
            <button 
              @click="$router.push('/contact'); isMenuOpen = false"
              class="w-full rounded-xl bg-brand-primary py-3 font-bold text-white shadow-sm"
            >
              Request Booking
            </button>
          </div>
        </Motion>
      </AnimatePresence>
    </div>
  </nav>
</template>