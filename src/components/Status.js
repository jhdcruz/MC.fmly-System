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

import { useState } from 'react';
import axios from 'axios';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

export default function Status(props) {
  const [status, setStatus] = useState(500);

  // * Poke server to check for status
  const checkServer = axios
    .get(`/api/auth/status`)
    .then((res) => {
      if (res.status === 200) {
        setStatus(200);
      } else {
        setStatus(500);
      }
    })
    .catch((err) => {
      console.error(err);
      setStatus(500);
    });

  // Set notice based on response
  const ServerStatus = () => {
    if (status === 200) {
      return <p className="m-0">System is operational.</p>;
    } else {
      return <p className="m-0">System is currently down.</p>;
    }
  };

  // * Display Status Icon based on response
  const StatusDisplay = () => {
    if (status === 200) {
      return (
        <FontAwesomeIcon
          icon={faCircle}
          style={{
            color: '#4de670',
            boxShadow: '0 0 7px 5px rgba(77, 230, 112, 0.4)',
            borderRadius: '100%'
          }}
        />
      );
    }
    return (
      <FontAwesomeIcon
        icon={faCircle}
        style={{
          color: '#ec2738',
          boxShadow: '0 0 7px 5px rgba(236, 39, 56, 0.4)',
          borderRadius: '100%'
        }}
      />
    );
  };

  return (
    <div
      style={{
        position: 'absolute',
        bottom: '1.5rem',
        right: '1.5rem'
      }}
      onLoad={() => checkServer}
    >
      <OverlayTrigger
        placement={props.placement}
        delay={{
          show: 100,
          hide: 300
        }}
        overlay={
          <Tooltip id="">
            <ServerStatus />
          </Tooltip>
        }
      >
        <Button
          type="button"
          style={{
            backgroundColor: 'transparent',
            border: 'none'
          }}
        >
          <StatusDisplay />
        </Button>
      </OverlayTrigger>
    </div>
  );
}
