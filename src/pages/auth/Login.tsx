import {
  Button,
  Center,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useUnauthenticatedRoute } from '@/hooks/useAuth';
import { loginSchema } from '@/utils/schemas';
import { useLogin } from './queries';

const Login = () => {
  useUnauthenticatedRoute();
  const { mutate } = useLogin();

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: zodResolver(loginSchema),
  });

  const handleSubmit = () => {
    mutate(form.values);
  };

  return (
    <Center h='100vh'>
      <Paper
        withBorder
        p={30}
        py={30}
        mb={50}
        miw={400}
        radius='md'
        shadow='md'
        component='form'
        onSubmit={form.onSubmit(handleSubmit)}
      >
        <Title order={1} size='h2' mb='lg'>
          Login
        </Title>
        <TextInput
          type='email'
          withAsterisk
          label='Email'
          {...form.getInputProps('email')}
        />
        <PasswordInput
          withAsterisk
          my='md'
          label='Password'
          {...form.getInputProps('password')}
        />

        <Button fullWidth loading={false} my='md' type='submit'>
          Login
        </Button>
      </Paper>

      <Text c='dimmed' style={{ position: 'absolute', bottom: 20 }}>
        Copyright © {new Date().getFullYear()} Pyae Phyo Win. All rights
        reserved.
      </Text>
    </Center>
  );
};
export default Login;
