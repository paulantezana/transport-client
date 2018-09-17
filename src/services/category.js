import request from '../utilities/request';

const CATEGORY_API = '/category';

// Update category
export async function categoryResetPassword(body) { 
    return request(`${CATEGORY_API}/reset/password`,{
        method: 'POST',
        body
    })
}

// Get all categorys
export async function categoryPaginate(body) { 
    return request(`${CATEGORY_API}/paginate`,{
        method: 'POST',
        body
    })
}

// Get all categorys
export async function categoryAll(body) { 
    return request(`${CATEGORY_API}/all`,{
        method: 'POST',
        body
    })
}

// Get ByID category
export async function categoryById(body) { 
    return request(`${CATEGORY_API}/by/id`,{
        method: 'POST',
        body
    })
}

// Create category
export async function categoryCreate(body) { 
    return request(`${CATEGORY_API}/create`,{
        method: 'POST',
        body
    })
}

// Update category
export async function categoryUpdate(body) { 
    return request(`${CATEGORY_API}/update`,{
        method: 'PUT',
        body
    })
}

// Delete category
export async function categoryDelete(body) { 
    return request(`${CATEGORY_API}/delete`,{
        method: 'DELETE',
        body
    })
}
