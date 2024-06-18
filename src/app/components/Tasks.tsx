import React from 'react';
import { TaskDto } from '../proxies/tasks.proxies';

type Props = {
  task: TaskDto;
};

const Tasks = ({ task }: Props) => {
  return (
    <article className='border rounded-md p-2 flex flex-col shadow-lg cursor-pointer hover:scale-95 select-none'>
      <span className='text-sm overflow-hidden text-ellipsis break-words text-nowrap'>
        #{task.id}
      </span>
      <span>
        Title: {task.title}
      </span>
      <p>
        Description: {task.description}
      </p>
    </article>
  );
};

export default Tasks;