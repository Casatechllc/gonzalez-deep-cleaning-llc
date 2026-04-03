<script setup lang="ts">
import HomeDeepCleanMatrix from '~/components/HomeDeepCleanMatrix.vue';

</script>

<template>
  <div>
    <HomeHero />
    <HomeTrustBanner />

    <section class="py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div class="max-w-2xl">
            <h2 class="text-4xl md:text-5xl font-black text-neutral-text leading-tight">
              A Personal Touch in <br/> Every Corner.
            </h2>
          </div>
          <div class="flex text-brand-primary text-2xl gap-1">
            <span v-for="i in 5" :key="i">★</span>
            <span class="text-neutral-text text-sm font-bold ml-2 self-center uppercase">100% Satisfaction</span>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="group relative h-[450px] overflow-hidden rounded-3xl cursor-pointer">
            <img src="/images/clean-bathroom.avif" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div class="absolute bottom-0 p-8">
              <h3 class="text-2xl font-bold text-white mb-2">Deep Cleaning</h3>
              <p class="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity">The total home reset. Hand-scrubbed baseboards and detailed sanitation.</p>
              <div class="w-12 h-12 bg-accent-cta rounded-full flex items-center justify-center text-white">→</div>
            </div>
          </div>

          <div class="group relative h-[450px] overflow-hidden rounded-3xl cursor-pointer">
            <img src="/images/carpet-cleaning.avif" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-0 p-8">
              <h3 class="text-2xl font-bold text-white mb-2">Routine Care</h3>
              <p class="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity">Consistent maintenance for Harrisonburg families. Weekly or Bi-weekly.</p>
              <div class="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white">→</div>
            </div>
          </div>

          <div class="group relative h-[450px] overflow-hidden rounded-3xl cursor-pointer">
            <img src="/images/cleaner-glove.avif" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div class="absolute bottom-0 p-8">
              <h3 class="text-2xl font-bold text-white mb-2">Host-Ready</h3>
              <p class="text-gray-600 mb-4 opacity-0 group-hover:opacity-100 transition-opacity">Make your home shine for guests or Airbnbs. Focalized cleaning.</p>
              <div class="w-12 h-12 bg-white text-brand-primary rounded-full flex items-center justify-center">→</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-neutral-background">
      <div class="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
        <div class="lg:w-1/2">
          <div class="relative">
            <img src="/images/kitchen-cooking.avif" class="rounded-3xl shadow-2xl relative z-10" />
            <div class="absolute -top-10 -left-10 w-40 h-40 bg-brand-light rounded-full z-0 animate-pulse"></div>
            <div class="absolute -right-8 top-1/2 hidden lg:block z-20">
               <svg width="100" height="50" viewBox="0 0 100 50" fill="none" class="text-accent-cta transform -rotate-12">
                 <path d="M5 25C20 10 50 10 95 25M95 25L80 15M95 25L80 35" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
               </svg>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <h2 class="text-4xl font-black mb-6">Built Different. Cleaned Personally.</h2>
          <p class="text-lg text-gray-700 mb-8">
            Why choose **Gonzalez Deep Cleaning LLC** over a big franchise? Because when you hire us, you’re hiring a Harrisonburg neighbor who takes pride in the details. 
          </p>
          <ul class="space-y-4">
             <li class="flex items-center gap-3 font-bold text-neutral-text">
               <span class="text-yellow-400 text-xl">★★★★★</span> The Same Expert Every Visit
             </li>
             <li class="flex items-center gap-3 font-bold text-neutral-text">
               <span class="text-yellow-400 text-xl">★★★★★</span> 100% Insured & VA Based
             </li>
             <li class="flex items-center gap-3 font-bold text-neutral-text">
               <span class="text-yellow-400 text-xl">★★★★★</span> Direct Owner Communication
             </li>
          </ul>
        </div>
      </div>
    </section>
    <HomeDeepCleanMatrix />

    <HomeFeatureCTA />

    <HomeFinalCTA />

    <HomeContactSection />
  </div>
</template>