import { modals } from '@mantine/modals';
import { IconDots } from '@tabler/icons-react';
import { ActionIcon, Box, Menu, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube';
import { IGetFilm } from '../types';
import { useDeleteFilm } from '../queries';

type FilmProps = {
  film: IGetFilm;
};

export const Film = ({ film }: FilmProps) => {
  const { mutate, isPending } = useDeleteFilm();

  const openModal = () =>
    modals.openConfirmModal({
      title: 'Are you sure?',
      centered: true,
      children: (
        <Text size='sm'>Are you sure you want to delete the film?</Text>
      ),
      labels: { confirm: 'Confirm', cancel: 'Cancel' },
      confirmProps: {
        color: 'red',
      },
      onConfirm: () => {
        mutate(film.id);
      },
    });

  return (
    <Box pos='relative'>
      <ReactPlayer light width={350} height={200} url={film.filmUrl} />

      <Menu>
        <Menu.Target>
          <ActionIcon
            loading={isPending}
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
          <Menu.Item color='red' onClick={openModal}>
            Delete
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Box>
  );
};
