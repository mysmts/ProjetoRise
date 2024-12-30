import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";

// Criação da instância Axios
const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:5000", // Substitua pela URL do backend
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // Tempo limite para requisições (10 segundos)
});

// Interceptor para requisições
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Adicionar cabeçalhos ou tokens, se necessário
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Tratamento de erros antes da requisição ser enviada
    console.error("Erro na requisição:", error);
    return Promise.reject(error);
  }
);

// Interceptor para respostas
api.interceptors.response.use(
  (response: AxiosResponse) => {
    // Manipular respostas bem-sucedidas
    return response;
  },
  (error) => {
    // Tratamento de erros de resposta
    if (error.response) {
      console.error("Erro na resposta da API:", error.response);
    } else {
      console.error("Erro inesperado:", error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
