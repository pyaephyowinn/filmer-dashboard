import { ActionIcon, Box, Menu } from '@mantine/core';
import ReactPlayer from 'react-player/youtube';
import { IGetFilm } from '../types';
import { IconDots } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

type FilmProps = {
  film: IGetFilm;
};

export const Film = ({ film }: FilmProps) => {
  if (!film.filmUrl.startsWith('https://')) return null;
  return (
    <Box pos='relative'>
      <ReactPlayer light width={350} height={200} url={film.filmUrl} />

      <Menu>
        <Menu.Target>
          <ActionIcon
            size={32}
            style={{
              position: 'absolute',
              top: '0',
              right: '0',
            }}
            radius='xs'
            variant='filled'
          >
            <IconDots />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item component={Link} to={`${film.id}/edit`}>
            Edit
          </Menu.Item>
          <Menu.Item color='red'>Delete</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Box>
  );
};
