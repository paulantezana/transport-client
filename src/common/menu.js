import { isUrl } from '../utilities/utils';

const menuData = [
    {
        name: 'Escritorio',
        icon: 'dashboard',
        path: '',
    },
    {
        name: 'Empresas',
        icon: 'flag',
        path: 'companies',
    },
    {
        name: 'Alumnos',
        icon: 'contacts',
        path: 'students',
    },
    {
        name: 'Profesores',
        icon: 'user',
        path: 'teachers',
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
                authority: 'sa',
            },
            {
                name: 'Modulos',
                icon: 'folder',
                path: 'modules',
            },
            {
                name: 'Programas',
                icon: 'audit',
                path: 'programs',
                authority: 'sa',
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
