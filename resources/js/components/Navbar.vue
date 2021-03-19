<template>
  <div class="bg-gray-200 px-4 py-4">
    <div class="w-full md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between">
      <div class="flex justify-center">
        <router-link to="/" class="inline-block py-2 text-gray-800 text-2xl font-bold"><i class="fab fa-apple"></i> Snotti. </router-link>
      </div>

      <div>
        <div>
          <router-link to="/details" class="flex justify-center md:inline-block py-1 md:py-4 text-gray-600 mr-6">How it Works</router-link>
          <router-link to="/about" class="flex justify-center md:inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6">About the project</router-link>
        </div>
      </div>

        <div>
        <div v-if="currentUser">
          <router-link to="/folders" class="inline-block py-1 md:py-4 text-gray-600 mr-6 font-bold"><i class="fas fa-lg fa-folder-open"></i></router-link>
        </div>
      </div>

      <div v-if="!currentUser">
        <router-link to="/login" class="flex justify-center md:inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6">Login</router-link>
        <router-link to="/register" class="flex justify-center md:inline-block py-2 px-4 text-gray-700 bg-white hover:bg-gray-100 rounded-lg">Register for free</router-link>
      </div>

       <div v-if="currentUser">
         {{currentUser.name}}
        <button @click="logout" class="flex justify-center md:inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'app-header',
      computed :{
        currentUser(){
          return this.$store.state.user.currentUser; // Use a getter instead of this.
        }
      },
      methods: {
        logout(){
          this.$store.dispatch('user/logout');
          this.$router.push('/login');              
        },
        changeMode(){
            let htmlClasses = document.querySelector('html').classList;
            if(localStorage.theme == 'dark') {
                htmlClasses.remove('dark');
                localStorage.removeItem('theme')
            } else {
                htmlClasses.add('dark');
                localStorage.theme = 'dark';
            }
        } 
      },
  data(){
    return{
        menuOpen :false,
    }
  },
}
</script>

<style scoped>
  .naver{
      z-index: 9;
  }
  .dropdown-menu{
      background: white;
      position: absolute;
      width: 200px;
      right: 0;
      top: 3rem;
      justify-content: center;
      align-items: center;
      transform-origin: top;
      transition: all .2s ease-in-out;
  }
  .dropdpown__inner{
      display: flex;
      align-content: center;
      align-items: center;
      transition: all .2s ease-in-out;
      justify-content: center;
      flex-direction: column;
      padding:10px;
  }
  .slide-enter, .slide-leave-to{
      transform: scaleY(0);
  }
  .rotated{
      transform: rotate(180deg)!important;
      transition: all .2s ease-in-out;
  }
  .fa-chevron-circle-down{
      transform: rotate(0deg);
      transition: all .2s ease-in-out;
  }
  .router-link-active{
    font-weight: bold;
  }
</style>