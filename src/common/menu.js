import { isUrl } from '../utilities/utils';

const menuData = [
    {
        name: 'Escritorio',
        icon: 'dashboard',
        path: '',
    },
    {
        name: 'Picadas',
        icon: 'compass',
        path: 'chopped',
    },
    {
        name: 'Vehículos',
        icon: 'car',
        path: 'vehicles',
    },
    {
        name: 'Monitoreo',
        icon: 'google',
        path: 'monitoring',
    },
    {
        name: 'Config',
        icon: 'setting',
        path: 'setting',
        children: [
            {
                name: 'General',
                icon: 'tool',
                path: 'general',
            },
            {
                name: 'Perfil',
                icon: 'user',
                path: 'profile',
            }
        ],
    },
];

function formatter(data, parentPath = '/', parentAuthority) {
    return data.map(item => {
        let { path } = item;
        if (!isUrl(path)) {
            path = parentPath + item.path;
        }
        const result = {
            ...item,
            path,
            authority: item.authority || parentAuthority,
        };
        if (item.children) {
            result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
        }
        return result;
    });
}

export const getMenuData = () => formatter(menuData);
