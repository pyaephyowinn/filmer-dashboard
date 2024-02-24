import { Stack, Title } from '@mantine/core';
import { useParams } from 'react-router-dom';
import { useGetCategory, useUpdateCategory } from './queries';
import { PageLoading } from '@/components/loading';
import { CategoryForm } from './components/CategoryForm';
import { ICategory } from './types';

const EditCategory = () => {
  const { categoryId = '' } = useParams();
  const { data, isLoading: isGetLoading } = useGetCategory(categoryId);
  const { mutate, isPending: isUpdateLoading } = useUpdateCategory();

  const handleSubmit = (values: ICategory) => {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value);
      }
    });

    mutate({
      id: categoryId,
      data: formData,
    });
  };

  if (isGetLoading) return <PageLoading />;

  return (
    <Stack gap='lg' maw={600}>
      <Title order={1}>Edit</Title>
      <CategoryForm
        values={{
          name: data?.name || '',
          description: data?.description || '',
          _id: data?._id || '',
          image: data?.image || '',
        }}
        onSubmit={handleSubmit}
        loading={isUpdateLoading}
      />
    </Stack>
  );
};
export default EditCategory;
