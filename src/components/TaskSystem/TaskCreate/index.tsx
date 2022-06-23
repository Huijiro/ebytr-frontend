import { SyntheticEvent, useEffect, useState } from 'react';
import Button from '../../Button';
import InputText from '../../Form/InputText';
import InputTextArea from '../../Form/InputTextArea';
import CSS from './create.module.css';

interface FormOptions {
  title: {
    value: string;
  };
  description: {
    value: string;
  };
}

function TaskCreate() {
  const [form, setForm] = useState<FormOptions>({
    title: { value: '' },
    description: { value: '' },
  });

  const [canSubmit, setCanSubmit] = useState(false);

  const change = (e: SyntheticEvent) => {
    const { id, value } = e.target as HTMLInputElement;
    setForm({ ...form, [id]: { value } });
  };

  useEffect(() => {
    setCanSubmit(
      form.title.value.length > 5 && form.description.value.length > 10,
    );
  }, [form]);

  const submit = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log('Submit');
  };

  return (
    <form onSubmit={submit} onChange={change} className={CSS.form}>
      <InputText label="Title" id="title" />
      <InputTextArea label="Description" id="description" />
      <Button type="submit" color="primary" disable={!canSubmit}>
        Create
      </Button>
    </form>
  );
}

export default TaskCreate;
