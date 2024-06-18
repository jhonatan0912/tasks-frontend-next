export enum HttpMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export const http = async (url: string, method: HttpMethods, body?: Object, cookies?: string) => {
  const response = await fetch(url, {
    method: method,
    body: method !== 'GET' && body ? JSON.stringify(body) : undefined,
    headers: {
      'Content-Type': 'application/json',
      'Cookie': cookies || ''
    },
    credentials: 'include'
  });

  return response.json();
};

export const getAuthCookies = (parsed: Map<string, { name: string, value: string; }>): string => {
  const stringify = Array.from(parsed)
    .map(([key, obj]) => `${key}=${obj.value}`)
    .join(';');
  return stringify;
};