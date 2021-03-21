<template>
  <div>
      <Loader v-if="loading"/>
      <Editor 
      v-if="this.note"
      :folderId='folderId'
      :noteId='noteId'
      @saveNote='onSaveNote' 
      :title="title"
      :note="note"/>
  </div>
</template>

<script>
import Editor from '../../components/Editor'
import Loader from '../../components/Loader'
export default {
  components:{
    Editor,
    Loader
  },
  data(){
    return{
      note : '',
      title: '',
      loading : true,
      folderId : this.$route.params.folderId,
      noteId : this.$route.params.noteId,
    }
  },
  methods:{
    onSaveNote(form){
        axios.post('../../../api/note/update', form).then((res) => {
          this.$router.go(-1);
        })
      }
  },
  beforeMount(){
     axios.get('../../../api/note/'+this.noteId).then((res) => {
        this.note = res.data.note;
        this.title = res.data.title;
        this.loading = false
      })
  }
}
</script>