/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
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

import { StrictMode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ReactDOM from 'react-dom';
import Login from './pages/Login';
import 'global.scss';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // * Set cache max age
      cacheTime: 60000 // ? ms
    }
  }
});

ReactDOM.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Login />
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById('root')
);
