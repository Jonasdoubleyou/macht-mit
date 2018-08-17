import * as React from "react";
import * as ReactDOM from "react-dom";

import "./styles.css";

import {Message, MessageUI} from "./message/index";
import * as Store from "./store";

import landkreise from "./data/landkreise";
import messageByID from "./data/messages";

interface AppState {
  messages: Message[];
}

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
