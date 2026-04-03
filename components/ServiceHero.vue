<template>
  <header class="relative h-[60vh] flex items-center overflow-hidden">
    <div class="absolute inset-0 z-0">
      <img 
        src="/images/cleaning-products.avif" 
        class="w-full h-full object-cover brightness-[0.4]" 
        alt="Clean home aesthetic"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-brand-dark/60 to-neutral-background"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10 text-center">
        <ClientOnly>
      <Motion 
        :initial="{ opacity: 0, y: 30 }"
        :animate="{ opacity: 1, y: 0 }"
      >
        <h1 class="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
          Our <span class="text-accent-cta italic">Solutions</span>
        </h1>
        <p class="text-xl text-brand-light max-w-2xl mx-auto font-bold uppercase tracking-widest">
          Meticulous. Consistent. Locally Owned in VA.
        </p>
      </Motion>
      </ClientOnly>
    </div>
  </header>
</template>