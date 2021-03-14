import Home from './pages/common/Home.vue'
import About from './pages/common/About.vue'
import Details from './pages/common/Details.vue'

import Login from './pages/auth/Login.vue'
import Register from './pages/auth/Register.vue'
import Folders from './pages/notes/Folders.vue'
import Notes from './pages/notes/Index.vue'
import Note from './pages/notes/show.vue'
import EditNote from './pages/notes/edit.vue'
import CreateNote from './pages/notes/Create.vue'

export const routes = [
   {path : '/', component : Home},
   {path : '/about', component : About},
   {path : '/details', component : Details},
   {path : '/login', component : Login},
   {path : '/register', component : Register},
   {path : '/folders', component : Folders},
   {path : '/notes', component : Notes},
   {path : '/note/create', component : CreateNote},
   {path : '/note/:id', component : Note},
   {path : '/note/:id/edit', component : EditNote},
]