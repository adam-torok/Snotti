<template>
<div class="auth__screen flex items-center  p-4 bg-gray-200 lg:justify-center">
      <div class="animate__animated animate__fadeIn flex flex-col overflow-hidden bg-white rounded-md max md:flex-row md:flex-1 lg:max-w-screen-md">
        <div class=" p-4 py-6 hidden text-white bg-gray-700 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
          <div class="font-bold text-center text-white text-xl sm:text-2xl md:text-5xl leading-tight mb-6">
            <a href="#"><i class="mt-4 text-6xl fab text-white fa-xl fa-apple"></i> Snotti.</a>
          </div>
          <p class="mt-6 font-normal text-center text-gray-300 md:mt-0">
            With the power of Snotti, you can now take notes like never before! <br> (actually, it's a lie).
          </p>
          <p class="flex flex-col items-center justify-center mt-10 text-center">
            <span>Don't have an account?</span>
            <router-link to="/register">Get Started!</router-link>
          </p>
        </div>
        <div class="px-5 py-2 bg-white md:flex-1">
          <h3 class="my-4 text-2xl font-semibold text-gray-700">Account Login</h3>
          <form @submit.prevent='authenticate' class="flex flex-col space-y-5">
            <div class="flex flex-col space-y-1">
              <label for="email" class="text-sm font-semibold text-gray-500">Email address</label>
              <input
                v-model="form.email"
                name="email"
                type="email"
                id="email"
                required
                autofocus
                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-gray-200"
              />
            </div>
            <div class="flex flex-col space-y-1">
              <div class="flex items-center justify-between">
                <label for="password" class="text-sm font-semibold text-gray-500">Password</label>
              </div>
              <input
                v-model="form.password"
                type="password"
                name="password"
                required
                id="password"
                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-gray-200"
              />
            </div>
            <div class="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-gray-200"
              />
              <label for="remember" class="text-sm font-semibold text-gray-500">Remember me</label>
            </div>
            <div>
              <button
                type="submit"
                class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-gray-700 rounded-md hover:bg-gray-900"
              >
                {{loginText}}
                  <i v-show="isLoading" class="fas fa-spinner fa-spin"></i>
              </button>

            <Error v-if="errors.length > 0" :alert="this.errors[0]"/>

            </div>
            <div class="flex flex-col space-y-5">
              <span class="flex items-center justify-center space-x-2">
                <span class="h-px bg-gray-400 w-14"></span>
                <small class="font-normal text-center text-gray-500"><strong>It is Completely free. And will be free.</strong></small>
                <span class="h-px bg-gray-400 w-14"></span>
              </span>
            </div>
          </form>
        </div>
      </div>
</div>
</template>

<script>
import Error from '../../components/Error'
export default {
  data(){
    return {
      isLoading: false,
      loginText : 'Login',
      form : {
        email : '',
        password : '',
      },
      errors : []
    }
  },
  components:{
    Error
  },
     methods: {

      authenticate() {
         this.isLoading = true;
         this.loginText = "Logging in";
         setTimeout(() => {
            this.$store.dispatch('user/login', this.$data.form)
               .then((res) => {
                  this.$store.commit("user/LOGIN_SUCCESS", res);
                  this.$router.push({ path: "/folders" });
               })
               .catch((error) => {
                  setTimeout(() => {
                     this.loginText = "Login";
                     this.isLoading = false;
                     this.errors.push(error);
                  }, 1000);
               });
         }, 2000);
      },
   }
}
</script>

<style>

</style>