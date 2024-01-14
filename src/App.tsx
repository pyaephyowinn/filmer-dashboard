import { RouterProvider } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { router } from './config/router';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

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
        <RouterProvider router={router} />
      </QueryClientProvider>
    </MantineProvider>
  );
}

export default App;
