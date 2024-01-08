import { Divider, Stack, Text, Title } from '@mantine/core';
import { useGetFilms } from './queries';
import { Fragment } from 'react';

export const FilmList = () => {
  const { data: categories } = useGetFilms();

  return (
    <div>
      <Title order={1}>Films</Title>
      <Stack>
        {categories?.map((category) => (
          <Fragment key={category._id}>
            <Stack>
              <Text>{category.name}</Text>
              <Text c='dimmed'>{category.description}</Text>
              {category.films.map((film) => (
                <div key={film.id}>{film.filmUrl}</div>
              ))}
            </Stack>
            <Divider />
          </Fragment>
        ))}
      </Stack>
    </div>
  );
};
