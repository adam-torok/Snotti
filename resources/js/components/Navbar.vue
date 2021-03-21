<template>
  <div class="bg-gray-200 px-4 py-4">
    <div class="w-full flex items-center content-center justify-between	 md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between">
      <div class="flex justify-center">
        <router-link data-tippy-content="Home" to="/" class="inline-block py-2 text-gray-800 text-2xl font-bold"><i class="fab fa-apple"></i> Snotti. </router-link>
      </div>

        <div ref="outerDropdownMenu" v-if="!currentUser">
            <button @click="outerMenuOpen = !outerMenuOpen" type="button" class="inline-flex justify-center w-full rounded-md border px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none" id="options-menu" aria-expanded="true" aria-haspopup="true">
              Menu
              <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>

          <transition mode="in-out" name="slide-fade">
            <div v-if="outerMenuOpen" class="z-50 origin-top-right absolute right-10 mt-2 w-56 rounded-md bg-white focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <div class="py-1" role="none">
                <router-link to="/details" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">How it Works</router-link>
                <router-link to="/about" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">About the project</router-link>
                <router-link to="/login" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Login</router-link>
                <router-link to="/register" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Register for free</router-link>
              </div>
            </div>
          </transition>
      </div>
       
      <div v-if="currentUser">
          <router-link data-tippy-content="These are your folders" to="/folders" class="inline-block py-1 md:py-4 text-gray-600 mr-6 font-bold">Folders</router-link>
      </div>

       <div ref="dropdownMenu" v-if="currentUser">
        <div @click="menuOpen = !menuOpen" class="relative inline-block text-left">
          <div>
            <button type="button" class="inline-flex justify-center w-full rounded-md border px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none" id="options-menu" aria-expanded="true" aria-haspopup="true">
              Options
              <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>

          <transition mode="in-out" name="slide-fade">
            <div v-if="menuOpen" class="z-50 origin-top-right absolute right-0 mt-2 w-56 rounded-md bg-white focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <div class="py-1" role="none">
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Account settings</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Support</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">License</a>
                <a href="#" @click="logout" class="cursor-pointer w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Logout</a>
              </div>
            </div>
          </transition>

        </div>
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
      created: function() {
          document.addEventListener('click', this.documentClick)
      },
      destroyed(){
          document.removeEventListener('click', this.documentClick)
      },
      methods: {
        documentClick(e){
                if(this.$refs.dropdownMenu){
                    let el = this.$refs.dropdownMenu
                    let target = e.target
                    if ((el !== target) && !el.contains(target)  || target.tagName == 'NAV' || target.tagName == 'A') {
                        this.menuOpen = false;
                    }
                }else{
                    let el = this.$refs.outerDropdownMenu
                    let target = e.target
                    if ((el !== target) && !el.contains(target)  || target.tagName == 'NAV' || target.tagName == 'A') {
                        this.outerMenuOpen = false;
                    }
                }
          },
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
        outerMenuOpen : false
    }
  },
}
</script>

<style scoped>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
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