import { cookies } from 'next/headers';
import Tasks from '../components/Tasks';
import { TasksProxy } from '../proxies/tasks.proxies';

const getTasks = async () => {
  const tasksProxy = new TasksProxy();
  const authCookies = `auth_token=${cookies().get('auth_token')?.value};refresh_token=${cookies().get('refresh_token')?.value}`;

  return await tasksProxy.getAll(1, 20, authCookies);
};

const TasksPage = async () => {
  const { data } = await getTasks();

  return (
    <section className='grid grid-cols-5 gap-4 p-4 max-w-[1200px] mx-auto'>{
      data.map((task: any) => (
        <Tasks key={task.id} task={task} />
      ))
    }</section>
  );
};

export default TasksPage;