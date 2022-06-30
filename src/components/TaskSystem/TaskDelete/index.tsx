import Task from '../../../interfaces/task.interface';
import Button from '../../Button';
import Text from '../../Text';
import CSS from './delete.module.css';

interface Props {
  task: Task;
}

function TaskDelete({ task }: Props) {
  function deleteTask() {
    console.log('delete task:', task.id);
    document.location.reload();
  }

  return (
    <div>
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