import { AxiosInstance } from "axios";

export function addCSRFToken(axios: AxiosInstance) {
    axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
}