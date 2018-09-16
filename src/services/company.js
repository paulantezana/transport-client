import request from '../utilities/request';

const COMPANY_API = '/company';

// Update company
export async function companyResetPassword(body) { 
    return request(`${COMPANY_API}/reset/password`,{
        method: 'POST',
        body
    })
}

// Get all companys
export async function companyAll(body) { 
    return request(`${COMPANY_API}/all`,{
        method: 'POST',
        body
    })
}

// Get ByID company
export async function companyById(body) { 
    return request(`${COMPANY_API}/by/id`,{
        method: 'POST',
        body
    })
}

// Create company
export async function companyCreate(body) { 
    return request(`${COMPANY_API}/create`,{
        method: 'POST',
        body
    })
}

// Update company
export async function companyUpdate(body) { 
    return request(`${COMPANY_API}/update`,{
        method: 'PUT',
        body
    })
}

// Delete company
export async function companyDelete(body) { 
    return request(`${COMPANY_API}/delete`,{
        method: 'DELETE',
        body
    })
}
