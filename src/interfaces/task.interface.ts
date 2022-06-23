import Status from './status.interface';

export default interface Task {
  id: number;
  title: string;
  createdAt?: string;
  updatedAt?: string;
  description: string;
  status: {
    id: number;
    name: Status;
  };
}
