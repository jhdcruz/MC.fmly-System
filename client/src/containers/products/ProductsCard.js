/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Moment from 'react-moment';
import Categories from '../../components/sidebar/Categories';
import SearchControls from '../../components/SearchControls';
import { CardDeck } from '../../components/cards/CardOverlay';
import { AddProduct, DeleteProduct, EditProduct } from '../modals/ProductModal';
import ProductService from '../../services/ProductService';
import ProductInventory from './ProductInventory';
import Loader from '../../components/common/Loader';
import Tag from '../../components/common/Tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faHistory } from '@fortawesome/free-solid-svg-icons';
import Notification from '../../components/common/Notification';

/************************************
 * * Product List | Card View
 ************************************/

export default function ProductsCard() {
  const [products] = ProductService();
  const [view, setView] = useState();

  // * Modal State Handlers | Until API's done
  const [addModal, showAddModal] = useState(false);
  const [editModal, showEditModal] = useState(false);
  const [deleteModal, showDeleteModal] = useState(false);

  const Modals = () => {
    return (
      <>
        <AddProduct
          show={addModal}
          onHide={() => showAddModal(false)}
          submit={() => showAddModal(false)}
          cancel={() => showAddModal(false)}
        />
        <EditProduct
          show={editModal}
          onHide={() => showEditModal(false)}
          submit={() => showEditModal(false)}
          cancel={() => showEditModal(false)}
        />
        <DeleteProduct
          show={deleteModal}
          onHide={() => showDeleteModal(false)}
          save={() => showDeleteModal(false)}
          close={() => showDeleteModal(false)}
        />
      </>
    );
  };

  const ProductCard = (product) => {
    return (
      <CardDeck
        action={() => showEditModal(true)}
        key={product._id}
        title={
          <>
            {product.name}{' '}
            <Tag variant="primary" content={<>₱{product.price}</>} />
          </>
        }
        variant="dark"
        content={
          <>
            <Tag variant="info" content={product.variant} />{' '}
            {(() => {
              if (product.quantity <= 10) {
                return (
                  <Tag
                    variant="danger"
                    content={<>Qty. {product.quantity}</>}
                  />
                );
              } else if (product.quantity <= 20) {
                return (
                  <Tag
                    variant="warning"
                    content={<>Qty. {product.quantity}</>}
                  />
                );
              } else if (product.quantity <= 300) {
                return (
                  <Tag
                    variant="success"
                    content={<>Qty. {product.quantity}</>}
                  />
                );
              } else {
                return (
                  <Tag variant="dark" content={<>Qty. {product.quantity}</>} />
                );
              }
            })()}
          </>
        }
        footer={
          <>
            <Tag variant="dark" content={product.category} />{' '}
            <Tag variant="dark" content={product.type} />
          </>
        }
        date={
          <>
            <FontAwesomeIcon icon={faCalendarAlt} />{' '}
            <Moment format="D MMM YYYY" date={product.createdAt} fromNow />
            {' | '}
            <FontAwesomeIcon icon={faHistory} />{' '}
            <Moment fromNow date={product.updatedAt} />
          </>
        }
      />
    );
  };

  // * Removes duplicate properties | category
  const productCategories =
    products &&
    products
      .filter(
        (items, index, self) =>
          index ===
          self.findIndex((deduped) => deduped.category === items.category)
      )
      // Sort items
      .reverse();

  // * Removes duplicate properties | type
  const productTypes =
    products &&
    products
      .filter(
        (items, index, self) =>
          index === self.findIndex((deduped) => deduped.type === items.type)
      )
      // Sort items
      .reverse();

  // * Filter products by category
  const CategoryFilter = () => {
    return (
      <>
        {products && true ? (
          <>
            {products &&
              productCategories.map((categories) => (
                <Tab.Pane
                  key={categories.category}
                  eventKey={categories.category}
                >
                  {products
                    .filter((pane) => pane.category === categories.category)
                    .map((product) => ProductCard(product))}
                </Tab.Pane>
              ))}
          </>
        ) : (
          <Loader />
        )}
      </>
    );
  };
  // * Filter products by types
  const TypeFilter = () => {
    return (
      <>
        {products && true ? (
          <>
            {products &&
              productTypes.map((types) => (
                <Tab.Pane key={types.type} eventKey={types.type}>
                  {products
                    .filter((pane) => pane.type === types.type)
                    .map((product) => ProductCard(product))}
                </Tab.Pane>
              ))}
          </>
        ) : (
          <Loader />
        )}
      </>
    );
  };

  // * Display cards based on clicked product category/type
  const ProductCards = () => {
    return (
      <>
        <Modals />
        {/* Inventory Tab Controls */}
        <SearchControls
          add="Add Product"
          listView={() => setView('list')}
          modal={() => showAddModal(true)}
        />
        {/* Filtered Tables */}
        <Tab.Pane eventKey="default">
          {products && products.map((product) => ProductCard(product))}
        </Tab.Pane>
        <CategoryFilter />
        <TypeFilter />
      </>
    );
  };

  if (view === 'list') {
    return <ProductInventory />;
  }
  return (
    <>
      {/* Display 'categories' component */}
      <Categories
        main="Categories"
        mainTabs={
          products &&
          productCategories.map((product) => (
            <Nav.Item key={product.category}>
              <Nav.Link eventKey={product.category}>
                {product.category}
              </Nav.Link>
            </Nav.Item>
          ))
        }
        secondary="Types"
        secondaryTabs={
          products &&
          productTypes.map((product) => (
            <Nav.Item key={product.type}>
              <Nav.Link eventKey={product.type}>{product.type}</Nav.Link>
            </Nav.Item>
          ))
        }
        content={<ProductCards />}
      />
      <Notification
        delay={7000}
        title="Notice"
        time="System Admin"
        message="Card view currently has limited functionality compared to List/Table view."
      />
    </>
  );
}
