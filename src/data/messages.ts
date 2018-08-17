import * as Store from "./../store";
import landkreise from "./landkreise";

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
    text: "Kennst du deine Abgeordneten?",
    answers: [
      {
        text: "Ja klar!",
        next: "knows_representative"
      },
      {
        text: "Nein",
        next: "doesnt_know_representative"
      }
    ]

  },
  knows_representative: {
    text: "Klasse! Willst du mehr über sie wissen?",
    answers: [
      {
        text: "Ja!",
        next: "choose_representative"
      },
      {
        text: "Nein!",
        next: "why_not",
      }
    ]
  },
  why_not: {
    text: "Wieso nicht? \n Es sind schließlich *deine* Abgeordneten die *dich* repräsentieren!",
    answers: [
      {
        text: "Ich mag sie nicht!",
        next: "doesnt_like_representatives",
      },
      {
        text: "Ist mir egal",
        next: "reasons_for_participating",
      }
    ],
  },
  reasons_for_participating: {
    text: "Das ist schade. Demokratie lebt schließlich davon, dass jeder mitmacht!",
    next: "???",
  },
  doesnt_like_representatives: {
    text: "Okay, aber es gibt trotzdem viele Möglichkeiten dich anderweitig einzubringen, und dafür zu Sorgen, das deine Stimme zählt.",
    next: "???",
  },
  doesnt_know_representative: {
    text: "Na dann kannst du ihn ja jetzt kennenlernen!",
    next: "choose_representative",
  },
  choose_representative: {
    text: "In welchem Wahlkreis lebst du?",
    choices: landkreise,
    storeAs: "landkreis",
    next: "show_representative",
  },
  show_representative: {
    get text() {
      return `Dein Abgeordneter in ${Store.get("landkreis")} ist {jemand}`;
    },
    next: "???",
  }
};

export default messageByID;
