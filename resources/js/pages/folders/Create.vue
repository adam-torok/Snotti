<template>
  <div class="create">
    <div class="create__header">
        <h1 class="font-bold text-center text-gray-800 text-xl sm:text-2xl md:text-3xl leading-tight mb-6">New Folder</h1>
        <strong>Folders will contain your notes...</strong>
    </div>
    <div class="create__body m-2">
      <form @submit.prevent="createFolder">
        <input class="p-2" v-model="form.name" placeholder="Folder's name" type="text" name="name" id="name">
        <button class="mt-2 w-full px-4 py-2 text-lg font-semibold text-black transition-colors duration-300" type="submit">Create folder</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      form:{
        user_id : this.$store.state.user.currentUser.id,
        name : ''
      }
    }
  },
  methods:{
    createFolder(){
      axios.post('../api/folders/create',
      this.form,
      {
        headers: {
          Authorization: 'Bearer ' + this.$store.state.user.currentUser.token //the token is a variable which holds the token
        }
      }
     ).then((res) => {
        this.$router.push('/folders');
      })
    }
  }
}
</script>

<style>
.create{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 8px;
  flex-direction: column;
}
.create__header{
  text-align: center;
}
.create__body>form{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>