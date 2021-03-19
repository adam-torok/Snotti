<template>
  <div class="flex flex-col bg-gray-200">
    <div class="notes">
      <div class="notes__header">
        <h1>Folders</h1>
      </div>
      <div class="notes__search">
        <input placeholder="Search" type="text" name="search" id="search">
      </div>
      <div class="notes__header-sub">
        <h1>Folders</h1>
      </div>
      <div v-if="folders.length > 0" class="notes__projects">
        <router-link 
          v-for="folder in folders" 
          :key="folder.id" 
          :to="{ name: 'folders', params: { id: folder.id  }}"
          class="single">
          <i class="icon fa-lg far fa-folder"></i>
          <h4>{{folder.name}}</h4>
          <h5 @click.prevent="deleteFolder(folder.id)" class="num"><i class="fas fa-minus-circle"></i></h5>
        </router-link>
      </div>
      <div v-else class="flex m-auto justify-center items-center flex-col">
          <h4 class="text-center">It looks empty...</h4>
      </div>
      <router-link to="/folder/create">
        <i class="text-center icon text-6xl fas fa-folder-plus"></i>
      </router-link>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="fill-current bg-gray-200 text-white  md:block"><path fill-opacity="1" d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    <div class="notes__footer">
      <router-link to="/folder/create"><i class="icon fa-lg fas fa-folder-plus"></i></router-link>
      <router-link to="/note/create"><i class="icon fa-lg far fa-edit"></i></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      folders : []
    }
  },
  methods:{
    deleteFolder(id){
      alert('deleting ' + id + ' folder');
      console.log('deleting this folder');
      // api call
      // do it in store
    }
  },
  mounted(){
    axios.get('api/folders',{
      headers: {
        Authorization: 'Bearer ' + this.$store.state.user.currentUser.token //the token is a variable which holds the token
      }
    }).then((res) =>{
      this.folders = res.data; // Add it to the store
    })
  }
}
</script>

<style lang="scss">

  .notes{
    margin: 0px 300px;
  }

  .notes__{

    &header{
      color: #111827;
      font-weight: 700;
      font-size: 1.5em;
      margin-top: 2em;
      margin-bottom: 0.5em;
      line-height: 1.3333333;
    }

    &header-sub{
      color: #111827;
      font-weight: 700;
      font-size: 1.2em;
      margin-top: 1em;
      margin-bottom: 0.5em;
      line-height: 1.3333333;
      margin-left: 0.5em;
    }

    &search>input{
      width:100%;
      padding: 5px;
      background: white;
      border-radius: 10px;
      outline: none!important;
    }

    &search>input::placeholder{

    }

    &projects{
      background: white;
      border-radius: 10px;
      
      & .single{
        display: grid;
        grid-template-columns: 8% 80% 12%;
        align-items: center;
        padding: 8px;

        & .num{
          color: rgb(167, 167, 167);
          text-align: right;
        }
      }

      & .single:not(:last-child){
        border-bottom: 1px solid #e5e5e5;
      }
    }

    &footer{
        border-top: 1px solid #cacaca;
        height: 45px;
        position: absolute;
        padding: 0px 15px;
        justify-content: space-between;
        align-content: center;
        display: flex;
        background: #F9F8FB;
        bottom: 0;
        width: 100%;
        & a{
          display: flex;
          justify-content: center;
          align-items: center;
        }
    }
  }
  .icon{
    color: gray;
  }
 
</style>