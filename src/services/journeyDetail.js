import request from '@/utils/request';

const JOURNEYDETAIL_API = '/journeyDetail';

// Get all journeyDetails
export async function journeyDetailAllByCompanyID(body) {
    return request(`${JOURNEYDETAIL_API}/all/by/company/id`, {
        method: 'POST',
        body,
    });
}

// Get ByID journeyDetail
export async function journeyDetailById(body) {
    return request(`${JOURNEYDETAIL_API}/by/id`, {
        method: 'POST',
        body,
    });
}

// Create journeyDetail
export async function journeyDetailCreate(body) {
    return request(`${JOURNEYDETAIL_API}/create`, {
        method: 'POST',
        body,
    });
}

// Update journeyDetail
export async function journeyDetailUpdate(body) {
    return request(`${JOURNEYDETAIL_API}/update`, {
        method: 'PUT',
        body,
    });
}

// Delete journeyDetail
export async function journeyDetailDelete(body) {
    return request(`${JOURNEYDETAIL_API}/delete`, {
        method: 'DELETE',
        body,
    });
}
