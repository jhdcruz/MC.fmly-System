/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 */

import Spinner from 'react-bootstrap/Spinner';
import styled from 'styled-components';

/************************
 * * Spinner/Loading
 ************************/

const Loading = styled(Spinner)`
  margin: 10px auto;
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 45vh;
  left: 45vw;
  z-index: 99;
`;

export default function Loader() {
  return <Loading variant="primary" animation="border" role="status" />;
}
