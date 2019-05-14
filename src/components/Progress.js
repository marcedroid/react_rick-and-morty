import React from 'react';

function Progress() {
  return (
    <div className="column is-half is-offset-one-quarter">
      <progress className="progress is-small is-primary" max="100" />
    </div>
  );
}

export default Progress;
