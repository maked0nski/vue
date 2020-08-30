import Home from './components/Home';
import Contacts from './components/Contacts';
import MyProjects from './components/MyProjects';



export const routes = [
    {
        path: '', component: Home, name: 'Home'
    },
    {
        path: '/contacts', component: Contacts, name: 'Contacts'
    },
    {
        path: '/projects', component: MyProjects, name: 'MyProjects'
    }

]