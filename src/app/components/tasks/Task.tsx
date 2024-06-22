'use client';

import { useRouter } from 'next/navigation';
import { TaskDto } from '../../proxies/tasks.proxies';

type Props = {
  task: TaskDto;
};

const Task = ({ task }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/tasks/${task.id}`);
  };

  return (
    <article onClick={handleClick} className={`border rounded-md p-2 flex flex-col shadow-lg cursor-pointer select-none ${task.done ? 'border-t-green-500' : 'border-t-red-500'} border-t-4 rounded-t-md hover:scale-95 transition-all duration-100`}>
      <span className='text-sm overflow-hidden text-ellipsis break-words text-nowrap'>
        #{task.id}
      </span>
      <span>
        Title: {task.title}
      </span>
      <p>
        Description: {task.description}
      </p>
      <span>
        Done: {task.done ? '✅' : '❌'}
      </span>
    </article>
  );
};

export default Task;