import { Button, Group, Title } from '@mantine/core';
import { Link } from 'react-router-dom';

export const PhotosList = () => {
  return (
    <div>
      <Group justify='space-between'>
        <Title order={1}>Photos</Title>
        <Group>
          <Button component={Link} to='new'>
            Add New Photo
          </Button>
        </Group>
      </Group>
    </div>
  );
};
