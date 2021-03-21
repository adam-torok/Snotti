<template>
   <div>
      <input v-model="form.title" class="p-2 m-2" type="text" placeholder="Title of your note">
      <ckeditor
         :editor="form.editor"
         v-model="form.note"
         :config="form.editorConfig">
      </ckeditor>
      <div class="w-full flex">
         <button
         class="m-auto mt-5 px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-gray-700 rounded-md hover:bg-gray-900"
         @click.prevent="saveNote">Save
         </button>
      </div>
   </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
   props:['note', 'title', 'folderId', 'noteId'],
   data() {
      return {
         form:{
            folder_id : this.folderId,
            note_id : this.noteId,
            title : this.title,
            note: this.note,
            editor: ClassicEditor,
            editorConfig: {
               
            },
         },
      };
   },
   methods:{
      saveNote(){
         if(this.form.title == ''){
            alert('Please, give a title for the note.')
         }else{
            this.$emit('saveNote', this.form)
         }
      }
   },
};
</script>

<style scoped>
   .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{
      display: flex;
      justify-content: center!important;
      align-items: center!important;
   }
   .ck-editor__main>.ck-editor__editable:not(.ck-focused){
      border: none!important;
      outline: none!important;
   }
   .ck-editor__main{
      border: 0!important;
      outline: none!important;
   }
</style>
