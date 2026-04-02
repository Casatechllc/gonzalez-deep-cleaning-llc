<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div>
      <h3 class="text-3xl font-black text-neutral-text mb-2">Kitchen Deep Sanitation</h3>
      <p class="text-sm font-black text-brand-dark uppercase tracking-widest mb-6">Meticulous Clean-Up</p>
      
      <p class="text-lg text-neutral-text/80 mb-8 leading-relaxed font-medium">
        Tired of seeing grease buildup? We focus on degreasing high-traffic areas and ensuring a true food-safe sanitation. Gladys takes her time to make surfaces shine.
      </p>

      <ul class="space-y-4">
        <li v-for="item in ['Stove-top & microwave (Interior & Exterior)', 'Cabinet faces & drawer fronts', 'Full sink, drain, & faucet polish', 'Floor sanitation & hand-wiped corners']" 
            class="flex items-center gap-4 text-base font-bold text-neutral-text/90">
          <span class="text-accent-cta text-xl">✓</span> {{ item }}
        </li>
      </ul>
    </div>
    <div class="aspect-square bg-white rounded-[40px] overflow-hidden shadow-xl border border-neutral-text/5 relative">
        <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover" alt="Clean kitchen details" />
        <div class="absolute bottom-6 left-6 bg-brand-primary p-5 rounded-2xl text-white shadow-xl">
             <p class="text-xs uppercase font-bold tracking-widest opacity-80">Checklist</p>
             <p class="text-2xl font-black">Food-Safe</p>
        </div>
    </div>
  </div>
</template>