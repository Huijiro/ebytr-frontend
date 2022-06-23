import { SyntheticEvent } from 'react';
import InputText from '../../Form/InputText';
import Text from '../../Text';
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
  const submit = (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement & FormOptions;
    const todo = {
      title: form.title.value,
      description: form.description.value,
    };
    console.log(todo);
  };

  return (
    <form onSubmit={submit}>
      <InputText label="Title" id="title" />
      <label htmlFor="description">
        <Text type="h4">Description</Text>
        <textarea id="description" />
      </label>
      <button type="submit">Create</button>
    </form>
  );
}

export default TaskCreate;
