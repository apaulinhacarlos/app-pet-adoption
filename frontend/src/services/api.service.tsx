import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // Isso garante que as credenciais são enviadas junto com a requisição
});

export const requestData = async (path: string) => {
  try {
    const result = await api.get(path);
    return result.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default api;
