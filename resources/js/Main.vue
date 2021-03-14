<template>
  <div>
    <transition name='fade' mode="out-in" >
      <router-view></router-view>
    </transition>   
  </div>
</template>

<script>
export default {

}
</script>

<style>
  #app{
    user-select: none;
  }
  
  body{
    -webkit-user-select:none;-moz-user-select:-moz-none;
    -ms-user-select:none;user-select:none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    
  }
  *:focus {
    outline: none;
  }
  .fade-enter-active, .fade-leave-active {
    width: inherit;
    transition: opacity .2s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  
  @media only screen and (max-width: 600px) {
    .notes{
      margin: 0 20px!important;
    }
  }
</style>