import BackButton from '@/app/components/buttons/BackButton';
import { Switch } from '@/app/components/task/switch';
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
      <header className='flex justify-start'>
        <BackButton />
      </header>

      <section className='flex flex-col gap-2 p-4'>
        <span>Task: {task.title}</span>
        <span>Done? {task.done ? '✅' : '❌'}</span>
        <span>Change status: <Switch isChecked={task.done} /> </span>
      </section>
    </main>

  );
};

export default TaskPage;