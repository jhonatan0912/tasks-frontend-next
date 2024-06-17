import React from 'react';
import { TaskDto } from '../proxies/tasks.proxies';

type Props = {
  task: TaskDto;
};

const Tasks = ({ task }: Props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid #000' }}>
      <span>{task.id}</span>
      <span>{task.title}</span>
      <span>{task.description}</span>
    </div>
  );
};

export default Tasks;