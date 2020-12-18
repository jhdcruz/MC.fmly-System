/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import styled from 'styled-components';
import { Loader } from '../common/Loader';

/*****************************************************
 * * Embed API Logs (LogDNA)
 *****************************************************/

const LogContainer = styled.div`
  width: 95.95vw;
  height: max-content;
  overflow: hidden !important;
  padding: 0;

  iframe {
    height: 93.2vh;
  }
`;

export default function Logs() {
  return (
    <LogContainer>
      <blockquote
        className="logdna-embed"
        data-embed-id="d126b062b1"
        data-embed-org="f5de57b7a2"
        data-embed-signature="d8c4fecd3cc97523a26e58ae11eb1a32752adb9d7b7393fa4257153c608acee9800226681653f864ab20c28ced34adf0bff737217dad8ecc86cb0f7a65082e5c"
        rel="prefetch"
      >
        <h4>
          <a
            href="https://app.logdna.com/ext/embed-link/f5de57b7a2/d126b062b1"
            rel="prefetch"
          >
            <Loader />
          </a>
        </h4>
      </blockquote>
    </LogContainer>
  );
}
