/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Button from 'react-bootstrap/Button';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import ApiService from '../services/ApiService';

/*********************************
 * * Server Status Display Icon
 *********************************/

export default function Status(props) {
  const status = ApiService();

  // * Set tooltip notice based on response
  const ServerStatus = () => {
    if (status === 200) {
      return <p className="m-0">System is operational.</p>;
    } else {
      return <p className="m-0">System is currently down.</p>;
    }
  };

  // * Display Status Icon based on response
  const StatusDisplay = () => {
    return (
      <>
        {/* TODO: Avoid component re-renders */}
        {status === 200 ? (
          <FontAwesomeIcon
            icon={faCircle}
            style={{
              color: '#4de670',
              boxShadow: '0 0 7px 5px rgba(77, 230, 112, 0.4)',
              borderRadius: '100%',
              outline: 'none !important'
            }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faCircle}
            style={{
              color: '#ec2738',
              boxShadow: '0 0 7px 5px rgba(236, 39, 56, 0.4)',
              borderRadius: '100%',
              outline: 'none !important'
            }}
          />
        )}
      </>
    );
  };

  return (
    <div
      style={{
        position: 'absolute',
        bottom: '1rem',
        left: '0.8rem'
      }}
    >
      <OverlayTrigger
        placement="right"
        delay={{
          show: 100,
          hide: 300
        }}
        overlay={
          <Tooltip id="server-status">
            <ServerStatus />
          </Tooltip>
        }
      >
        <Button
          type="button"
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            boxShadow: 'none'
          }}
        >
          <StatusDisplay />
        </Button>
      </OverlayTrigger>
    </div>
  );
}
