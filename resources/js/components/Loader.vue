<template>
  <transition
    mode="out-in"
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut">
    <div class="loading bg-white bg-opacity-50 dark:bg-opacity-50 dark:bg-black absolute z-50 h-screen w-full flex flex-col items-center justify-center">
      <i class="fas fa-spinner fa-xl fa-spin"></i>
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style>
.loading {
  position: fixed;
  backdrop-filter: blur(10px);
  z-index: 999;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  background-attachment: fixed;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: show;
  flex-direction: column;
  width: 100%;
  display: flex;
  margin: auto;
  top: 0;
  left: 0;
  justify-content: center;
  bottom: 0;
  right: 0;
  align-items: center;
  height: 100%!important;
  margin:0;
  transition: none!important;
}
</style>