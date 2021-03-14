<template>
  <div>
        <editor-menu-bar :editor="editor">
          <div slot-scope="{ commands, isActive }" class="menubar">
            <button
              :class="{ 'is-active': isActive.bold() }"
              @click="commands.bold"
              type="button"
            >
              <strong>B</strong>
            </button>

            <button
              :class="{ 'is-active': isActive.code() }"
              @click="commands.code"
              type="button"
            >
              <em>Code</em>
            </button>

               <button
              :class="{ 'is-active': isActive.italic() }"
              @click="commands.italic"
              type="button"
            >
              <em>I</em>
            </button>
          </div>
        </editor-menu-bar>
        <editor-content :editor="editor" />
      </div>
</template>

<script>
import {
  Editor, // wrapper for prosemirror state
  EditorContent, // renderless content element
  EditorMenuBar, // renderless menubar
} from "tiptap";

import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
} from "tiptap-extensions";

export default {
  components: {
    EditorMenuBar,
    EditorContent
  },
  data() {
    return {
      editor: null
    };
  },
  mounted() {
    this.editor = new Editor({
      extensions: [     new Blockquote(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new BulletList(),
          new OrderedList(),
          new ListItem(),
          new TodoItem(),
          new TodoList(),
          new Bold(),
          new Code(),
          new Italic(),
          new Link(),
          new Strike(),
          new Underline()],
      content: "<p>This is just a boring paragraph</p>"
    });
  },
  computed: {
    json() {
      if (!this.editor) return {};
      return this.editor.getJSON();
    },

    html() {
      if (!this.editor) return "";
      return this.editor.getHTML();
    }
  },
  beforeDestroy() {
    if (this.editor) {
      this.editor.destroy();
    }
  }
};
</script>

<style>
.menubar {
  border-bottom: 1px solid #ccc;
  text-align: center;
}

.menubar > button[type="button"] {
  border: 0;
  outline: 0;
  margin-right: 0.5em;
  font-size: large;
  margin-bottom: 6px;
  margin-top: 3px;
}

.menubar > button[type="button"]:hover {
  background: #ccc;
  cursor: pointer;
}

.menubar > button[type="button"].is-active {
  border: 1px inset #ccc;
  border-bottom: 0;
  margin-bottom: 2px;
  margin-right: calc(0.5em - 2px);
}
</style>
