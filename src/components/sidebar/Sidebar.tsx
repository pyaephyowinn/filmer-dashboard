import { Box, NavLink } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '@/config/nav-links';

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
          leftSection={<link.icon />}
        />
      ))}
    </Box>
  );
};
export default Sidebar;
