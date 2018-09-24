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
        authority: 'company',
    },
    {
        name: 'Servicios',
        icon: 'cluster',
        path: 'services',
        authority: ['admin','municipality'],
    },
    {
        name: 'Empresas',
        icon: 'bank',
        path: 'companies',
        authority: ['admin','municipality'],
    },
    {
        name: 'Vehiculos',
        icon: 'car',
        path: 'vehicles',
    },
    {
        name: 'Mobil',
        icon: 'mobile',
        path: 'mobiles',
        authority: 'company',
    },
    {
        name: 'Monitoreo',
        icon: 'google',
        path: 'monitoring',
    },
    {
        name: 'Config',
        icon: 'setting',
        path: 'settings',
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
