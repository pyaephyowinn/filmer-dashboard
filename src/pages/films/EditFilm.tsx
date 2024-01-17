import { Stack, Title } from '@mantine/core';
import { useParams } from 'react-router-dom';
import { FilmForm } from './components';
import { useGetFilm, useUpdateFilm } from './queries';
import { ICreateFilm } from './types';
import { PageLoading } from '@/components/loading';

// TODO: fix film category Error

export const EditFilm = () => {
  const { filmId = '' } = useParams();
  const { data: initialFilm, isLoading: isGetFilmLoading } = useGetFilm(filmId);
  const { mutate: mutateFilm, isPending: isCreateFilmPending } =
    useUpdateFilm();

  const handleSubmit = (values: ICreateFilm) => {
    mutateFilm({ id: filmId, film: values });
  };

  if (isGetFilmLoading) return <PageLoading />;
  console.log('initialFilm', initialFilm);

  return (
    <Stack gap='lg' maw={600}>
      <Title order={1}>Edit</Title>
      <FilmForm
        values={{
          categoryId: initialFilm?.categoryId,
          filmUrl: initialFilm?.filmUrl || '',
        }}
        loading={isCreateFilmPending}
        onSubmit={handleSubmit}
      />
    </Stack>
  );
};
