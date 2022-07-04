import { SyntheticEvent, useEffect, useState } from 'react';
import Task from '../../../interfaces/task.interface';
import Button from '../../Button';
import InputText from '../../Form/InputText';
import InputTextArea from '../../Form/InputTextArea';
import Select from '../../Form/Select';
import CSS from './edit.module.css';

interface FormOptions {
  title: {
    value: string;
    error: string;
  };
  description: {
    value: string;
    error: string;
  };
  status: {
    value: number;
  };
}

const statusOptions = [
  {
    value: 1,
    label: 'To do',
  },
  {
    value: 2,
    label: 'In progress',
  },
  {
    value: 3,
    label: 'Done',
  },
];

function TaskEdit({ task }: { task: Task }) {
  const [form, setForm] = useState<FormOptions>({
    title: { value: task.title, error: '' },
    description: { value: task.description, error: '' },
    status: { value: task.status.id },
  });

  const [canSubmit, setCanSubmit] = useState(false);

  const change = (e: SyntheticEvent) => {
    const { id, value } = e.target as HTMLInputElement;
    setForm({ ...form, [id]: { value } });
  };

  useEffect(() => {
    setForm({
      ...form,
      title: {
        ...form.title,
        error:
          form.title.value.length > 5
            ? ''
            : 'Title must be at least 5 characters',
      },
      description: {
        ...form.description,
        error:
          form.description.value.length > 10
            ? ''
            : 'Description must be at least 10 characters',
      },
    });

    setCanSubmit(
      form.title.value.length > 5 && form.description.value.length > 10,
    );
  }, [form.title.value, form.description.value]);

  const submit = async () => {
    try {
      await fetch(`/api/tasks/${task.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: form.title.value,
          description: form.description.value,
          statusId: form.status.value,
        }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={submit} onChange={change} className={CSS.form}>
      <InputText
        label="Title"
        id="title"
        err={form.title.error}
        value={form.title.value}
      />
      <InputTextArea
        label="Description"
        id="description"
        value={form.description.value}
        err={form.description.error}
      />

      <Select id="status" options={statusOptions} />
      <Button type="submit" color="primary" disable={!canSubmit}>
        Edit
      </Button>
    </form>
  );
}

export default TaskEdit;
