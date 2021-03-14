import Main from './Main'
import Login from './pages/auth/Login.vue'
import Register from './pages/auth/Register.vue'
import Notes from './pages/notes/Index.vue'
import Note from './pages/notes/show.vue'
import EditNote from './pages/notes/edit.vue'
import CreateNote from './pages/notes/Create.vue'

export const routes = [
   {path : '/', component : Main},
   {path : '/login', component : Login},
   {path : '/register', component : Register},
   {path : '/notes', component : Notes},
   {path : '/note/create', component : CreateNote},
   {path : '/note/:id', component : Note},
   {path : '/note/:id/edit', component : EditNote},
]