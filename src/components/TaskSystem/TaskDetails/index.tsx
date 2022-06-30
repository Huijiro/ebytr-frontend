import Task from '../../../interfaces/task.interface';
import Text from '../../Text';
import Status from './Status';
import CSS from './details.module.css';

function TaskDetails({ task }: { task: Task }) {
  return (
    <div>
      <div className={CSS.head}>
        <Text type="h2">{task.title}</Text>
        <Status statusId={task.status.id} />
      </div>
      <div className={CSS.body}>
        <Text type="p">{task.description}</Text>
      </div>
    </div>
  );
}

export default TaskDetails;
