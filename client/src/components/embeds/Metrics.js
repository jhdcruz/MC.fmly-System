/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 */

import styled from 'styled-components';

/*****************************************************
 * * Embed MongoDB Atlas Metrics (Datadog)
 *****************************************************/

const Frame = styled.iframe`
  width: 100% !important;
  height: 97vh !important;
  background: #222126;
  border: none;
  box-shadow: 0 3px 6px #232323;

  iframe.webform-frame {
    background-color: #222126 !important;
    overflow: hidden !important;
  }
`;

export const DBMetrics = () => {
  return (
    <Frame
      sandbox="allow-pointer-lock allow-same-origin allow-scripts"
      src="https://p.datadoghq.com/sb/iiar95vh75yuvxwz-4f36a4b929487e20c789f3c806178482?theme=dark"
    />
  );
};
