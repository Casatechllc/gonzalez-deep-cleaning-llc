<script setup>
import { Motion } from "motion-v"
</script>

<template>
  <div class="bg-neutral-background">
    <header class="relative min-h-[60vh] flex items-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img 
          src="/images/clean-kitchen.jpg" 
          class="w-full h-full object-cover brightness-[0.5]" 
          alt="Spotless home interior in the Shenandoah Valley"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/70 to-transparent"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-3xl">
          <div class="flex items-center gap-2 mb-6 bg-white/10 backdrop-blur-md w-fit px-4 py-2 rounded-full border border-white/20">
             <img src="/images/harrisonburg-va.avif" alt="VA State Seal" class="h-6 w-16 opacity-80" />
            <span class="text-white text-sm font-bold uppercase tracking-widest">Locally Owned in Harrisonburg</span>
          </div>

          <h1 class="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
            Get Your Free <br/>
            <span class="text-accent-cta italic">Personal Quote.</span>
          </h1>
          
          <p class="text-xl text-brand-light mb-10 max-w-xl leading-relaxed font-medium">
            Contact Gladys directly to discuss your specific needs.
            English & Español.
          </p>
        </div>
      </div>
    </header>

    <section class="py-24 bg-brand-primary text-white">
      <div class="container mx-auto px-4 lg:grid lg:grid-cols-12 gap-16 items-start">
        <Motion 
          class="lg:col-span-6 mb-16 lg:mb-0"
          :initial="{ opacity: 0, x: -50 }"
          :whileInView="{ opacity: 1, x: 0 }"
          :viewport="{ once: true, amount: 0.5 }"
        >
          <div>
            <div class="inline-block px-4 py-1.5 rounded-full bg-accent-cta text-white font-bold text-xs uppercase tracking-widest mb-6 border border-white/20">
              Harrisonburg Solo Cleaner
            </div>
            <h2 class="text-4xl md:text-5xl font-black leading-tight mb-6">
              Direct Line <br/>
              to the <span class="text-accent-cta italic text-white">Owner</span>.
            </h2>
            <p class="text-lg text-brand-light font-medium mb-12 max-w-xl leading-relaxed">
              At Gonzalez Deep Cleaning LLC, we don't believe in corporate gatekeepers. In **Harrisonburg and Rockingham County**, trust and local community matter. When you call, you speak with Gladys.
            </p>

            <div class="space-y-8">
              <div class="flex items-center gap-4 border-b border-brand-dark pb-6">
                  <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white font-bold border border-white/20">ES</div>
                  <p class="text-brand-light font-bold text-xl">¡Sí! Hablamos Español.</p>
              </div>
              
              <div class="flex items-start gap-4 border-b border-brand-dark pb-6">
                  <div class="w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center text-accent-cta shadow-inner">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                      <h3 class="text-brand-light font-black uppercase tracking-widest text-xs mb-1 opacity-80">Phone / Text Quotes</h3>
                      <p class="text-white text-3xl font-black mb-1">(540) XXX-XXXX</p>
                      <p class="text-brand-light/70 text-sm font-medium italic">Text quotes are available for convenience.</p>
                  </div>
              </div>
              
              <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center text-accent-cta hover:bg-brand-light hover:text-brand-primary transition-all cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <a href="mailto:info@gonzalezdeepcleaning.com" class="text-brand-light hover:text-white font-bold text-lg underline decoration-accent-cta decoration-2 underline-offset-4 transition-all">info@gonzalezdeepcleaning.com</a>
              </div>
            </div>
          </div>
        </Motion>

        <Motion 
          class="lg:col-span-6 p-8 lg:p-12 bg-neutral-surface rounded-3xl shadow-2xl border border-brand-light/10"
          :initial="{ opacity: 0, scale: 0.9 }"
          :whileInView="{ opacity: 1, scale: 1 }"
          :viewport="{ once: true, amount: 0.5 }"
          :transition="{ delay: 0.3 }"
        >
          <ContactForm />
        </Motion>
      </div>
    </section>

    <section class="py-24 bg-neutral-surface border-y border-brand-light">
      <div class="container mx-auto px-4 lg:grid lg:grid-cols-12 gap-16 items-center">
        
        <div class="lg:col-span-7 mb-16 lg:mb-0">
          <div class="aspect-video bg-brand-light rounded-3xl overflow-hidden shadow-sm relative border border-brand-primary/20">
             <div class="absolute inset-0 flex items-center justify-center z-10">
                 <div class="relative bg-accent-cta text-white p-6 rounded-full shadow-2xl border-4 border-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                 </div>
             </div>
             <img src="https://images.unsplash.com/photo-1596401057633-5310657968cb?auto=format&fit=crop&q=80&w=1600" class="w-full h-full object-cover brightness-[0.7]" alt="Harrisonburg Virginia Map Area" />
          </div>
          <div class="mt-8 flex flex-col sm:flex-row gap-6 items-center justify-between text-center sm:text-left bg-brand-light p-6 rounded-2xl border border-brand-primary/10">
             <div>
                 <h3 class="text-xl font-bold text-brand-dark mb-1 tracking-tight">Our VA Service Area</h3>
                 <p class="text-brand-primary font-medium max-w-md leading-relaxed">Harrisonburg, Rockingham County, Bridgewater, Dayton, and local student housing areas.</p>
             </div>
             <p class="font-black text-[10px] uppercase tracking-widest text-brand-dark/40 bg-white px-3 py-1 rounded-full border border-brand-primary/10">**Solo Operator Specialists**</p>
          </div>
        </div>

        <div class="lg:col-span-5 text-center lg:text-left">
          <h2 class="text-4xl md:text-5xl font-black text-neutral-text leading-tight mb-8">
            Ready for <br/> Meticulous Care <br/>
            <span class="text-accent-cta italic">Just a Call Away.</span>
          </h2>
          <p class="text-xl text-neutral-text/70 leading-relaxed font-medium mb-12 max-w-md mx-auto lg:mx-0">
            Support a locally owned VA business. Every project is a work of art for Gladys. We look forward to exceeding your expectations.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
             <NuxtLink 
              to="/about" 
              class="flex items-center justify-center gap-2 text-white bg-brand-dark px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-brand-primary transition-all"
            >
              Meet Gladys first →
            </NuxtLink>
            <NuxtLink 
              to="/contact" 
              class="flex items-center justify-center gap-2 text-white bg-accent-cta px-8 py-4 rounded-full font-black text-xl shadow-xl hover:bg-accent-hover transition-all"
            >
              Request Quote
            </NuxtLink>
          </div>
        </div>

      </div>
    </section>

    <HomeFinalCTA />
  </div>
</template>