/*
 *     MC.fmly Inventory Management System
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

import Tab from 'react-bootstrap/Tab';
// Components
import ProductHeader from '../components/tables/products/ProductHeader';
import SupplierHeader from '../components/tables/suppliers/SupplierHeader';
import UserHeader from '../components/tables/users/UserHeader';
import ProductRow from '../components/tables/products/ProductRow';
import SupplierRow from '../components/tables/suppliers/SupplierRow';
import UserRow from '../components/tables/users/UserRow';
// Services
import ProductService from '../services/ProductService';
import SupplierService from '../services/SupplierService';
import UserService from '../services/UserService';
import TransactionService from "../services/TransactionService";
// Commons
import Notification from '../components/common/Notification';
import { NavTabs, TabContainer } from './__containers.module';
import { Loader } from '../components/tables/__tables.module';
import TransactionRow from "../components/tables/transactions/TransactionRow";
import TransactionHeader from "../components/tables/transactions/TransactionHeader";

export default function Recent() {
  const [products] = ProductService();
  const [suppliers] = SupplierService();
  const [users] = UserService();
  const [transactions] = TransactionService();

  // * Recent Product List (Max. 10)
  const ListProducts = () => {
    return (
      <ProductHeader
        _id={products && products._id}
        data={
          products && products.length !== null ? (
            // Reverse & limit result to 10 | prioritize new entries
            products &&
            products
              .slice(Math.max(products.length - 10, 0))
              .reverse()
              .map((product) => ProductRow(product))
          ) : (
            <Loader variant="primary" animation="border" role="status" />
          )
        }
      />
    );
  };

  // * Recent Suppliers List (Max. 10)
  const ListSuppliers = () => {
    return (
      <SupplierHeader
        _id={suppliers && suppliers._id}
        data={
          suppliers && suppliers.length !== null ? (
            // Reverse & limit result to 10 | prioritize new entries
            suppliers &&
            suppliers
              .slice(Math.max(suppliers.length - 10, 0))
              .reverse()
              .map((supplier) => SupplierRow(supplier))
          ) : (
            <Loader variant="primary" animation="border" role="status" />
          )
        }
      />
    );
  };

  // * Recent User List (Max. 10)
  const ListUsers = () => {
    return (
      <UserHeader
        _id={users && users._id}
        data={
          users && users.length !== null ? (
            // Reverse & limit result to 10 | prioritize new entries
            users &&
            users
              .slice(Math.max(users.length - 10, 0))
              .reverse()
              .map((user) => UserRow(user))
          ) : (
            <Loader variant="primary" animation="border" role="status" />
          )
        }
      />
    );
  };

  // * Recent Transactions List (Max. 10)
  const ListTransactions = () => {
    return (
      <TransactionHeader
        _id={transactions && transactions._id}
        data={
          transactions && transactions.length !== null ? (
            // Reverse & limit result to 10 | prioritize new entries
            transactions &&
            transactions
              .slice(Math.max(transactions.length - 10, 0))
              .reverse()
              .map((transaction) => TransactionRow(transaction))
          ) : (
            <Loader variant="primary" animation="border" role="status" />
          )
        }
      />
    );
  };

  return (
    <TabContainer>
      <NavTabs defaultActiveKey="products" id="Navigation Tabs" justify>
        <Tab eventKey="products" title="Products">
          <ListProducts />
        </Tab>
        <Tab eventKey="suppliers" title="Suppliers">
          <ListSuppliers />
        </Tab>
        <Tab eventKey="Users" title="Users">
          <ListUsers />
        </Tab>
      </NavTabs>
      <Notification
        delay={12000}
        title="Guide"
        message={
          <p>
            Scroll horizontally using <kbd>Shift</kbd> + <kbd>Scroll</kbd>, or
            arrow keys
          </p>
        }
      />
    </TabContainer>
  );
}
