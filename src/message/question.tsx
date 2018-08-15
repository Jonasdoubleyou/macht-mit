import * as React from "react";

import { Props, Message } from "./index";

export interface Question extends Message {
  // the question:
  text: string;
  // All the possible answers:
  answers: Answer[];
}

export interface Answer {
  text: string;
  // the message to show if this answer is chosen:
  next: string;
}

export class QuestionUI extends React.Component<Question & Props, {}> {
  render() {
    const {text, answers, continuation} = this.props;

    return <div className="notification">
      {text}
    </div>;
  }
}
