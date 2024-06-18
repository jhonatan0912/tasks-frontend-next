import { cookies } from 'next/headers';

export const getTasks = async (page: number, limit: number) => {
  let url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/tasks`;

  if (page) url += `?page=${page}`;
  if (limit) url += `&limit=${limit}`;

  const res = await fetch(url, {
    headers: {
      Cookie: cookies().toString()
    }
  });

  return await res.json();
};