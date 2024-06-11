import React from 'react';
import DownIcon from 'mdi-react/ChevronDownIcon';
import { Dropdown, DropdownItem } from '@/shared/components/Dropdown';
import TopbarNavLink from './TopbarNavLink';
import {
  TopbarNavigationMenu,
  TopbarNavigationToggle,
} from '../../components/topbar/NavigationTopbarElements';

const TopbarNavDashboards = () => (
  <Dropdown>
    <TopbarNavigationToggle>
      Dashboards <DownIcon />
    </TopbarNavigationToggle>
    <TopbarNavigationMenu>
      <DropdownItem>
        <TopbarNavLink
          title="Online Marketing Dashboard"
          icon="home"
          route="/online_marketing_dashboard"
        />
      </DropdownItem>
      <DropdownItem>
        <TopbarNavLink
          title="App Dashboard"
          icon="smartphone"
          route="/app"
        />
      </DropdownItem>
    </TopbarNavigationMenu>
  </Dropdown>
);

export default TopbarNavDashboards;
