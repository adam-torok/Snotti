import Home from './pages/common/Home.vue'
import About from './pages/common/About.vue'
import Details from './pages/common/Details.vue'
import Login from './pages/auth/Login.vue'
import Register from './pages/auth/Register.vue'

import Folders from './pages/folders/Folders.vue'
import CreateFolder from './pages/folders/Create.vue'

import Notes from './pages/notes/Index.vue'
import Note from './pages/notes/Show.vue'

import CreateNote from './pages/notes/Create.vue'


export const routes = [{
        path: '/',
        component: Home,
        meta: {
            requiresAuth: false,
        }
    },
    {
        path: '/about',
        component: About,
        meta: {
            requiresAuth: false,
        }
    },
    {
        path: '/details',
        component: Details,
        meta: {
            requiresAuth: false,
        }
    },
    {
        path: '/login',
        component: Login,
        meta: {
            requiresAuth: false,
        }
    },
    {
        path: '/register',
        component: Register,
        meta: {
            requiresAuth: false,
        }
    },
    {
        path: '/folders',
        component: Folders,
        meta: {
            requiresAuth: true,
        }
    },

    {
        path: '/folder/create',
        component: CreateFolder,
        meta: {
            requiresAuth: true,
        }
    },

    {
        path: '/folders/:folderId',
        name: 'folders',
        component: Notes,
        props: true,
        meta: {
            requiresAuth: true,
        }
    },

    {
        path: '/folders/:folderId/note/:noteId',
        name: 'showNote',
        component: Note,
        props: true,
        meta: {
            requiresAuth: true,
        }
    },

    {
        path: '/folders/:folderId/note/create',
        name: 'createNote',
        component: CreateNote,
        props: true,
        meta: {
            requiresAuth: true,
        }
    },

]
