/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy, Suspense, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import SearchControls from '../../components/SearchControls';
import Categories from '../../components/sidebar/Categories';
import { CardDeck } from '../../components/cards/CardOverlay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faHistory } from '@fortawesome/free-solid-svg-icons';
import { Fallback } from '../../components/common/Loader';
import { productCategories, productTypes } from './ProductFilters';
import ResetScroll from '../../components/ResetScroll';
import Tag from '../../components/common/Tag';
import Notification from '../../components/common/Notification';
import ProductService from '../../services/ProductService';

// * Lazy imports
const ProductModals = lazy(() => import('./ProductModals'));
const Moment = lazy(() => import('react-moment'));

/************************************
 * * Product List | Card View
 ************************************/

export default function ProductsCard(props) {
  const { data } = ProductService();

  // * Modal State Handlers | Until API's done
  const [addModal, showAddModal] = useState(false);
  const [editModal, showEditModal] = useState(false);
  const [deleteModal, showDeleteModal] = useState(false);

  const Modals = () => {
    return (
      <Suspense fallback="">
        <ProductModals
          addModal={addModal}
          editModal={editModal}
          deleteModal={deleteModal}
          addHide={() => showAddModal(false)}
          addSubmit={() => showAddModal(false)}
          addCancel={() => showAddModal(false)}
          editHide={() => showEditModal(false)}
          editSubmit={() => showEditModal(false)}
          editCancel={() => showEditModal(false)}
          deleteHide={() => showDeleteModal(false)}
          deleteSubmit={() => showDeleteModal(false)}
          deleteCancel={() => showDeleteModal(false)}
        />
      </Suspense>
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
            <Suspense fallback="—">
              <Moment format="D MMM YYYY" date={product.createdAt} fromNow />
            </Suspense>
            {' | '}
            <FontAwesomeIcon icon={faHistory} />{' '}
            <Suspense fallback="—">
              <Moment fromNow date={product.updatedAt} />
            </Suspense>
          </>
        }
      />
    );
  };

  // * Filter products by category
  const CategoryFilter = () => {
    return (
      <>
        {data &&
          productCategories(data).map((categories) => (
            <Tab.Pane key={categories.category} eventKey={categories.category}>
              <ResetScroll />
              {data
                .filter((pane) => pane.category === categories.category)
                .map((product) => ProductCard(product))}
            </Tab.Pane>
          ))}
        )}
      </>
    );
  };
  // * Filter products by types
  const TypeFilter = () => {
    return (
      <>
        {data &&
          productTypes(data).map((types) => (
            <Tab.Pane key={types.type} eventKey={types.type}>
              <ResetScroll />
              {data
                .filter((pane) => pane.type === types.type)
                .map((product) => ProductCard(product))}
            </Tab.Pane>
          ))}
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
          listView={props.view}
          modal={() => showAddModal(true)}
        />

        {data && true ? (
          <>
            <Tab.Pane eventKey="default">
              <ResetScroll />
              {data && data.map((product) => ProductCard(product))}
            </Tab.Pane>
            <CategoryFilter />
            <TypeFilter />
          </>
        ) : (
          <Fallback />
        )}
      </>
    );
  };

  return (
    <>
      {/* Display 'categories' component */}
      <Categories
        main="Categories"
        mainTabs={
          data &&
          productCategories(data).map((product) => (
            <Nav.Item key={product.category}>
              <Nav.Link eventKey={product.category}>
                {product.category}
              </Nav.Link>
            </Nav.Item>
          ))
        }
        secondary="Types"
        secondaryTabs={
          data &&
          productTypes(data).map((product) => (
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
