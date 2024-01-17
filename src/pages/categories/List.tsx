import { Title } from '@mantine/core';
import { useGetCategories } from './queries';
import { PageLoading } from '@/components/loading';

export const CategoriesList = () => {
  const { data: categories, isLoading: isGetCategoriesLoading } =
    useGetCategories();

  if (isGetCategoriesLoading) return <PageLoading />;

  return (
    <div>
      <Title order={1}>Categories</Title>

      <div>
        {categories?.map((category) => (
          <div key={category._id}>{category.name}</div>
        ))}
      </div>
    </div>
  );
};
