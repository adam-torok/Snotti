<template>
  <div>
      <Editor 
      v-if="this.note"
      :folderId='folderId'
      :noteId='noteId'
      @saveNote='onSaveNote' 
      :note="note"/>
  </div>
</template>

<script>
import Editor from '../../components/Editor'
export default {
  components:{
    Editor
  },
  data(){
    return{
      note : '',
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
      })
  }
}
</script>