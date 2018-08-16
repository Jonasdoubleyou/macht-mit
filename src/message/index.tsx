import * as React from "react";

import {Notification, NotificationUI} from "./notification";
import {MultipleChoice, MultipleChoiceUI} from "./multiplechoice";

export interface Message {
  id: string;
  text: string;
}

export interface Props {
  continuation?: (next: string) => void;
}

function isMultipleChoice(message: Message): message is MultipleChoice {
  // If it got answers, it is a question
  console.log(!!(message as any).answers);
    return !!(message as any).answers;
}

function isNotification(message: Message): message is Notification {
  return !!(message as any).next;
}


export const MessageUI = (props: Message & Props) => {
  if(isMultipleChoice(props))
    return <MultipleChoiceUI {...props} />;

  if(isNotification(props))
    return <NotificationUI {...props} />;

  return <div>Fehler. Sorry.</div>;
}
