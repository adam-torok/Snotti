<template>
  <div>
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components:{
    Navbar
  },
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
    transition: opacity 0.2s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  
  @media only screen and (max-width: 900px) {
    .notes{
      margin: 0 20px!important;
    }
  }
</style>