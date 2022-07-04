import { SyntheticEvent, useEffect, useState } from 'react';
import Button from '../../Button';
import InputText from '../../Form/InputText';
import InputTextArea from '../../Form/InputTextArea';
import CSS from './create.module.css';

interface FormOptions {
  title: {
    value: string;
    error: string;
  };
  description: {
    value: string;
    error: string;
  };
}

function TaskCreate() {
  const [form, setForm] = useState<FormOptions>({
    title: { value: '', error: '' },
    description: { value: '', error: '' },
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
      await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: form.title.value,
          description: form.description.value,
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
        value={form.description.value}
        label="Description"
        id="description"
        err={form.description.error}
      />
      <Button type="submit" color="primary" disable={!canSubmit}>
        Create
      </Button>
    </form>
  );
}

export default TaskCreate;
