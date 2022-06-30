import { useContext } from 'react';
import Button from '../../Button';
import Text from '../../Text';
import { TasksModalContext } from '../TaskModals';
import CSS from './tasksHeader.module.css';

function TasksHeader() {
  const { openCreate } = useContext(TasksModalContext);
  return (
    <div className={CSS.header}>
      <Text type="h2">Tasks</Text>
      <Button
        color="primary"
        onClick={() => {
          openCreate(true);
        }}
      >
        Add Task
      </Button>
    </div>
  );
}

export default TasksHeader;
