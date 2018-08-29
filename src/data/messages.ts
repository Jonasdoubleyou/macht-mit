import * as Store from "./../store";
import landkreise from "./landkreise";
import * as Abgeordnete from "./abgeordnete_niedersachsen";
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
    text: "Na dann kannst du sie ja jetzt kennenlernen!",
    next: "choose_representative",
  },
  choose_representative: {
    text: "In welchem Wahlkreis lebst du?",
    choices: landkreise,
    storeAs: "wahlkreis",
    next: "show_representative",
  },
  show_representative: {
    get text() {
      const wahlkreis = Store.get("wahlkreis");
      const abgeordneter = Abgeordnete.byWahlkreis[wahlkreis];
      return `Dein Abgeordneter in ${wahlkreis} ist ${abgeordneter.name} von der ${abgeordneter.party}. \n Dein Abgeordneter wurde von ${abgeordneter.votes}% der Bürger gewählt.`;
    },
    next: "representative_img",
  },
  representative_img: {
    get src() {
      const abgeordneter = Abgeordnete.byWahlkreis[Store.get("wahlkreis")];
      return abgeordneter.img;
    },
    next: "contact_representative",
  },
  contact_representative: {
    text: "So kannst du deinen Abgeordneten kontaktieren:",
    get answers() {
      const answers = [{
        text: "nee lass mal!",
        next: "congrats"
      }];
      const abgeordneter = Abgeordnete.byWahlkreis[Store.get("wahlkreis")];

      if(abgeordneter.email)
        answers.push({
          text: "Schreib ihm eine Email mit deinen Wünschen!",
          next: "email_representative",
        });

      if(abgeordneter.phone)
        answers.push({
          text: "Ruf ihn an!",
          next: "call_representative",
        });

      if(abgeordneter.website)
        answers.push({
          text: "Schau dir seine Website an!",
          next: "representative_web",
        });

      if(abgeordneter.address)
        answers.push({
          text: "Schreib ihm einen Brief / Besuch ihn!",
          next: "write_representative",
        })

      return answers;
    }
  },

  email_representative: {
    get text() {
      const abgeordneter = Abgeordnete.byWahlkreis[Store.get("wahlkreis")];
      return `Willst du wirklich eine Email an ${abgeordneter.email} schicken? Hast du ein konkretes Anliegen?`;
    },

    answers: [
      {
        text: "Ja!",
        onClick(continuation: () => void) {
          const abgeordneter = Abgeordnete.byWahlkreis[Store.get("wahlkreis")];
          window.location.href = `mailto:${abgeordneter.email}`;
          continuation();
        },
        next: "congrats",
      },
      {
        text: "Nein",
        next: "congrats",
      }
    ],
  },

  call_representative: {
    get text() {
      const abgeordneter = Abgeordnete.byWahlkreis[Store.get("wahlkreis")];
      return `Willst du wirklich deinen Abgeordneten unter ${abgeordneter.phone} anrufen? Hast du ein konkretes Anliegen?`;
    },

    answers: [
      {
        text: "Ja! Es ist dringend!",
        onClick(continuation: () => void) {
          const abgeordneter = Abgeordnete.byWahlkreis[Store.get("wahlkreis")];
          continuation();
        },
        next: "congrats",
      },
      {
        text: "Nee lass mal...",
        next: "congrats",
      }
    ]

  },

  representative_web: {
    get text() {
      const abgeordneter = Abgeordnete.byWahlkreis[Store.get("wahlkreis")];
      return `Willst du wirklich die Webseite ""${abgeordneter.website}"" besuchen?`;
    },

    answers: [
      {
        text: "Ja!",
        onClick(continuation: () => void) {
          const abgeordneter = Abgeordnete.byWahlkreis[Store.get("wahlkreis")];
          window.location.href = "http://" + abgeordneter.website;
          continuation();
        },
        next: "congrats",
      },
      {
        text: "Nein...",
        next: "congrats",
      }
    ],
  },

  write_representative: {
    get text() {
      const abgeordneter = Abgeordnete.byWahlkreis[Store.get("wahlkreis")];
      return `Die Adresse lautet: \n\n ${abgeordneter.address}`
    },
    answers: [
      {
        text: "Okay, weiter gehts!",
        next: "congrats",
      }
    ]
  },

  congrats: {
    text: "Herzlichen Glückwunsch!\n Wir sind stolz, Mitbürger wie dich zu haben, die Demokratie leben und aktiv daran arbeiten, das schönste Bundesland noch lebenswerter zu gestalten!\n Unser Dialog ist damit mehr oder weniger zu Ende ...",
    answers: [
      {
        text: "Geb uns Feedback!",
        next: "???",
      },
      {
        text: "Wer seid ihr überhaupt?",
        next: "???",
      },
      {
        text: "Tschüss!",
        onClick() {
          window.close();
        }
      }
    ]
  }

};

export default messageByID;
