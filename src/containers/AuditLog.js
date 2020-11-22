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

import { Container } from 'react-bootstrap';
import ProductHeader from '../components/tables/ProductHeader';
import ProductRow from '../components/tables/ProductRow';
import ProductService from '../services/ProductService';
import { Loader, NullItems } from '../components/tables/__tables.module';

export default function AuditLog() {
  const [products] = ProductService();

  // Verify if there are any products
  const listProducts = () => {
    return (
      <>
        {products && products.length >= 1 ? (
          // Reverse & limit result to 20 | prioritize new entries
          products &&
          products
            .slice(Math.max(products.length - 20, 0))
            .reverse()
            .map((product) => ProductRow(product))
        ) : (
          <Loader variant="primary" animation="border" role="status" />
        )}
      </>
    );
  };

  return (
    <Container
      fluid
      style={{
        width: '100%',
        height: '100vh'
      }}
    >
      <ProductHeader
        data={
          // Check if there are any product/s
          products && products.length === null ? (
            <NullItems> No products registered...</NullItems>
          ) : (
            listProducts()
          )
        }
      />
    </Container>
  );
}
