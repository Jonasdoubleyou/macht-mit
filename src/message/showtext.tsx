import * as React from "react";

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
    const {speed = 50} = this.props;
    this.timer = setInterval(() => this.update(), speed);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  update() {
    const { position } = this.state;
    const { text, done = () => 0 } = this.props;
    if(position >= text.length) {
      clearInterval(this.timer);
      done();
      return;
    }

    this.setState(({ position}) => ({ position: position + 1}));
  }

  render() {
    const { text } = this.props;
    const { position } = this.state;

    return <span>{text.slice(0, position)}</span>;
  }
}
