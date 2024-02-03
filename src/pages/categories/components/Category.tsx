import { Button, Card, Group, Image, Text } from '@mantine/core';
import { ICategory } from '../types';
import { Link } from 'react-router-dom';
import { modals } from '@mantine/modals';

type CategoryProps = {
  category: ICategory;
};

const Category = ({ category }: CategoryProps) => {
  const openModal = () =>
    modals.openConfirmModal({
      title: 'Are you sure?',
      centered: true,
      children: (
        <Text size='sm'>Are you sure you want to delete the category?</Text>
      ),
      labels: { confirm: 'Confirm', cancel: 'Cancel' },
      confirmProps: {
        color: 'red',
      },
      onConfirm: () => {
        console.log('confirm');
      },
    });

  return (
    <Card shadow='sm' padding='lg' radius='md' withBorder>
      <Card.Section>
        <Image
          src={category.image}
          fallbackSrc='https://placehold.co/600x400?text=No Image'
          height={160}
          alt='Norway'
        />
      </Card.Section>

      <Text mt='md' mb='xs' fw={500} tt='capitalize'>
        {category.name}
      </Text>

      <Text size='sm' c='dimmed'>
        {category.description}
      </Text>

      <Group mt='md' wrap='nowrap' gap='sm' justify='end'>
        <Button w={80} component={Link} to={`${category._id}/edit`}>
          Edit
        </Button>
        <Button w={80} color='red' onClick={openModal}>
          Delete
        </Button>
      </Group>
    </Card>
  );
};
export default Category;
