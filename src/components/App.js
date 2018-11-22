import React from 'react';
import marked from 'marked';

import Editor from './Editor';
import Previewer from './Previewer';

import demoMarkdown from '../demoMarkdown';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: demoMarkdown
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }
  handleChange(event) {
    this.setState({
      markdown: event.target.value
    });
  }
  handleEnter(event) {
    if (event.key === 'Enter') {
      // get current element and cursor position
      const element = event.target;
      const position = element.selectionStart;
      // insert linebreak
      const newMarkdown = `${this.state.markdown.slice(
        0,
        position
      )}<br>${this.state.markdown.slice(position)}`;
      this.setState(
        {
          markdown: newMarkdown
        },
        // set cursorposition to added character after state is set
        () => {
          element.setSelectionRange(position + 4, position + 4);
        }
      );
    }
  }
  render() {
    // setup opening links on new tabs
    const renderer = new marked.Renderer();
    const linkRenderer = renderer.link;
    renderer.link = (href, title, text) => {
      const html = linkRenderer.call(renderer, href, title, text);
      return html.replace(/^<a /, '<a target="_blank" rel="nofollow" ');
    };

    return (
      <div id="markdown-previewer">
        <Editor
          markdown={this.state.markdown}
          handleChange={this.handleChange}
          // set to 'handleEnter' for my own solution to inserting linebreaks
          handleEnter={this.handleChange}
        />
        <Previewer
          html={marked(this.state.markdown, {
            renderer,
            gfm: true,
            breaks: true
          })}
        />
      </div>
    );
  }
}

export default App;
