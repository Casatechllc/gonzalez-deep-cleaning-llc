<script setup>
import ServiceRoomDetail from "~/components/services/ServiceRoomDetail.vue"
</script>

<template>
  <div class="bg-neutral-background min-h-screen">
    <ServiceHero />
    
    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="text-center mb-20">
          <h2 class="text-4xl md:text-5xl font-black text-neutral-text mb-6">
            The Master’s Touch in <span class="text-brand-primary">Every Package</span>
          </h2>
          <p class="text-xl text-neutral-text/70 mx-auto font-medium">
            No matter which level of clean you choose, you receive Gladys's 
            unwavering attention to detail.
          </p>
        </div>
        
        <ServiceComparison />
      </div>
    </section>
    <ServiceRoomDetail />

    <ServiceChecklist />
    <HomeFinalCTA />
  </div>
</template>