<template>
  <div class="create">
    <div class="create__header">
        <h1>New Folder</h1>
        <small>Folders will contain your notes...</small>
    </div>
    <div class="create__body">
      <form @submit.prevent="createFolder">
        <input v-model="form.name" placeholder="Folder's name" type="text" name="name" id="name">
        <button type="submit">Create folder</button>
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

</style>