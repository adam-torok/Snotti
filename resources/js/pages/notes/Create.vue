<template>
  <div>
      <Editor :folderId='folderId' @saveNote='onSaveNote' :text="text"/>
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
      text : '<h1>Create a new note!</h1>',
      folderId : this.$route.params.folderId,
    }
  },
  methods:{
    onSaveNote(form){
        axios.post('../../../api/note/create', form).then(() => {
          this.$router.go(-1);
        })
      }
  },
}
</script>