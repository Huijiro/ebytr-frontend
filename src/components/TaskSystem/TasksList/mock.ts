import Status from '../../../interfaces/status.interface';
import Task from '../../../interfaces/task.interface';

const RandomTasks: Task[] = [
  {
    id: 1,
    title: 'Task 1',
    createdAt: '2000-01-01T00:00:00.000Z',
    updatedAt: '2000-01-01T00:00:00.000Z',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
      id: 2,
      name: Status.ONGOING,
    },
  },
  {
    id: 3,
    title: 'Task 3',
    createdAt: '2000-01-01T00:00:00.000Z',
    updatedAt: '2000-01-01T00:00:00.000Z',
    description: 'Task 3 description',
    status: {
      id: 3,
      name: Status.DONE,
    },
  },
];

export default RandomTasks;
