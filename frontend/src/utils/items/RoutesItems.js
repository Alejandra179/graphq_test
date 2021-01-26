import { Home,Login,Register} from './../../pages'

const RoutesItems = [
    {
        path: '/',
        name: 'Inicio',
        icon: 'explore',
        exact: true,
        component: Home
    },{
        path: '/login',
        name: 'Login',
        icon: 'folder',
        exact: true,
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        icon: 'folder',
        exact: true,
        component: Register
    },
]

export default RoutesItems