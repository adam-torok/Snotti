<template>
   <div>
      <ckeditor
         :editor="form.editor"
         v-model="form.note"
         :config="form.editorConfig">
      </ckeditor>
      <button @click.prevent="saveNote">Save</button>
   </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
   props:['note', 'folderId', 'noteId'],
   data() {
      return {
         form:{
            folder_id : this.folderId,
            note_id : this.noteId,
            title : 'just a title',
            note: this.note,
            editor: ClassicEditor,
            editorConfig: {
               // The configuration of the editor.
            },
         },
      };
   },
   methods:{
      saveNote(){
         this.$emit('saveNote', this.form)
      }
   },
};
</script>
