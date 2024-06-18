import { TasksProxy } from '@/app/proxies/tasks.proxies';

const TaskPage = async ({ params }: any) => {
  const { id } = params;
  const tasksProxy = new TasksProxy();

  const { data: task } = await tasksProxy.get(id);

  return (
    <div>
      <span>{task.title}</span>
      <span>{task.done ? '✅' : '❌'}</span>
    </div>

  );
};

export default TaskPage;