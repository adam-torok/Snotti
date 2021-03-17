<template>
<div class="font-sans bg-white flex flex-col min-h-screen w-full">
  <div>
  <div class="bg-gray-200">
    <div class="px-4 py-16">
      <div class="relative w-full md:max-w-2xl md:mx-auto text-center">
        <h1 class="animate__animated animate__fadeIn  font-bold text-gray-700 text-xl sm:text-2xl md:text-5xl leading-tight mb-6">Snotti - a simple note taking app inspired by Apple Notes</h1>
        <p class="text-gray-600 md:text-xl md:px-18">
          I do not own any right in the apple logo, or used resources.
        </p>
        <i class="mt-4 text-6xl fab fa-3xl fa-apple"></i>
        <br>
        <br>
        <p class="text-gray-600 md:text-xl md:px-18">Twee vaporware irony tote bag iPhone fixie typewriter squid. Direct trade scenester wayfarers art party brooklyn, woke activated charcoal PBR&B raclette. Actually crucifix forage food truck subway tile hexagon, kogi cloud bread activated charcoal williamsburg viral DIY aesthetic. Marfa</p> 
        <div class="hidden sm:hidden md:block h-40 w-40 rounded-full grayish absolute right-0 bottom-0 -mb-64 -mr-48"></div>
        <div class="hidden sm:hidden md:block h-5 w-5 rounded-full grayish absolute top-0 right-0 -mr-40 mt-32"></div>
      </div>
    </div>
    
    <svg
      class="fill-current bg-gray-200 text-white  md:block"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill-opacity="1"
        d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      ></path>
    </svg>

    <div class="video__container">
      <h1 class="font-bold text-gray-700 text-xl sm:text-2xl md:text-5xl leading-tight mb-6">Snotti - a simple note taking app inspired by Apple Notes</h1>
        <p class="text-gray-600 md:text-xl md:px-18">
          I do not own any right in the apple logo, or used resources.
        </p>
      <video width="70%" height="240" autoplay=true muted>
        <source src="videos/out-white.mp4" type="video/mp4">
    </video>
    </div>

  </div>

  <p class="text-center p-4 text-gray-600 mt-10">
    Created by
    <a class="border-b text-gray-400" href="https://adam-torok.netlify.app/" target="_blank">Adam Torok</a>. Inspired by dribble shot
    <a
      href="https://dribbble.com/shots/8807920-Quickpay-Hero-section/attachments/1015863"
      target="_blank"
      class="border-b text-gray-400"
      >https://dribbble.com/vadimdrut</a>
  </p>
  </div>
</div>

</template>

<script>
export default {
}
</script>

<style>
  .grayish{
    background: #D9DEE6;
  }
  .video__container{
    background: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>