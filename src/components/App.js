import React from 'react';
import DeveloperDetail from './DeveloperDetail';
import DevelopersList from './DevelopersList';

const App = () => {
  return (
    <div className="container redux-example">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <DevelopersList />
        </div>
        <div className="col-md-4 col-sm-12">
          <DeveloperDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
