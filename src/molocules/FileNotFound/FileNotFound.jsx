import React from 'react';

import Button from 'atoms/Button'
import Page from 'components/Page'

import './file-not-found.scss'

function FileNotFound(props) {
  return (
    <Page className="file-not-found">
      <h1>404 File Not Found</h1>
      <div>
        <Button type="link" to="/" primary>
          Home
        </Button>
      </div>
    </Page>
  );
}

export default FileNotFound;