import { Stack, Title } from '@mantine/core';
import { useCreateFilm } from './queries';
import { FilmForm } from './components';
import { ICreateFilm } from './types';

export const CreateFilm = () => {
  const { mutate: mutateFilm, isPending: isCreateFilmPending } =
    useCreateFilm();

  const handleSubmit = (values: ICreateFilm) => {
    mutateFilm(values);
  };

  return (
    <Stack gap='lg' maw={600}>
      <Title order={1}>Create a Film</Title>
      <FilmForm
        values={{
          categoryId: '',
          filmUrl: '',
        }}
        loading={isCreateFilmPending}
        onSubmit={handleSubmit}
      />
    </Stack>
  );
};
