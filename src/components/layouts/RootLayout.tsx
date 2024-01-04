import { useAppSetup } from '@/hooks/useAppSetup';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  const init = useAppSetup();

  if (!init) return <>Loading</>;

  return <Outlet />;
};
export default RootLayout;
