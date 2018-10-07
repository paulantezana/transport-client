import request from '@/utils/request';

const VEHICLE_API = '/vehicle';

// Get all vehicles
export async function vehiclePaginateByCompanyID(body) {
    return request(`${VEHICLE_API}/paginate/by/company/id`, {
        method: 'POST',
        body,
    });
}

// Get ByID vehicle
export async function vehicleById(body) {
    return request(`${VEHICLE_API}/by/id`, {
        method: 'POST',
        body,
    });
}

// Create vehicle
export async function vehicleCreate(body) {
    return request(`${VEHICLE_API}/create`, {
        method: 'POST',
        body,
    });
}

// Update vehicle
export async function vehicleUpdate(body) {
    return request(`${VEHICLE_API}/update`, {
        method: 'PUT',
        body,
    });
}

// Delete vehicle
export async function vehicleDelete(body) {
    return request(`${VEHICLE_API}/delete`, {
        method: 'DELETE',
        body,
    });
}
