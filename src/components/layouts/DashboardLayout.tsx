import { AppShell, Burger, Card, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet } from 'react-router-dom';
import { useAuthenticatedRoute } from '@/hooks/useAuth';
import Sidebar from '../sidebar/Sidebar';

const DashboardLayout = () => {
  useAuthenticatedRoute();
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding='md'
    >
      <AppShell.Header>
        <Group h='100%' px='md'>
          <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
          <Text>Logo</Text>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p='md'>
        <Sidebar />
      </AppShell.Navbar>
      <AppShell.Main h='100%' bg='gray.1' display='flex'>
        <Card bg='white' w='100%'>
          <Outlet />
        </Card>
      </AppShell.Main>
    </AppShell>
  );
};
export default DashboardLayout;
