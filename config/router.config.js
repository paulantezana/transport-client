export default [
    // user
    {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
            { path: '/user', redirect: '/user/login' },
            { path: '/user/login', component: './User/Login' },
            { path: '/user/forgot', component: './User/Forgot' },
            { component: '404' },
        ],
    },
    // exception
    {
        path: '/exception',
        component: '../layouts/UserLayout',
        routes: [
            // exception
            {
                path: '/exception/403',
                component: './Exception/403',
            },
            {
                path: '/exception/404',
                component: './Exception/404',
            },
            {
                path: '/exception/500',
                component: './Exception/500',
            },
            { component: '404' },
        ],
    },
    // app
    {
        path: '/',
        component: '../layouts/BasicLayout',
        Routes: ['src/pages/Authorized'],
        authority: ['admin', 'user'],
        routes: [
            // dashboard
            { path: '/', redirect: '/dashboard' },
            {
                path: '/dashboard',
                name: 'dashboard',
                icon: 'dashboard',
                component: './Dashboard',
            },
            {
                path: '/services',
                name: 'service',
                icon: 'cluster',
                component: './Category',
            },
            {
                path: '/companies',
                name: 'company',
                icon: 'bank',
                component: './Company',
            },
            {
                path: '/companies/detail/:id',
                name: 'companyDetail',
                hideInMenu: true,
                component: './CompanyDetail',
            },
            {
                path: '/vehicles',
                name: 'vehicle',
                icon: 'car',
                component: './Vehicle',
            },
            {
                path: '/mobiles',
                name: 'mobile',
                icon: 'mobile',
                component: './Mobile',
            },
            {
                path: '/account',
                name: 'account',
                icon: 'user',
                routes: [
                    {
                        path: '/account/users',
                        name: 'users',
                        component: './User/Users',
                        authority: ['admin'],
                    },
                    {
                        path: '/account/profile',
                        name: 'profile',
                        component: './User/Profile',
                    },
                ],
            },
            {
                path: '/settings',
                name: 'setting',
                icon: 'setting',
                component: './Setting',
            },
            {
                component: '404',
            },
        ],
    },
];
