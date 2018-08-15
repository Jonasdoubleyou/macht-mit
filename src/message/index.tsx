import * as React from "react";

import {Notification, NotificationUI} from "./notification";
import {Question, QuestionUI} from "./question";

export interface Message {
  id: string;
  text: string;
}

export interface Props {
  continuation?: (next: string) => void;
}

function isQuestion(message: Message): message is Question {
  // If it got answers, it is a question
  return !!(message as any).answers;
}

function isNotification(message: Message): message is Notification {
  return !!(message as any).next;
}


export const MessageUI = (props: Message & Props) => {
  if(isQuestion(props))
    <QuestionUI {...props} />;

  if(isNotification(props))
    return <NotificationUI {...props} />;

  return <div>Fehler. Sorry.</div>;
}
