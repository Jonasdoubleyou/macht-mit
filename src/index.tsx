import * as React from "react";
import * as ReactDOM from "react-dom";

import "./styles.css";

import {Message, MessageUI} from "./message/index";
import * as Store from "./store";
import track from "./tracking";

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
      <div className="placeholder"></div>
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
    // that simplifies development
    console.log("addMessage", id, messageByID[id]);
    // track every user action ... (except private data)
    track(id);
    // then update the UI
    if(messageByID[id])
      this.setState(
        ({ messages }) => ({ messages: messages.concat(messageByID[id]) }),
        // If the message was added, scroll down to keep it in view:
        () => {
          window.scrollBy({
            top: 100000, // should be enough to go down to bottom
            left: 0,
            behavior: "smooth",
          });
        }
      );
  }
}

window.addEventListener("load", () => {
  // Mount the app
  ReactDOM.render(<App start={"start"} />, document.body);
});
