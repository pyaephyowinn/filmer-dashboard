import {
  ActionIcon,
  Box,
  Button,
  Checkbox,
  Group,
  Image,
  Menu,
  Text,
  Title,
  rem,
} from '@mantine/core';
import { modals } from '@mantine/modals';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconDots, IconTrash } from '@tabler/icons-react';
import { PageLoading } from '@/components/loading';
import { useGetPhotos } from './queries';

export const PhotosList = () => {
  const [selected, setSelected] = useState<any[]>([]);
  const { data, isLoading } = useGetPhotos();

  const openModal = () =>
    modals.openConfirmModal({
      title: 'Are you sure?',
      centered: true,
      children: (
        <Text size='sm'>
          Are you sure you want to delete the selected photos?
        </Text>
      ),
      labels: { confirm: 'Confirm', cancel: 'Cancel' },
      confirmProps: {
        color: 'red',
      },
      onConfirm: () => {
        console.log('confirmed deletion', selected);
      },
    });

  const toggleSelect = (item: any) => {
    if (selected.includes(item._id)) {
      setSelected((prev) => prev.filter((id) => id !== item._id));
      return;
    }
    setSelected((prev) => [...prev, item._id]);
  };

  if (isLoading) return <PageLoading />;

  return (
    <div>
      <Group justify='space-between'>
        <Title order={1}>Photos</Title>
        <Group>
          <Menu shadow='md' width={200}>
            <Menu.Target>
              <Button variant='subtle'>
                <IconDots />
              </Button>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label>Danger zone</Menu.Label>
              <Menu.Item
                color='red'
                leftSection={
                  <IconTrash style={{ width: rem(14), height: rem(14) }} />
                }
                onClick={openModal}
              >
                Delete selected
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <Button component={Link} to='new'>
            Add New Photo
          </Button>
        </Group>
      </Group>

      <Group wrap='wrap' my='lg'>
        {data?.map((item: any) => (
          <Box
            key={item._id}
            style={{
              position: 'relative',
              border: '1px solid var(--mantine-color-gray-2)',
            }}
          >
            <ActionIcon
              size='sm'
              style={{
                position: 'absolute',
                right: '4px',
                top: '4px',
              }}
            >
              <Checkbox
                checked={selected.includes(item._id)}
                onChange={() => {
                  toggleSelect(item);
                }}
              />
            </ActionIcon>
            <Image height={200} src={item.image.url} fit='cover' />
          </Box>
        ))}
      </Group>
    </div>
  );
};
