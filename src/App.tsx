import { RouterProvider } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ModalsProvider } from '@mantine/modals';
import { router } from './config/router';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

// TODO: fix types

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <MantineProvider>
      <QueryClientProvider client={queryClient}>
        <Notifications position='top-center' />
        <ModalsProvider>
          <RouterProvider router={router} />
        </ModalsProvider>
      </QueryClientProvider>
    </MantineProvider>
  );
}

export default App;
