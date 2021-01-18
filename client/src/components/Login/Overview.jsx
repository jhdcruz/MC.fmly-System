/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';
import Maintenance from '../common/Maintenance';

const Reports = styled.div`
  width: 100%;
  height: 100vh;
  max-height: max-content;
  padding: 0 0.75rem 0;
  display: block;

  .carousel {
    height: 100%;

    .carousel-item {
      padding: 4rem 1.75rem;
      height: max-content;
    }

    .carousel-control-prev,
    .carousel-control-next {
      width: max-content;
    }

    .carousel-indicators {
      li {
        background-color: #e6a195;

        :active {
          opacity: 1;
        }
      }
    }
  }
`;

export default function Overview() {
  return (
    <Reports fluid>
      <Carousel interval={12500}>
        <Carousel.Item>
          <Maintenance feature="Summary Report" />
        </Carousel.Item>
        <Carousel.Item>
          <Maintenance feature="Bulletin Board" />
        </Carousel.Item>
      </Carousel>
    </Reports>
  );
}
