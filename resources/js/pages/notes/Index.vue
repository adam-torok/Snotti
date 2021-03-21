<template>
  <div class="flex flex-col bg-gray-200">
    <Loader v-if="loading"/>
    <div class="flex justify-between p-4">
      <router-link class="icon flex justify-center items-center" to="/folders"><i class="icon fa-lg fas fa-chevron-left mr-1"></i> Back</router-link>
      <router-link class="icon" to="/notes"><i class="icon fa-lg fas fa-ellipsis-h"></i></router-link>
    </div>
    <div class="notes">
      <div class="notes__header">
        <h1>Notes</h1>
      </div>
      <div class="notes__search">
        <input placeholder="Search" type="text" name="search" id="search">
      </div>
      <div class="mt-4 notes__projects">
      <transition-group name="list" tag="div">
        <div class="grid note__container" v-for="note in notes" :key="note.id" >
            <router-link :to="{ name: 'showNote', params: { folderId: $route.params.folderId, noteId: note.id  }}">
              <div class="single flex flex-col">
                <h4><strong>{{note.title.substring(0,15)+"..." }}</strong></h4>
                <i><div class="flex" v-html="note.note.substring(0,15)+'<span>...</span>'"></div></i>
              </div>
            </router-link>
        <button v-if="note.id !== undefined" @click="deleteNote(note.id)" :title="note.id" class="num">
          <i class="fas text-2xl fa-minus-circle"></i>
        </button>
        </div>
      </transition-group>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="fill-current bg-gray-200 text-white  md:block"><path fill-opacity="1" d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    <div class="notes__footer">
      <span><small>{{notes.length}} Notes</small></span>
      <router-link  
      :to="{ name: 'createNote', params: { folderId: this.$route.params.folderId  }}">
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
      notes : [],
      loading : true,
    }
  },
  methods:{
    decodeHTML(html) {
      var txt = document.createElement("textarea");
      txt.innerHTML = html;
      console.log(txt.value);
      return txt.value;
    },
    deleteNote(id){
      axios.delete('../api/note/'+id,{
        header:{
          Authorization : 'Bearer' + this.$store.state.user.currentUser.token,
          'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        },
        data:{
          id: id,
          _method: 'DELETE'
        }
      }).then(() =>{
        let i = this.notes.map(item => item.id).indexOf(id);
        this.notes.splice(i, 1);
      })
    }
  },
  mounted(){
    axios.get('../api/folders/'+this.$route.params.folderId,{
      headers: {
        Authorization: 'Bearer ' + this.$store.state.user.currentUser.token //the token is a variable which holds the token
      }
    }).then((res) =>{
      this.notes = res.data;
      this.loading = false;
    })
  }
}
</script>

<style lang="scss" scoped>

  .note__container{
    padding: 10px;
    grid-template-columns: 95% 5%;
  }

  .num{
    outline: none!important;
     color: rgb(167, 167, 167);
    text-align: right;
  }

  .notes__{
    &header-sub{
      color: #111827;
      font-weight: 700;
      font-size: 1.2em;
      margin-top: 1em;
      margin-bottom: 0.5em;
      line-height: 1.3333333;
      margin-left: 0.5em;
    }

    &projects{
      background: white;
      padding: 0px 0;
      border-radius: 10px;

      & .single{
        display: flex;
        align-items: center;
        padding: 8px;

        & .num{
          color: rgb(167, 167, 167);
          text-align: right;
        }

        & a>h5{
          color: rgb(167, 167, 167);
        }
      }
    }

    &footer{
      border-top: 1px solid #cacaca;
      height: 45px;
      position: absolute;
      padding: 0px 15px;
      align-content: center;
      justify-content: center;
      display: grid;
      grid-template-columns: 95% 5%;
      background: #F9F8FB;
      bottom: 0;
      width: 100%;
        & a,span{
          display: flex;
          align-items: center;
          justify-content: center;
        }
    }
  }
 
</style>