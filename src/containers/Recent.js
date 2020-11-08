/*
 *     MC.fmly Inventory System
 *     Copyright (C) 2020  Joshua Hero H. Dela Cruz
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import NarrowProduct from '../components/NarrowProduct';
import NarrowTable, { Loader, NullItems } from '../components/NarrowTable';
import useProducts from '../hooks/useProducts';
import Notification from '../components/Notification';
import Container from 'react-bootstrap/Container';

export default function Recent() {
  const [products] = useProducts();

  const verifyProducts = () => {
    return (
      <>
        {products && products.length >= 1 ? (
          // Reverse & limit result to prioritize new entries
          products
            .slice(Math.max(products.length - 10, 0))
            .reverse()
            .map((products) => NarrowProduct(products))
        ) : (
          <Loader variant="primary" animation="border" role="status" />
        )}
      </>
    );
  };

  return (
    <Container fluid style={{
      width: '100%',
      height: '100vh'
    }}>
      <NarrowTable
        data={
          products && products.length === 0 ? (
            <NullItems> No products registered...</NullItems>
          ) : (
            verifyProducts()
          )
        }
      />
      <Notification
        title="Notice"
        time="System Guide"
        message="Display 10 recently registered products. Products are fetched from the database."
        delay={5000}
      />
    </Container>
  );
}
