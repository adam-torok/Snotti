<template>
  <div class="flex flex-col bg-gray-200">
    <Loader v-if="loading"/>
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
        <transition-group name="list" tag="div">
          <div class="single" v-for="folder in folders" :key="folder.id" >
            <router-link
              class="flex gap-5 items-center"
              v-if="folders"  
              :to="{ name: 'folders', params: { folderId: folder.id }}">
              <i class="icon fa-lg far fa-folder"></i>
              <h4 class="text-gray-600"><strong>{{folder.name}}</strong></h4>
            </router-link>
            <button 
                data-tippy-content="Delete this folder" 
                v-if="folder.id !== undefined"
                @click="deleteFolder(folder.id)" class="num">
              <i class="fas text-2xl fa-minus-circle"></i>
            </button>
          </div>
        </transition-group>
      </div>
      
      <div v-else class="flex m-auto justify-center items-center flex-col">
        <h4 class="text-center"><b>It looks empty...</b></h4>
      </div>
      
      <router-link class="flex m-auto justify-center items-center flex-col mt-6" to="/folder/create">
        <h2 data-tippy-content="Click here, to create a new note!">Create new note!</h2>
      </router-link>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="fill-current bg-gray-200 text-white  md:block"><path fill-opacity="1" d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    <div class="notes__footer">
      <router-link 
      data-tippy-content="Click here, to create a new Folder!" to="folder/create">
      <i class="icon fa-lg far fa-edit"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import Loader from '../../components/Loader'
export default {
  components:{
    Loader
  },  
  data(){
    return{
      folders : [],
      loading : true,
    }
  },
  methods:{
    deleteFolder(id){
      axios.delete('api/folders/'+id,{
        headers: { 
          Authorization: 'Bearer ' + this.$store.state.user.currentUser.token,
          'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        },
        data: {
          _method: "DELETE",
          id: id
        }
      })
      .then(() =>{
        let i = this.folders.map(item => item.id).indexOf(id);
        this.folders.splice(i, 1);
      })
    }
  },
  beforeCreate(){
    axios.get('api/folders',{
      headers: {
        Authorization: 'Bearer ' + this.$store.state.user.currentUser.token //the token is a variable which holds the token
      }
    }).then((res) =>{
      this.folders = res.data; // Add it to the store
      this.loading = false;
    })
  }
}
</script>

<style lang="scss">

.list-enter-active, .list-leave-active {
  transition: all 0.3s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(10px);
}

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

    &projects{
      background: white;
      border-radius: 10px;
      
    & .single{
      display: grid;
      grid-template-columns: 80% 15%;
      gap: 15px;
      justify-content: space-between;
      align-items: center;
      padding: 8px;
        & .num{
          outline: none!important;
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