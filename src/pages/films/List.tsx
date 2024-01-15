import { Button, Divider, Group, Stack, Text, Title } from '@mantine/core';
import { Fragment } from 'react';
import { Film } from './components/Film';
import { Link } from 'react-router-dom';
import { useGetFilms } from './queries';

export const FilmList = () => {
  const { data: categories } = useGetFilms();

  return (
    <div>
      <Group justify='space-between'>
        <Title order={1}>Films</Title>
        <Group>
          <Button component={Link} to='new'>
            Add New Film
          </Button>
        </Group>
      </Group>
      <Stack>
        {categories?.map((category) => (
          <Fragment key={category._id}>
            <Stack>
              <Text>{category.name}</Text>
              <Text c='dimmed'>{category.description}</Text>
              {category.films.map((film) => (
                <Film key={film.id} film={film} />
              ))}
            </Stack>
            <Divider />
          </Fragment>
        ))}
      </Stack>
    </div>
  );
};
