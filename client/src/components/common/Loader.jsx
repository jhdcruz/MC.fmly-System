/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Spinner from 'react-bootstrap/Spinner';
import styled from 'styled-components';
import logoGif from '../../assets/img/logo.gif';

/************************
 * * Spinner/Loading
 ************************/

const Loading = styled(Spinner)`
  display: block;
  margin: 5rem auto;
  z-index: 5;
`;

const ImgLoader = styled.div`
  background-color: rgba(15, 15, 15, 0.5);
  width: max-content;
  height: max-content;
  margin: 20vh auto;
  padding: 0.5rem;
  border-radius: 50%;
  display: block;
  z-index: 5;

  img {
    border-radius: 50%;
  }
`;

export const Loader = () => {
  return <Loading variant="primary" animation="border" role="status" />;
};

export const Fallback = () => {
  return (
    <ImgLoader>
      <img src={logoGif} alt="Loading..." width={200} height={200} />
    </ImgLoader>
  );
};
