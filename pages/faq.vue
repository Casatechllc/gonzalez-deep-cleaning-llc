<script setup>
import { Motion, AnimatePresence } from "motion-v"

const faqs = ref([
  {
    question: "Who will be cleaning my home?",
    answer: "At Gonzalez Deep Cleaning LLC, we believe in consistency. Gladys, the owner, personally handles every cleaning project. You won't have to worry about a revolving door of strangers in your home.",
    open: true
  },
  {
    question: "Do you speak Spanish?",
    answer: "¡Sí! Gladys is fluent in both English and Spanish. We take pride in being able to communicate clearly and comfortably with all our neighbors in the Harrisonburg community.",
    open: false
  },
  {
    question: "Do I need to provide cleaning supplies?",
    answer: "No. Gladys brings all the necessary high-standard cleaning supplies and equipment needed to make your home shine. If you have specific products you'd like us to use, just let us know!",
    open: false
  },
  {
    question: "Are you insured?",
    answer: "Absolutely. We are a fully licensed and insured LLC operating in the state of Virginia. Your peace of mind and the safety of your home are our top priorities.",
    open: false
  },
  {
    question: "How do I get a quote?",
    answer: "You can request a free quote through our website form or by sending us a text. Since every home is a 'work of art,' Gladys will provide a personalized estimate based on your specific needs and home size.",
    open: false
  }
])

const toggleFaq = (index) => {
  faqs.value[index].open = !faqs.value[index].open
}
</script>

<template>
  <div class="bg-neutral-background min-h-screen py-20 lg:py-32">
    <div class="container mx-auto px-4 max-w-4xl">
      
      <div class="text-center mb-16">
        <Motion 
          :initial="{ opacity: 0, y: -20 }"
          :animate="{ opacity: 1, y: 0 }"
          class="inline-block px-4 py-1 rounded-full bg-brand-light text-brand-dark font-bold text-xs uppercase tracking-widest mb-4 border border-brand-primary/20"
        >
          Common Questions
        </Motion>
        <h1 class="text-4xl md:text-6xl font-black text-neutral-text mb-6 leading-tight">
          Clear Answers for <br/>
          <span class="text-accent-cta italic">The Friendly City</span>
        </h1>
        <p class="text-lg text-neutral-text/70 font-medium">
          Everything you need to know about our personal, high-standard cleaning process.
        </p>
      </div>

      <div class="space-y-4">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="bg-neutral-surface rounded-3xl shadow-sm border border-brand-light overflow-hidden transition-all duration-300"
          :class="{'shadow-md border-brand-primary/20': faq.open}"
        >
          <button 
            @click="toggleFaq(index)"
            class="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none group"
          >
            <span class="text-xl font-bold text-neutral-text group-hover:text-brand-primary transition-colors">
              {{ faq.question }}
            </span>
            <div 
              class="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center text-brand-primary transition-transform duration-300"
              :class="{'rotate-180 bg-brand-primary text-white shadow-lg shadow-brand-primary/30': faq.open}"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          <AnimatePresence>
            <Motion
              v-if="faq.open"
              :initial="{ height: 0, opacity: 0 }"
              :animate="{ height: 'auto', opacity: 1 }"
              :exit="{ height: 0, opacity: 0 }"
              class="overflow-hidden"
            >
              <div class="px-6 md:px-8 pb-8 text-neutral-text/70 text-lg leading-relaxed border-t border-brand-light pt-4">
                {{ faq.answer }}
              </div>
            </Motion>
          </AnimatePresence>
        </div>
      </div>
      <Motion 
        class="mt-20 bg-brand-dark rounded-[40px] p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl"
        :initial="{ opacity: 0, scale: 0.95 }"
        :while-in-view="{ opacity: 1, scale: 1 }"
        :viewport="{ once: true }"
      >
        <div class="relative z-10">
          <h2 class="text-3xl font-black mb-4 italic">Still have a specific question?</h2>
          <p class="text-brand-light/80 mb-8 text-lg font-medium">
            Gladys is happy to help. Send us a message or a text today!
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <NuxtLink to="/contact" class="bg-accent-cta text-white px-10 py-4 rounded-full font-black text-lg hover:bg-accent-hover transition-all shadow-lg shadow-accent-cta/20">
              Contact Gladys →
            </NuxtLink>
            <a href="tel:540XXXXXXX" class="bg-white/10 text-white border border-white/20 px-10 py-4 rounded-full font-black text-lg hover:bg-white/20 transition-all backdrop-blur-sm">
              Call/Text Now
            </a>
          </div>
        </div>
        
        <div class="absolute -bottom-20 -right-20 w-64 h-64 bg-accent-cta/20 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute -top-20 -left-20 w-48 h-48 bg-brand-primary/20 rounded-full blur-3xl"></div>
      </Motion>

    </div>
  </div>
</template>