/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 */

import styled from 'styled-components';
import Badge from 'react-bootstrap/Badge';

// * Color Badges
const Chip = styled(Badge)`
  font-size: 1.2vw;
  border-radius: 0.3rem;
  box-shadow: 1px 2px 5px #1b1b1b;
`;

export default function Tag({ variant, content }) {
  return <Chip variant={variant}>{content}</Chip>;
}
