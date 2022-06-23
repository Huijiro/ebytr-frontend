import Status from '../../../interfaces/status.interface';
import Task from '../../../interfaces/task.interface';

const RandomTasks: Task[] = [
  {
    id: 1,
    title: 'Task 1',
    createdAt: '2000-01-01T00:00:00.000Z',
    updatedAt: '2000-01-01T00:00:00.000Z',
    description: 'Task 1 description',
    status: {
      id: 1,
      name: Status.TODO,
    },
  },
  {
    id: 2,
    title: 'Task 2',
    createdAt: '2000-01-01T00:00:00.000Z',
    updatedAt: '2000-01-01T00:00:00.000Z',
    description: 'Task 2 description',
    status: {
      id: 1,
      name: Status.TODO,
    },
  },
  {
    id: 3,
    title: 'Task 3',
    createdAt: '2000-01-01T00:00:00.000Z',
    updatedAt: '2000-01-01T00:00:00.000Z',
    description: 'Task 3 description',
    status: {
      id: 1,
      name: Status.TODO,
    },
  },
];

export default RandomTasks;
