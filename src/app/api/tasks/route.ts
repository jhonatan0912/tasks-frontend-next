import { TasksProxy } from '@/app/proxies/tasks.proxies';
import { getAuthCookies } from '@/app/utils';
import { NextResponse } from "next/server";

const tasksProxy = new TasksProxy();

export const GET = async (req: Request, res: Response) => {
  const parsed = (req as any).cookies._parsed;
  const cookies = getAuthCookies(parsed);

  const response = await tasksProxy.getAll(1, 20, cookies);

  return NextResponse.json(response);
};