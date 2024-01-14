import {
  Button,
  Center,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useUnauthenticatedRoute } from '@/hooks/useAuth';

const Login = () => {
  useUnauthenticatedRoute();
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
      >
        <Title order={1} size='h2' mb='lg'>
          Login
        </Title>
        <TextInput type='email' withAsterisk label='Email' />
        <PasswordInput withAsterisk my='md' label='Password' />

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
