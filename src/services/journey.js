import request from '@/utils/request';

const JOURNEY_API = '/journey';

// Get all journeys
export async function journeyAllByCompanyID(body) {
    return request(`${JOURNEY_API}/all/by/company/id`, {
        method: 'POST',
        body,
    });
}

// Get ByID journey
export async function journeyById(body) {
    return request(`${JOURNEY_API}/by/id`, {
        method: 'POST',
        body,
    });
}

// Create journey
export async function journeyCreate(body) {
    return request(`${JOURNEY_API}/create`, {
        method: 'POST',
        body,
    });
}

// Update journey
export async function journeyUpdate(body) {
    return request(`${JOURNEY_API}/update`, {
        method: 'PUT',
        body,
    });
}

// Delete journey
export async function journeyDelete(body) {
    return request(`${JOURNEY_API}/delete`, {
        method: 'DELETE',
        body,
    });
}

// Upload
export async function journeyDetailUploadTemplate(body) {
    return request(`${PROVIDER_API}/upload/template`, {
        method: 'POST',
        body,
    });
}
