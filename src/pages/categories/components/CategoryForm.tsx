import { Button, FileInput, Group, Paper, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Link } from 'react-router-dom';
import { ICategory } from '../types';

interface CategoryFormProps {
  values: ICategory;
  loading?: boolean;
  isCreate?: boolean;
  onSubmit: (values: ICategory) => void;
}

export const CategoryForm = ({
  values,
  loading,
  isCreate,
  onSubmit,
}: CategoryFormProps) => {
  const form = useForm({
    initialValues: values,
  });

  return (
    <Paper component='form' onSubmit={form.onSubmit(onSubmit)}>
      <TextInput
        my='lg'
        withAsterisk
        type='text'
        label='Category Name'
        placeholder='Enter Category Name'
        {...form.getInputProps('name')}
      />

      <TextInput
        my='lg'
        withAsterisk
        type='text'
        label='Description'
        placeholder='Enter Description'
        {...form.getInputProps('description')}
      />

      <FileInput
        my='lg'
        accept='image/*'
        label='Category Image'
        {...form.getInputProps('imageFile')}
      />

      <Group justify='flex-end'>
        <Button
          component={Link}
          to='/d/categories'
          variant='outline'
          color='red'
        >
          Cancel
        </Button>
        <Button type='submit' loading={loading}>
          {isCreate ? 'Create' : 'Save'}
        </Button>
      </Group>
    </Paper>
  );
};
