<template>
<div class="auth__screen flex items-center p-4 bg-gray-100 lg:justify-center">
      <div
        class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
      >
        <div
          class="p-4 py-6 text-white bg-gray-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
        >
          <div class="font-bold text-center text-white text-xl sm:text-2xl md:text-5xl leading-tight mb-6">
            <a href="#">Snotti.</a>
          </div>
          <p class="mt-6 font-normal text-center text-gray-300 md:mt-0">
              With the power of Snotti, you can now take notes like never before! <br> (actually, it's a lie).
          </p>
          <p class="flex flex-col items-center justify-center mt-10 text-center">
            <span>Already have an account?</span>
            <router-link to="/login" class="underline">Login</router-link>
          </p>
        </div>
        <div class="p-5 bg-white md:flex-1">
          <h3 class="my-4 text-2xl font-semibold text-gray-700">Register an account</h3>
          <form action="#" class="flex flex-col space-y-5">
            <div class="flex flex-col space-y-1">
              <label for="email" class="text-sm font-semibold text-gray-500">Email address</label>
              <input
                type="email"
                id="email"
                autofocus
                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-gray-200"
              />
            </div>
            <div class="flex flex-col space-y-1">
              <div class="flex items-center justify-between">
                <label for="password" class="text-sm font-semibold text-gray-500">Password</label>
              </div>
              <input
                type="password"
                id="password"
                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-gray-200"
              />
            </div>
            <div class="flex flex-col space-y-1">
              <div class="flex items-center justify-between">
                  <label for="password_again" class="text-sm font-semibold text-gray-500">Password Again</label>
              </div>
              <input
                type="password"
                id="password_again"
                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-gray-200"
              />
            </div>
            <div>
              <button
                type="submit"
                class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-gray-500 rounded-md shadow hover:bg-gray-600 focus:outline-none focus:ring-gray-200 focus:ring-4"
              >
                Register
              </button>
            </div>
            <div class="flex flex-col space-y-5">
              <span class="flex items-center justify-center space-x-2">
                <span class="h-px bg-gray-400 w-14"></span>
                <span class="font-normal text-gray-500">It is Completely free. And will be free.</span>
                <span class="h-px bg-gray-400 w-14"></span>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
  .auth__screen{
    min-height: calc(100vh - 88px);
  }
</style>