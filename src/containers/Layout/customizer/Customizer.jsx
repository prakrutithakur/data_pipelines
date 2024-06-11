import React from 'react';
import { useLocation } from 'react-router-dom';
import OffCanvas from '@/shared/components/OffCanvas';
import { useSelector } from 'react-redux';
import ConfigForm from '../../Dashboards/ConfigForm';

const Customizer = () => {
  const location = useLocation();
  const { panelState } = useSelector((state) => state.formTypeReducer);

  return (
    // location.pathname === '/home' ? (
    //   <OffCanvas isopen={panelState?.showForm}>
    //     <ConfigForm formtype={formtype} />
    //   </OffCanvas>
    // ) : (
    //   ''
    // );
    <OffCanvas isopen={panelState?.showForm}>
      <ConfigForm formtype={panelState?.formType} />
    </OffCanvas>
  );
};

export default Customizer;
