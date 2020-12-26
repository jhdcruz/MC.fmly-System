/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy, Suspense, useState } from 'react';
import { Fallback, Loader } from '../../components/common/Loader';
import ResetScroll from '../../components/ResetScroll';
import CardDeck from 'react-bootstrap/CardDeck';
import SearchControls from '../../components/SearchControls';
import SupplierService from '../../services/SupplierService';

const Poster = lazy(() => import('../../components/cards/Poster'));
const SupplierModals = lazy(() => import('./SupplierModals'));

// TODO: Add <Categories /> by types
export default function SuppliersCard(props) {
  const { data } = SupplierService();

  // * Modal State Handlers | Until API's done
  const [addModal, showAddModal] = useState(false);
  const [editModal, showEditModal] = useState(false);
  const [deleteModal, showDeleteModal] = useState(false);

  // * Modals
  const Modals = () => {
    return (
      <Suspense fallback={<Loader />}>
        <SupplierModals
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

  const PosterCard = (supplier) => {
    return (
      <Suspense fallback={<Loader />}>
        <Poster
          key={supplier._id}
          delete={() => showDeleteModal(true)}
          edit={() => showEditModal(true)}
          icon={supplier.icon}
          name={supplier.name}
          description={supplier.description}
          type={supplier.type}
          address={supplier.address}
          website={supplier.website}
          contact={supplier.contact}
        />
      </Suspense>
    );
  };

  const SupplierCard = () => {
    return (
      <CardDeck
        style={{
          margin: '0 0.5rem 1rem',
          padding: '1rem',
          overflow: 'auto'
        }}
      >
        {/* Render <Loading /> while fetching suppliers */}
        {data && true ? (
          <>
            <ResetScroll />
            {data && data.map((supplier) => PosterCard(supplier)).reverse()}
          </>
        ) : (
          <Fallback />
        )}
      </CardDeck>
    );
  };

  return (
    <div className="overflow-auto pt-5">
      <Modals />
      <SearchControls
        add="Add Supplier"
        listView={props.view}
        modal={() => showAddModal(true)}
      />

      <SupplierCard />
    </div>
  );
}
