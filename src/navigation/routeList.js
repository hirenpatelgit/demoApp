import Dashboard from '../controller/dashboard/dashboard';
import Login from '../controller/login/login';
import Register from '../controller/register/register';

import { SCREEN_LOGIN, SCREEN_DASHBOARD, SCREEN_REGISTER } from './screenName';

const RouteList = [
    {
        title: 'Home',
        isShowHeader: false,
        component: Dashboard,
        name: SCREEN_DASHBOARD
    },
    {
        title: 'Login',
        isShowHeader: true,
        component: Login,
        name: SCREEN_LOGIN
    },
    {
        title: 'Register',
        isShowHeader: true,
        component: Register,
        name: SCREEN_REGISTER
    }
]

export {
    RouteList
}
