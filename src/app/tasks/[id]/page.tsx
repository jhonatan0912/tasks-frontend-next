import BackButton from '@/app/components/buttons/BackButton';
import { TasksProxy } from '@/app/proxies/tasks.proxies';

export async function generateMetadata({ params: { id } }: { params: { id: string; }; }) {
  const tasksProxy = new TasksProxy();
  const { data: task } = await tasksProxy.get(id);

  return {
    title: `Task ${id}`,
    description: task.title,
  };
}

const TaskPage = async ({ params }: any) => {
  const { id } = params;
  const tasksProxy = new TasksProxy();

  const { data: task } = await tasksProxy.get(id);

  return (
    <main className='flex flex-col gap-10'>
      <BackButton />

      <span>{task.title}</span>
      <span>{task.done ? '✅' : '❌'}</span>
    </main>

  );
};

export default TaskPage;