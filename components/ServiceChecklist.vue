<template>
  <section class="py-24 bg-brand-light">
    <div class="container mx-auto px-4">
      <div class="bg-neutral-surface rounded-[60px] p-8 md:p-20 shadow-xl border border-brand-primary/10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-4xl font-black text-neutral-text mb-8">
              The <span class="text-brand-primary">Deep Clean</span> <br/>Standard Checklist
            </h2>
            <ul class="space-y-4">
              <li v-for="item in ['Kitchen appliances (exterior)', 'Baseboards & window tracks', 'Bathtub & shower grout scrub', 'Dusting ceiling fans & vents', 'Full floor sanitation', 'Cobweb removal']" 
                  class="flex items-center gap-4 text-lg font-bold text-neutral-text/80">
                <span class="text-accent-cta text-2xl">★</span> {{ item }}
              </li>
            </ul>
            <div class="mt-12 p-6 bg-brand-primary/5 rounded-2xl border-l-4 border-brand-primary">
              <p class="text-sm font-black text-brand-dark italic">
                "Gladys personally inspects every surface before finishing a job to ensure her work of art is perfect."
              </p>
            </div>
          </div>
          <div class="relative">
            <img src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=800" 
                 class="rounded-[40px] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500" />
            <div class="absolute -bottom-6 -left-6 bg-accent-cta p-8 rounded-3xl text-white shadow-xl">
               <p class="text-4xl font-black">50+</p>
               <p class="text-xs uppercase font-bold tracking-widest opacity-80">Points Inspected</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>