<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div>
      <h3 class="text-3xl font-black text-neutral-text mb-2">Bathroom Restoration</h3>
      <p class="text-sm font-black text-brand-dark uppercase tracking-widest mb-6">Grout & Shine</p>
      
      <p class="text-lg text-neutral-text/80 mb-8 leading-relaxed font-medium">
        Bathrooms are where rushed crews cut corners. Gladys uses high-standard sanitizers to eliminate mold risk and provides a polished finish to all fixtures.
      </p>

      <ul class="space-y-4">
        <li v-for="item in ['Grout scrub & tile sanitation', 'Bathtub, shower, & glass descaling', 'Toilet bowl & base sanitation', 'Mirror polish & fixture detailing']" 
            class="flex items-center gap-4 text-base font-bold text-neutral-text/90">
          <span class="text-accent-cta text-xl">✓</span> {{ item }}
        </li>
      </ul>
    </div>
    <div class="aspect-square bg-white rounded-[40px] overflow-hidden shadow-xl border border-neutral-text/5 relative">
        <img src="/images/clean-bathroom.avif" class="w-full h-full object-cover" alt="Grout scrubbed bathroom" />
        <div class="absolute bottom-6 left-6 bg-brand-primary p-5 rounded-2xl text-white shadow-xl">
             <p class="text-xs uppercase font-bold tracking-widest opacity-80">Checklist</p>
             <p class="text-2xl font-black">Sterile Finish</p>
        </div>
    </div>
  </div>
</template>