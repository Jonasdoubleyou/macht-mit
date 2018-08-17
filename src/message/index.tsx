import * as React from "react";

import {Notification, NotificationUI, isNotification} from "./notification";
import {MultipleChoice, MultipleChoiceUI, isMultipleChoice} from "./multiplechoice";
import {InputChoice, InputChoiceUI, isInputChoice} from "./inputchoice";
import {Image, ImageUI, isImage} from "./image";

export interface Message {
  id: string;
  text: string;
}

export interface Props {
  continuation?: (next: string) => void;
}




export const MessageUI = (props: Message & Props) => {
  if(isMultipleChoice(props))
    return <MultipleChoiceUI {...props} />;

  if(isInputChoice(props))
    return <InputChoiceUI {...props} />;

  if(isImage(props))
    return <ImageUI {...props} />;

  if(isNotification(props))
    return <NotificationUI {...props} />;

  return <div>Fehler. Sorry.</div>;
}
