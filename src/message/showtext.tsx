import * as React from "react";

interface Props {
  text: string;
  speed?: number;
  done?: () => void;
}

interface State {
  position: number;
}

// Make newlines and highlight certain passages, returns a JSX collection
// one\ntwo -> one<br>two
// one *highlight* two -> one <span class="highlight">highlight</span> two
function format (text: string): (string | JSX.Element)[] {
  const rows = text.split("\n");
  const result: (string | JSX.Element)[] = [];

  for(const row of rows) {
    let inside = false;
    for(const part of row.split("*")) {
      if(inside) {
        result.push(<span className="highlight">{part}</span>);
      } else {
        result.push(part);
      }
      inside = !inside;
    }
    result.push(<br/>);
  }

  return result;
}


export default class ShowText extends React.Component<Props, State> {
  state = { position: 0 };

  timer: NodeJS.Timer;

  componentDidMount() {
    const {speed = 35} = this.props;
    this.timer = setInterval(() => this.update(), speed);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  update() {
    this.setState(({ position }) => {
      const { text, done = () => 0 } = this.props;
      if(position >= text.length) {
        clearInterval(this.timer);
        done();
        return;
      }

      // jump over whitespaces as that otherwise jiggles the text during animation
      while(text[position] && text[position] == " ")
        position++;

      console.log(text.slice(0, position));

      return { position: position + 1};
    });
  }

  render() {
    const { text } = this.props;
    const { position } = this.state;

    return <span>{format(text.slice(0, position))}</span>;
  }
}
