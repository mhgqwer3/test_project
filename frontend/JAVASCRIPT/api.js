// ============================================
// api.js - Smart Bins API Service Layer
// ============================================

const API = (() => {
    // API Base URL - سيعمل على نفس الدومين
    const BASE_URL = '/backend';

    // ─────────────────────────────────────────
    // Helpers
    // ─────────────────────────────────────────

    async function request(url, options = {}) {
        try {
            const res = await fetch(url, {
                headers: { 'Content-Type': 'application/json', ...options.headers },
                ...options
            });
            const json = await res.json();
            return json;
        } catch (err) {
            console.error('[API Error]', url, err);
            return { status: 'error', message: 'Network error or server unreachable' };
        }
    }

    function get(endpoint) {
        return request(`${BASE_URL}${endpoint}`, { method: 'GET' });
    }

    function post(endpoint, body) {
        return request(`${BASE_URL}${endpoint}`, { method: 'POST', body: JSON.stringify(body) });
    }

    // ─────────────────────────────────────────
    // AUTH
    // ─────────────────────────────────────────
    async function login(email, password) {
        return post('/auth.php?action=login', { email, password });
    }

    // ─────────────────────────────────────────
    // BINS
    // ─────────────────────────────────────────
    async function getBins() {
        return get('/API.php?action=list');
    }

    async function getBinDetails(binId) {
        return get(`/API.php?action=bin_detail&bin_id=${binId}`);
    }

    // ─────────────────────────────────────────
    // CARTS
    // ─────────────────────────────────────────
    async function getCarts() {
        return get('/API.php?action=cart_list');
    }

    async function getCartDetails(cartId) {
        return get(`/API.php?action=cart_detail&cart_id=${cartId}`);
    }

    // ─────────────────────────────────────────
    // TRIPS
    // ─────────────────────────────────────────
    async function getTrips() {
        return get('/API.php?action=trip_list');
    }

    async function getTripDetails(tripId) {
        return get(`/API.php?action=trip_detail&trip_id=${tripId}`);
    }

    async function createTrip(data) {
        return post('/API.php?action=trip_create', data);
    }

    // ─────────────────────────────────────────
    // ALERTS
    // ─────────────────────────────────────────
    async function getAlerts() {
        return get('/API.php?action=alert_list');
    }

    // ─────────────────────────────────────────
    // USERS
    // ─────────────────────────────────────────
    async function getUsers() {
        return get('/API.php?action=user_list');
    }

    // Public API
    return {
        login,
        getBins,
        getBinDetails,
        getCarts,
        getCartDetails,
        getTrips,
        getTripDetails,
        createTrip,
        getAlerts,
        getUsers
    };
})();

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = API;
}
