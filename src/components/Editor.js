import React from 'react';

const Editor = props => {
  return (
    <div id="editor-wrapper">
      <div id="editor-topbar">Input your Markdown here:</div>
      <textarea
        id="editor"
        type="text"
        value={props.markdown}
        onChange={props.handleChange}
        onKeyUp={props.handleEnter}
      />
    </div>
  );
};

export default Editor;
