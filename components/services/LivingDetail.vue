<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div>
      <h3 class="text-3xl font-black text-neutral-text mb-2">Living & Bedrooms</h3>
      <p class="text-sm font-black text-brand-dark uppercase tracking-widest mb-6">Detail Dusting</p>
      
      <p class="text-lg text-neutral-text/80 mb-8 leading-relaxed font-medium">
        It’s the small things that matter in your sanctuary. We hand-dust surfaces, clear cobwebs, and ensure living areas are straighten up to provide functional peace.
      </p>

      <ul class="space-y-4">
        <li v-for="item in ['Detail dusting of surfaces & decor', 'Upholstery vacuuming (under cushions)', 'Ceiling fan & light fixture sanitation', 'Hand-wiped baseboards & trim']" 
            class="flex items-center gap-4 text-base font-bold text-neutral-text/90">
          <span class="text-accent-cta text-xl">✓</span> {{ item }}
        </li>
      </ul>
    </div>
    <div class="aspect-square bg-white rounded-[40px] overflow-hidden shadow-xl border border-neutral-text/5 relative">
        <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover" alt="Organized living room sanctuary" />
        <div class="absolute bottom-6 left-6 bg-brand-primary p-5 rounded-2xl text-white shadow-xl">
             <p class="text-xs uppercase font-bold tracking-widest opacity-80">Checklist</p>
             <p class="text-2xl font-black">Meticulous Dust</p>
        </div>
    </div>
  </div>
</template>