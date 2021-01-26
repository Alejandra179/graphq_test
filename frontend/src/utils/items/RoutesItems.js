import { Home, Demo } from './../../pages'

const RoutesItems = [
    {
        path: '/',
        name: 'Inicio',
        icon: 'explore',
        exact: true,
        component: Home
    },{
        path: '/demo',
        name: 'Demo',
        icon: 'folder',
        exact: true,
        component: Demo
    }
]

export default RoutesItems