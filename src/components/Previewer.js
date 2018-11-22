import React from 'react';

const Previewer = props => {
  function createMarkup() {
    return {
      __html: props.html
    };
  }

  return (
    <div id="previewer">
      <div id="preview-topbar">Preview:</div>
      <div id="preview" dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
};

export default Previewer;
