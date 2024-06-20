"use server";

import { cookies } from 'next/headers';
import { HttpMethods } from './http-methods';

export const httpServer = async (url: string, method: HttpMethods, body?: Object) => {
  const response = await fetch(url, {
    method: method,
    body: method !== 'GET' && body ? JSON.stringify(body) : undefined,
    headers: {
      'Content-Type': 'application/json',
      'Cookie': cookies().toString()
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