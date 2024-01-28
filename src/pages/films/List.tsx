import { Box, Button, Divider, Group, Stack, Text, Title } from '@mantine/core';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Film } from './components/Film';
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
        {categories?.map((category) => {
          console.log('category', category.films);
          const validFilms = category.films.filter(
            (film) =>
              // film.filmUrl.startsWith('https://')
              film
          );
          if (validFilms.length === 0) return null;

          return (
            <Fragment key={category._id}>
              <Stack>
                <Stack gap={2}>
                  <Title order={2} size='h3' tt='capitalize' ta='center'>
                    {category.name || 'No Category'}
                  </Title>
                  <Text c='dimmed' ta='center'>
                    {category.description}
                  </Text>
                </Stack>
                <Box
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '2px',
                  }}
                >
                  {validFilms.map((film) => (
                    <Film key={film.id} film={film} />
                  ))}
                </Box>
              </Stack>
              <Divider />
            </Fragment>
          );
        })}
      </Stack>
    </div>
  );
};
