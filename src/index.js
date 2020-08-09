import React from "react";
import ReactDOM from "react-dom";
import marked from "marked";

const initalState = `
# Headin 1
## Heading 2
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.
- list item 1
- list item 2
- list item 3
Inline-style: 
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

hello \`<div></div>\`

\`\`\`
x=2+3+4;
y=2+3+4;
\`\`\`

**asterisks** or __underscores__

[visit my website](https://www.youtube.com/watch?v=CJt7uZD_iK0)
`;
class App extends React.Component {
  state = {
    text: initalState
  };
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };
  render() {
    const { text } = this.state;
    const markdown = marked(text, { breaks: true });
    return (
      <div>
        <row>
          <textarea id="editor" value={text} onChange={this.handleChange} />
        </row>
        <br />
        <br />
        <row>
          <div id="preview" dangerouslySetInnerHTML={{ __html: markdown }} />
        </row>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
