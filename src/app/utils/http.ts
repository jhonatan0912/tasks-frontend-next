import { cookies } from 'next/headers';

export enum HttpMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export const http = async (url: string, method: HttpMethods, body?: Object, cookies?: string) => {
  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Cookie': setCookies()
    },
    credentials: 'include',
    body: method !== HttpMethods.GET && body ? JSON.stringify(body) : undefined,
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};


const setCookies = (): string => {
  const authToken = cookies().get('auth_token');
  const refreshToken = cookies().get('refresh_token');
  const authCookies = `auth_token=${authToken && authToken.value};refresh_token=${refreshToken && refreshToken.value}`;

  return authToken && refreshToken ? authCookies : '';
};