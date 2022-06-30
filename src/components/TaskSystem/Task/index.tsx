import { useContext } from 'react';
import TaskI from '../../../interfaces/task.interface';
import { ThemeContext } from '../../../utils/themeContext';
import Button from '../../Button';
import Text from '../../Text';
import { TasksModalContext } from '../TaskModals';
import TaskStatus from '../TaskStatus';
import CSS from './task.module.css';

interface Props {
  task: TaskI;
}

function Task({ task }: Props) {
  const { mode } = useContext(ThemeContext);
  const { openEdit, setCurrentTask, openDelete, openTask } = useContext(TasksModalContext);

  const shotenDescripition = (description: string) => {
    if (description.length > 20) {
      return `${description.substring(0, 30)}...`;
    }
    return description;
  };

  const editTask = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setCurrentTask(task);
    openEdit(true);
  };

  const deleteTask = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setCurrentTask(task);
    openDelete(true);
  };

  const openDetails = () => {
    setCurrentTask(task);
    openTask(true);
  };

  return (
    <div
      className={CSS.container}
      data-mode={mode}
      onClick={openDetails}
      role="menuitem"
      tabIndex={0}
      onKeyPress={openDetails}
    >
      <div className={CSS.head}>
        <TaskStatus status={task.status} />
        <Text type="h3">{task.title}</Text>
      </div>
      <div className={CSS.body}>
        <Text type="p">{shotenDescripition(task.description)}</Text>
      </div>
      <div className={CSS.buttons}>
        <Button onClick={editTask}>✏️</Button>
        <Button onClick={deleteTask}>🗑️</Button>
      </div>
    </div>
  );
}

export default Task;
