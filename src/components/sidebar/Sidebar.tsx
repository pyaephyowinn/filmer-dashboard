import { Box, NavLink } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '@/config/constant';

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <Box>
      {NAV_LINKS.map((link) => (
        <NavLink
          key={link.href}
          label={link.label}
          to={link.href}
          component={Link}
          active={pathname === link.href}
        />
      ))}
    </Box>
  );
};
export default Sidebar;
