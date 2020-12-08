/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { useEffect, useState } from 'react';
import axios from 'axios';

// Probe server
async function probe() {
  let res = await axios.get(`https://mc-ims-api.herokuapp.com/auth/status`);
  return res.status || 500;
}

export default function ApiService() {
  const [status, setStatus] = useState();

  useEffect(() => {
    if (!status) {
      probeServer().catch((e) => {
        console.error(e);
      });
    }
  }, [status]);

  const probeServer = async () => {
    return await probe().then((res) => {
      // * Set response to `status`
      setStatus(res);
    });
  };

  return status;
}
