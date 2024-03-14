import {
  ActionIcon,
  Box,
  Button,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  Title,
  rem,
} from '@mantine/core';
import { FormEvent, useState } from 'react';
import { IconPhoto, IconUpload, IconX } from '@tabler/icons-react';
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import '@mantine/dropzone/styles.css';
import { Link } from 'react-router-dom';
import { PHOTO_SIZE } from '@/config/constant';
import { useCreatePhotos } from './queries';

export const CreatePhoto = () => {
  const [files, setFiles] = useState<FileWithPath[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const { mutate, isPending } = useCreatePhotos();

  const handleRemovePhoto = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setImageUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(files).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value);
      }
    });
    mutate(formData);
  };

  return (
    <Stack gap='lg'>
      <Title order={1}>Create a Photo</Title>

      <Paper component='form' m='sm' onSubmit={handleSubmit}>
        <Dropzone
          onDrop={(files) => {
            setFiles(files);
            const imageUrls = files.map((file) => URL.createObjectURL(file));
            setImageUrls(imageUrls);
          }}
          maxSize={PHOTO_SIZE * 1024 ** 2}
          accept={IMAGE_MIME_TYPE}
        >
          <Group
            justify='center'
            gap='xl'
            mih={220}
            style={{ pointerEvents: 'none' }}
          >
            <Dropzone.Accept>
              <IconUpload
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: 'var(--mantine-color-blue-6)',
                }}
                stroke={1.5}
              />
            </Dropzone.Accept>

            <Dropzone.Reject>
              <IconX
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: 'var(--mantine-color-red-6)',
                }}
                stroke={1.5}
              />
            </Dropzone.Reject>

            <Dropzone.Idle>
              <IconPhoto
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: 'var(--mantine-color-dimmed)',
                }}
                stroke={1.5}
              />
            </Dropzone.Idle>

            <div>
              <Text size='xl' inline>
                Drag images here or click to select files
              </Text>
              <Text size='sm' c='dimmed' inline mt={7}>
                Attach as many files as you like, each file should not exceed{' '}
                {PHOTO_SIZE}mb
              </Text>
            </div>
          </Group>
        </Dropzone>

        <Group my='md'>
          {imageUrls.map((imageUrl, index) => (
            <Box
              key={imageUrl}
              style={{
                position: 'relative',
                width: '80px',
                height: '80px',
              }}
            >
              <ActionIcon
                onClick={() => {
                  handleRemovePhoto(index);
                }}
                size='sm'
                style={{
                  position: 'absolute',
                  right: '4px',
                  top: '4px',
                }}
              >
                <IconX size={20} />
              </ActionIcon>
              <Image width={80} height={80} src={imageUrl} fit='cover' />
            </Box>
          ))}
        </Group>

        <Group>
          <Button component={Link} to='/d/photos' variant='outline' color='red'>
            Cancel
          </Button>
          <Button type='submit' loading={isPending}>
            Save
          </Button>
        </Group>
      </Paper>
    </Stack>
  );
};
