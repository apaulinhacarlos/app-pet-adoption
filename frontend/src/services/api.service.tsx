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
    const result = await api.post('/api/login', {
      email,
      password
    })
    
    const token = result.data;
    
    return { status: 'SUCCESS', message: token }
  } catch (err) {
    if(isAxiosError(err)) {
      return {
        status: 'UNAUTHORIZED',
        message: err.response
      }
    }
    return { status: 'INTERNAL_SERVER_ERROR', message: "Erro desconhecido" }
  }
}

export default api;
