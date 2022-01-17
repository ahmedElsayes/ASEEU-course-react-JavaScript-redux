import React from 'react';
import DeveloperDetail from './DeveloperDetail';
import DevelopersList from './DevelopersList';
import PostsList from './PostsList';

const App = () => {
  return (
    <div className="container redux-example">
      <div className="row mb-5">
        <div className="col-md-6 col-sm-12">
          <DevelopersList />
        </div>
        <div className="col-md-4 col-sm-12">
          <DeveloperDetail />
        </div>
      </div>
      <div className="row mb-5">
        <PostsList />
      </div>
    </div>
  );
};

export default App;
