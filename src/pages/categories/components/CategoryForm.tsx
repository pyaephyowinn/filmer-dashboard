import {
  Button,
  FileInput,
  Group,
  Image,
  Paper,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fileToBase64 } from '@/utils/helpers';
import { ICategory } from '../types';

interface CategoryFormProps {
  values: ICategory;
  loading?: boolean;
  isCreate?: boolean;
  onSubmit: (values: ICategory) => void;
}

export const CategoryForm = ({
  values,
  loading,
  isCreate,
  onSubmit,
}: CategoryFormProps) => {
  const [previewImage, setPreviewImage] = useState<string>('');
  const form = useForm({
    initialValues: values,
  });

  useEffect(() => {
    async function updatePreviewImage() {
      const imageFile = form.getTransformedValues().imageFile;
      const originalImage = form.getTransformedValues().image || '';
      if (imageFile) {
        const image = (await fileToBase64(imageFile)) as string;
        setPreviewImage(image);
      } else {
        setPreviewImage(originalImage);
      }
    }

    updatePreviewImage();
  }, [form.getInputProps('imageFile').value]);

  return (
    <Paper component='form' onSubmit={form.onSubmit(onSubmit)}>
      <TextInput
        my='lg'
        withAsterisk
        type='text'
        label='Category Name'
        placeholder='Enter Category Name'
        {...form.getInputProps('name')}
      />

      <TextInput
        my='lg'
        withAsterisk
        type='text'
        label='Description'
        placeholder='Enter Description'
        {...form.getInputProps('description')}
      />

      <FileInput
        my='lg'
        clearable
        accept='image/*'
        label='Category Image'
        {...form.getInputProps('imageFile')}
        leftSection={<Image mah='100%' w='40px' src={previewImage} />}
        styles={{
          section: {
            marginInline: '8px',
            width: '40px',
          },
          input: {
            paddingLeft: '56px',
          },
        }}
      />

      <Group justify='flex-end'>
        <Button
          component={Link}
          to='/d/categories'
          variant='outline'
          color='red'
        >
          Cancel
        </Button>
        <Button type='submit' loading={loading}>
          {isCreate ? 'Create' : 'Save'}
        </Button>
      </Group>
    </Paper>
  );
};
