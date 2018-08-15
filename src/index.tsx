import * as React from "react";
import * as ReactDOM from "react-dom";

import "./styles.css";

import {Message, MessageUI} from "./message/index";

interface AppState {
  messages: Message[];
}

const messageByID: {[id: string]: any} = {
  start: {
    text: "\n\n\nMacht mit! Niedersachsen\n\n\n",
    headline: true,
    time: 500,
    next: "moin",
  },
  moin: {
    text: "Moin!",
    time: 500,
    next: "intro",
  },
  intro: {
    text: "Kennst du einen deiner Abgeordneten?",
    time: 60 * 1000,
     next: "???", // TODO: continue this story
  }
};

class App extends React.Component<{start: string}, AppState> {

  state: AppState = ({ messages: [] });

  componentDidMount() {
    const { start } = this.props;
    this.setState({ messages: [messageByID[start]] });
  }
  render() {
    return <div id="app">
      {this.getMessages()}
    </div>;
  }

  getMessages() {
    const { messages } = this.state;

    return messages.map((message, index) => {
      if(index < messages.length - 1) {
        return <MessageUI {...message} />;
      } else {
        return <MessageUI {...message} continuation={next => this.addMessage(next)} />;
      }
    })
  }

  addMessage(id: string) {
    if(messageByID[id])
      this.setState(({ messages }) => ({ messages: messages.concat(messageByID[id]) }));
  }
}

ReactDOM.render(<App start={"start"} />, document.body);
