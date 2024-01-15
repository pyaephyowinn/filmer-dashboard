import {
  Button,
  Group,
  Paper,
  Select,
  Stack,
  TextInput,
  Title,
} from '@mantine/core';
import { PageLoading } from '@/components/loading';
import { useCreateFilm, useGetCategories } from './queries';
import { Link } from 'react-router-dom';
import { useForm, zodResolver } from '@mantine/form';
import { createFilmSchema } from '@/utils/schemas';

export const CreateFilm = () => {
  const { data: categories, isLoading: isLoadingCategories } =
    useGetCategories();
  const { mutate: mutateFilm, isPending: isCreateFilmPending } =
    useCreateFilm();

  const categoriesOptions =
    categories?.map((c) => ({
      value: c._id,
      label: c.name,
    })) || [];

  const form = useForm({
    initialValues: {
      filmUrl: '',
      categoryId: '',
    },
    validate: zodResolver(createFilmSchema),
  });

  const handleSubmit = () => {
    mutateFilm(form.values);
  };

  if (isLoadingCategories) return <PageLoading />;

  return (
    <Stack gap='lg' maw={600}>
      <Title order={1}>Create a Film</Title>
      <Paper component='form' onSubmit={form.onSubmit(handleSubmit)}>
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
          <Button type='submit' loading={isCreateFilmPending}>
            Save
          </Button>
        </Group>
      </Paper>
    </Stack>
  );
};
