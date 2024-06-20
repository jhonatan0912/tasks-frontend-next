import { HttpMethods } from './http-methods';

export const httpClient = async (url: string, method: HttpMethods, body?: Object) => {
  const response = await fetch(url, {
    method: method,
    body: method !== 'GET' && body ? JSON.stringify(body) : undefined,
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include'
  });

  return response.json();
};
