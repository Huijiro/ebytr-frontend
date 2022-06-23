import { useEffect, useState } from 'react';
import Task from '../../../interfaces/task.interface';
import Text from '../../Text';
import RandomTasks from './mock';
import CSS from './tasksList.module.css';

function TasksList() {
  const [tasks, setTasks] = useState<Task[]>(RandomTasks);

  useEffect(() => {
    setTasks([]);
  }, []);

  return (
    <div className={CSS.container}>
      {tasks.length === 0 ? (
        <Text type="h3">No tasks, feel free to add one.</Text>
      ) : (
        <h1>Tasks</h1>
      )}
    </div>
  );
}

export default TasksList;
