import axios, { isAxiosError } from 'axios';

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

export const login = async (email: string, password: string) => {
  try {
    await api.post('/api/login', {
      email,
      password
    })

    return { status: 'OK' }
  } catch (err) {
    if(isAxiosError(err) && err.status === 401) {
      return { status: 'UNAUTHORIZED', message: err.message }
    }
    return { status: 'UNAUTHORIZED', message: "Erro desconhecido" }
  }
}

export default api;
