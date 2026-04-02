<script setup>
import { Motion, AnimatePresence } from "motion-v"

const formData = ref({
  name: '',
  email: '',
  phone: '',
  serviceType: 'Routine Maintenance',
  homeSize: '1-2 Bedrooms',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  await new Promise(resolve => setTimeout(resolve, 1500))
  isSubmitting.value = false
  showSuccess.value = true
}
</script>

<template>
  <AnimatePresence mode="wait">
    <div v-if="!showSuccess" key="form">
      <form @submit.prevent="submitForm" class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div class="md:col-span-1">
          <label class="block text-sm font-black text-emerald-950 uppercase tracking-widest mb-2">Full Name</label>
          <input v-model="formData.name" type="text" placeholder="Your Name" required
            class="w-full px-6 py-4 bg-white border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 rounded-2xl transition-all outline-none text-neutral-text placeholder:text-gray-300" />
        </div>

        <div class="md:col-span-1">
          <label class="block text-sm font-black text-emerald-950 uppercase tracking-widest mb-2">Email Address</label>
          <input v-model="formData.email" type="email" placeholder="email@example.com" required
            class="w-full px-6 py-4 bg-white border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 rounded-2xl transition-all outline-none text-neutral-text placeholder:text-gray-300" />
        </div>

        <div class="md:col-span-1">
          <label class="block text-sm font-black text-emerald-950 uppercase tracking-widest mb-2">Phone Number</label>
          <input v-model="formData.phone" type="tel" placeholder="540-000-0000" required
            class="w-full px-6 py-4 bg-white border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 rounded-2xl transition-all outline-none text-neutral-text placeholder:text-gray-300" />
        </div>

        <div class="md:col-span-1">
          <label class="block text-sm font-black text-emerald-950 uppercase tracking-widest mb-2">Service Needed</label>
          <div class="relative">
            <select v-model="formData.serviceType" 
              class="w-full px-6 py-4 bg-white border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 rounded-2xl transition-all outline-none appearance-none text-neutral-text cursor-pointer">
              <option>Routine Maintenance</option>
              <option>The Deep Clean Reset</option>
              <option>Host-Ready Special</option>
            </select>
            <div class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
        </div>

        <div class="md:col-span-2">
          <label class="block text-sm font-black text-emerald-950 uppercase tracking-widest mb-2">Approximate Home Size</label>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button type="button" v-for="size in ['Studio', '1-2 Bed', '3-4 Bed', '5+ Bed']" :key="size"
              @click="formData.homeSize = size"
              :class="formData.homeSize === size ? 'bg-emerald-600 text-white border-emerald-600 shadow-md' : 'bg-white text-gray-500 border-gray-200 hover:border-emerald-200 hover:bg-emerald-50/30'"
              class="py-4 px-2 rounded-xl border-2 font-bold text-xs transition-all uppercase tracking-widest">
              {{ size }}
            </button>
          </div>
        </div>

        <div class="md:col-span-2">
          <label class="block text-sm font-black text-emerald-950 uppercase tracking-widest mb-2">Specific Details (Pets, Focus areas, etc.)</label>
          <textarea v-model="formData.message" rows="4" placeholder="Tell Gladys about your home..."
            class="w-full px-6 py-4 bg-white border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 rounded-2xl transition-all outline-none text-neutral-text placeholder:text-gray-300"></textarea>
        </div>

        <div class="md:col-span-2 pt-2">
          <Motion
            as="button"
            type="submit"
            :disabled="isSubmitting"
            class="w-full bg-accent-cta text-white py-6 rounded-2xl text-xl font-black shadow-xl hover:bg-accent-hover flex items-center justify-center gap-4 transition-all disabled:opacity-50"
            :while-hover="{ scale: 1.02 }"
            :while-press="{ scale: 0.98 }"
          >
            {{ isSubmitting ? 'SENDING...' : 'GET MY FREE QUOTE' }}
            <span v-if="!isSubmitting" class="text-2xl">→</span>
          </Motion>
        </div>
      </form>
    </div>

    <Motion v-else key="success" :initial="{ opacity: 0, scale: 0.95 }" :animate="{ opacity: 1, scale: 1 }" class="text-center py-12">
      <div class="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">✓</div>
      <h3 class="text-3xl font-black text-emerald-950 mb-3">Message Sent!</h3>
      <p class="text-gray-600 mb-8">Thanks, {{ formData.name.split(' ')[0] }}! Gladys will reach out shortly.</p>
      <button @click="showSuccess = false" class="text-emerald-600 font-bold underline uppercase text-sm tracking-widest">Send another request</button>
    </Motion>
  </AnimatePresence>
</template>