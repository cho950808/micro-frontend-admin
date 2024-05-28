import axios from "axios";
import { getItem } from "../../util/localStorageControl";

// const API_ENDPOINT = process.env.VUE_APP_API_ENDPOINT;

const authHeader = () => ({
  Authorization: `Bearer ${getItem("access_token")}`,
});

const client = axios.create({
  baseURL: "/",
  headers: {
    Authorization: `Bearer ${getItem("access_token")}`,
    "Content-Type": "application/json",
  },
});

class DataService {
  static get(path = "") {
    return client({
      method: "GET",
      url: path,
      headers: { ...authHeader() },
    });
  }

  static post(path = "", data = {}, optionalHeader = {}) {
    return client({
      method: "POST",
      url: path,
      data,
      headers: { ...authHeader(), ...optionalHeader },
    });
  }

  static patch(path = "", data = {}) {
    return client({
      method: "PATCH",
      url: path,
      data: JSON.stringify(data),
      headers: { ...authHeader() },
    });
  }

  static delete(path = "", data = {}) {
    return client({
      method: "DELETE",
      url: path,
      data: JSON.stringify(data),
      headers: { ...authHeader() },
    });
  }

  static put(path = "", data = {}) {
    return client({
      method: "PUT",
      url: path,
      data: JSON.stringify(data),
      headers: { ...authHeader() },
    });
  }
}

client.interceptors.request.use((config) => {
  const requestConfig = config;
  const { headers } = config;
  requestConfig.headers = { ...headers, Authorization: `Bearer ${getItem("access_token")}` };

  return requestConfig;
});

client.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    const originalRequest = error.config;
    if (response) {
      if (response.status === 500) {
        console.log(response.status);
      } else {
        return originalRequest;
      }
    }
    return Promise.reject(error);
  }
);
export { DataService };
