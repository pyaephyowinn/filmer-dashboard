import { Button, Group, Paper, Select, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { Link } from 'react-router-dom';
import { useGetCategories } from '@/pages/categories/queries';
import { PageLoading } from '@/components/loading';
import { IFilm } from '../types';
import { createFilmSchema } from '@/utils/schemas';

interface FilmFormProps {
  values: IFilm;
  loading?: boolean;
  isCreate?: boolean;
  onSubmit: (values: IFilm) => void;
}

export const FilmForm = ({
  values,
  loading,
  isCreate,
  onSubmit,
}: FilmFormProps) => {
  const form = useForm({
    initialValues: values,
    validate: zodResolver(createFilmSchema),
  });

  const { data: categories, isLoading: isLoadingCategories } =
    useGetCategories();

  const categoriesOptions =
    categories?.map((c) => ({
      value: c._id,
      label: c.name,
    })) || [];

  if (isLoadingCategories) return <PageLoading />;

  return (
    <Paper component='form' onSubmit={form.onSubmit(onSubmit)}>
      <TextInput
        my='lg'
        withAsterisk
        type='text'
        label='Film Url'
        placeholder='Enter Film Url'
        {...form.getInputProps('filmUrl')}
      />

      <Select
        my='lg'
        clearable
        label='Category'
        placeholder='Select Category'
        data={categoriesOptions}
        {...form.getInputProps('categoryId')}
      />

      <Group justify='flex-end'>
        <Button component={Link} to='/d/films' variant='outline' color='red'>
          Cancel
        </Button>
        <Button type='submit' loading={loading}>
          {isCreate ? 'Create' : 'Save'}
        </Button>
      </Group>
    </Paper>
  );
};
