/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { memo } from 'react';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';
import logo from '../../assets/img/logo.svg';

/************************
 * * Maintenance Notice
 ************************/

const Notice = styled.h2`
  width: max-content;
  text-align: center;
  margin: 0 auto;
  color: whitesmoke;
  background-color: #222126;
  box-shadow: 3px 3px 8px #1b1b1b;
  border-radius: 0.5rem;
  padding: 1.5rem;

  #feature {
    color: #e6a195;
    line-height: 1;
  }
`;

const Img = styled(Image)`
  margin: 0.5rem 0;
`;

const Maintenance = memo(({ feature }) => {
  return (
    <Notice>
      <Img src={logo} width={200} height={200} />
      <h3 id="feature">{feature}</h3>
      <h5>is currently undergoing maintenance</h5>
    </Notice>
  );
});

export default Maintenance;
