import Task from '../../../interfaces/task.interface';
import Button from '../../Button';
import Text from '../../Text';
import CSS from './delete.module.css';

interface Props {
  task: Task;
}

function TaskDelete({ task }: Props) {
  const deleteTask = async () => {
    console.log('delete task', task.id);
    await fetch(`/api/tasks/${task.id}`, { method: 'DELETE' });
    document.location.reload();
  };

  return (
    <div className={CSS.body}>
      <Text type="h3">
        Are you sure you want to delete &quot;
        {task.title}
        &quot;?
      </Text>
      <div className={CSS.buttonArea}>
        <Button
          color="secondary"
          onClick={() => {
            deleteTask();
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default TaskDelete;
