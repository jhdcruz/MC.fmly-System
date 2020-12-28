/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import styled from 'styled-components';
import Badge from 'react-bootstrap/Badge';

// * Color Badges
const Chip = styled(Badge)`
  font-size: 1rem;
  margin: 0.35rem 0.5rem 0.35rem 0;
  border-radius: 0.3rem;
  box-shadow: 1px 2px 5px #1b1b1b;
`;

export default function Tag({ index, variant, content }) {
  return (
    <Chip variant={variant} key={index}>
      {content}
    </Chip>
  );
}
