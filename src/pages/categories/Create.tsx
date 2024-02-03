import { Title } from '@mantine/core';
import { CategoryForm } from './components/CategoryForm';
import { ICategory } from './types';
import { useCreateCategory } from './queries';

export const CreateCategory = () => {
  const { mutate, isPending } = useCreateCategory();

  const handleSubmit = (values: ICategory) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value);
      }
    });

    mutate(formData);
  };
  return (
    <div>
      <Title order={1}>Create a Category</Title>
      <CategoryForm
        isCreate
        loading={isPending}
        values={{
          name: '',
          description: '',
        }}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
