import * as React from "react";

import { Props, Message } from "./index";

import ShowText from "./showtext";

export interface MultipleChoice extends Message {
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

export function isMultipleChoice(message: Message): message is MultipleChoice {
  // If it got answers, it is a question
  return !!(message as any).answers;
}

interface State {
    // Gets set after the user answered the dialogue
    chosen?: string;
    // Should be set after the question was asked
    showAnswers?: true;
}

export class MultipleChoiceUI extends React.Component<MultipleChoice & Props, State> {

  render() {
    const {text, answers, continuation} = this.props;
    const { chosen = "", showAnswers = false } = this.state || {};

    const question = <div className="notification">
      <ShowText text={text} done={() => this.setState({ showAnswers: true })} />
    </div>;

    if(!showAnswers)
      return question;

    // The buttons contain the answers, one is highlighted if chosen
    const buttons = answers.map(({text, next}) =>
      <div
        className = {chosen === text ? "button chosen" : "button"}
        onClick={() => {
          if(chosen) return;
          continuation(next);
          this.setState({ chosen: text });
        }}

      >{text}</div>
    );

    return [question, <div className="button-container">{buttons}</div>];
  }
}
