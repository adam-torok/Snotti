<template>
  <div class="text-center text-white px-6 py-2 border-0 rounded relative mt-4 bg-gray-500">
  <span class="text-sm inline-block mr-5 align-middle">
    <i class="fas fa-bell" />
  </span>
  <span class="inline-block text-sm align-middle mr-8">
    <b class="capitalize">{{alert}}</b>
  </span>
</div>
</template>

<script>
export default {
   props:['alert']
}
</script>

<style>

</style>