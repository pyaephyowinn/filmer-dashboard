import { Box, Button, Group, Title } from '@mantine/core';
import { useGetCategories } from './queries';
import { PageLoading } from '@/components/loading';
import Category from './components/Category';
import { Link } from 'react-router-dom';

export const CategoriesList = () => {
  const { data: categories, isLoading: isGetCategoriesLoading } =
    useGetCategories();

  if (isGetCategoriesLoading) return <PageLoading />;

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--mantine-spacing-md)',
      }}
    >
      <Group justify='space-between'>
        <Title order={1}>Categories</Title>
        <Group>
          <Button component={Link} to='new'>
            Add New Category
          </Button>
        </Group>
      </Group>

      <Box
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 'var(--mantine-spacing-md)',
        }}
      >
        {categories?.map((category) => (
          <Category key={category._id} category={category} />
        ))}
      </Box>
    </Box>
  );
};
