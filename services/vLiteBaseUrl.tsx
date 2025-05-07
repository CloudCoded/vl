import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const baseURL = process.env.NEXT_PUBLIC_FLITE_BASE_URL;

const vLiteApi = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const onRequest = async (request: InternalAxiosRequestConfig) => {
  return request;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
  if (typeof window === "undefined") {
    return Promise.reject(error);
  }

  return Promise.reject(error);
};

vLiteApi.interceptors.request.use(onRequest, onRequestError);
vLiteApi.interceptors.response.use(onResponse, onResponseError);

export default vLiteApi;
