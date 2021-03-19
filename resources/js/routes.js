import Home from './pages/common/Home.vue'
import About from './pages/common/About.vue'
import Details from './pages/common/Details.vue'
import Login from './pages/auth/Login.vue'
import Register from './pages/auth/Register.vue'
import Folders from './pages/notes/Folders.vue'
import CreateFolder from './pages/notes/Create.vue'
import Notes from './pages/notes/Index.vue'
import Note from './pages/notes/show.vue'
import EditNote from './pages/notes/edit.vue'
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
        path: '/folders/:id',
        name: 'folders',
        component: Notes,
        props: true,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/note/:id',
        name: 'note',
        component: Note,
        props: true,
        meta: {
            requiresAuth: true,
        }
    },

    {
        path: '/note/create',
        component: CreateNote,
        meta: {
            requiresAuth: true,
        }
    },

    {
        path: '/note/:id/edit',
        component: EditNote,
        meta: {
            requiresAuth: false,
        }
    },
]
