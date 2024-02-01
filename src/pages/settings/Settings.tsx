import { changePasswordSchema } from '@/utils/schemas';
import { Button, Paper, PasswordInput, Title } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { ChangePassword } from '../auth/types';
import { showNotification } from '@mantine/notifications';
import { useChangePassword } from './queries';

export const Settings = () => {
  const form = useForm({
    initialValues: {
      password: '',
      newPassword: '',
      confirmPassword: '',
    },
    validate: zodResolver(changePasswordSchema),
  });

  const { mutate } = useChangePassword({
    resetForm: () => {
      form.reset();
    },
  });

  const handleSubmit = (values: ChangePassword) => {
    form.reset();
    if (values.newPassword !== values.confirmPassword) {
      showNotification({
        message: 'Passwords do not match',
        color: 'red',
      });
      return;
    }
    mutate({
      password: values.password,
      newPassword: values.newPassword,
    });
  };

  return (
    <Paper
      w={{
        base: '100%',
        sm: '400',
      }}
      component='form'
      onSubmit={form.onSubmit(handleSubmit)}
    >
      <Title order={1} size='h2' mb='lg'>
        Change Password
      </Title>
      <PasswordInput
        withAsterisk
        my='md'
        label='Current Password'
        {...form.getInputProps('password')}
      />
      <PasswordInput
        withAsterisk
        my='md'
        label='New Password'
        {...form.getInputProps('newPassword')}
      />
      <PasswordInput
        withAsterisk
        my='md'
        label='Confirm New Password'
        {...form.getInputProps('confirmPassword')}
      />

      <Button fullWidth loading={false} my='md' type='submit'>
        Login
      </Button>
    </Paper>
  );
};
