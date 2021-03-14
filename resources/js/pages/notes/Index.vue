<template>
  <div>
    <div class="flex justify-end">
      <router-link to="/notes">Edit</router-link>
    </div>
    <div class="notes">
      <div class="notes__header">
        <h1>Folders</h1>
      </div>
      <div class="notes__search">
        <input placeholder="Search" type="text" name="search" id="search">
      </div>
      <div class="notes__projects">
        <div class="single">
          <i class="far fa-folder"></i>
          <h4>All Notes</h4>
          <h5>2</h5>
        </div>
        <div class="single">
          <i class="far fa-folder"></i>
          <h4>All Notes</h4>
          <h5>2</h5>
        </div>
        <div class="single">
          <i class="far fa-folder"></i>
          <h4>All Notes</h4>
          <h5>2</h5>
        </div>
      </div>
      <div class="notes__footer">
        <router-link to="/note/create"><i class="fas fa-folder-plus"></i></router-link>
        <router-link to="/note/create"><i class="fas fa-plus"></i></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .notes__{

   &header{
     
    }
  }
 
</style>