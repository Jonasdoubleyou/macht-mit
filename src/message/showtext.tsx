import * as React from "react";
import format from "./textFormatting";

interface Props {
  text: string;
  speed?: number;
  done?: () => void;
}

interface State {
  position: number;
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
