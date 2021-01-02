/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { useEffect } from 'react';

export default function ResetScroll() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
