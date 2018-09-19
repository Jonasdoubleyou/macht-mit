import * as Store from "./../store";
import track from "./../tracking";

import landkreise from "./landkreise";
import * as Abgeordnete from "./abgeordnete_niedersachsen";

// a small helper to to write the continuation click handler more elegantly:
const trackClick = (event: string, meta?: {}) => (continuation: () => void) => {
 continuation();
 track(event, meta);
}


const messageByID: {[id: string]: any} = {
  start: {
    type: "popup",
    text: "_Datenschutz_",
    popupText: "*Was wir nicht sammeln:*\n\n Wir sammeln keinerlei personenbezogende Daten!\n Ohne wenn und aber. Niemand außer dir weiß, dass du unsere Seite besuchst und hier Fragen beantwortest.\nNatürlich weiß das allerdings dein Internetanbieter und der Serverhoster, so ist nunmal das Internet.\n\n*Was wir sammeln:*\n\n Wir sammeln anonyme Nutzerstatistiken (z.B.: Wie viele Nutzer haben auf 'Ja!' und dann 'Nein' geklickt), damit wir unseren Erfolg / Misserfolg bewerten / feiern / kritisch hinterfragen können. Wenn du uns ein Feedback schreibst, erreicht uns das natürlich auch ... \n\nWir finden es übrigens klasse, dass du dich für deine Privatsphäre interessierst!",
    time: 0,
    next: "logo",
  },

  logo: {
    src: "icons/ms-icon-150x150.png",
    noBorder: true,
    time: 0,
    next: "headline",
  },

  headline: {
    text: "Macht mit! Niedersachsen\n",
    headline: true,
    time: 4000,
    next: "moin",
  },

  moin: {
    text: "Moin!",
    time: 500,
    next: "intro",
  },

  intro: {
    text: "Kennst du deinen Abgeordneten im niedersächsischen Landtag?",
    answers: [
      {
        text: "Ja klar!",
        next: "knows_representative"
      },
      {
        text: "Nein",
        next: "doesnt_know_representative"
      },
      {
        text: "Leider Ja, ich mag ihn nicht so...",
        next: "doesnt_like_representatives",
      }
    ]

  },

  knows_representative: {
    text: "Klasse! Willst du mehr über ihn wissen oder mal mit ihm schnacken?",
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
    text: "Wieso nicht? \n Es ist schließlich *dein* Abgeordneter der *dich* repräsentiert!",
    answers: [
      {
        text: "Ich mag ihn nicht!",
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
    text: "Und gerade deswegen solltest du mit ihm sprechen, um dich mit ihm auszutauschen.\n Wer weiß was dabei herauskommt...",// "Okay, aber es gibt trotzdem viele Möglichkeiten dich anderweitig einzubringen, und dafür zu sorgen, dass deine Stimme zählt.",
    answers: [
      {
        text: "Okay, warum nicht ... ?",
        next: "choose_representative",
      },
      {
        text: "Nein, mit dem kann man nicht reden!",
        next: "next_elections",
      }
    ]
  },

  doesnt_know_representative: {
    text: "Na dann kannst du ihn ja jetzt kennenlernen!",
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
      return `Dein Abgeordneter in ${wahlkreis} ist ${abgeordneter.name} von der ${abgeordneter.party}. \nEr wurde von ${abgeordneter.votes}% der Bürger gewählt.`;
    },
    next: "representative_img",
  },

  representative_img: {
    get src() {
      const abgeordneter = Abgeordnete.byWahlkreis[Store.get("wahlkreis")];
      return abgeordneter.img || undefined; // skip if it doesnt exist
    },
    next: "contact_representative",
  },

  contact_representative: {
    text: "So kannst du deinen Abgeordneten kontaktieren:",
    get answers() {
      const answers = [{
        text: "Nee lass mal!",
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
          window.location.href = `tel:${abgeordneter.phone}`;
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

  next_elections: {
    text: "Hmm. Naja, zum Glück sind ja spätestens im *Herbst 2022* wieder Wahlen, dann kannst du dich ja für einen anderen Kandidaten einsetzen. Das ist Demokratie!",
    answers: [
      {
        text: "Bis dahin will ich aber nicht warten...",
        next: "other_ways",
      },
      {
        text: "Okay, ich weiß schon wen ich dann wähle ...",
        next: "congrats",
      },
      {
        text: "Wieso sollte ich überhaupt wählen? Sind doch eh immer die selben da oben!",
        next: "why_vote_at_all",
      },

    ]
  },

  other_ways: {
    text: "Na dann kannst du ja *jetzt* einer Partei oder Bürgerbeteiligung beitreten!",
    answers: [
      {
        text: "Partei klingt gut! Welche gibts denn da so?",
        next: "partys",
      },
      {
        text: "Was ist denn eine Bürgerbeteiligung?",
        next: "???"
      },
      {
        text: "Ich schau mich mal selber um...",
        next: "congrats",
      }
    ]
  },

  why_vote_at_all: {
    text: "Stell dir mal vor viele würden so denken wie du.\n'Wieso sollte ich wählen, hat doch sowieso keinen Einfluss'\nDann gehen nur die wählen, die immer schon gewählt haben und alles bleibt beim Alten.\nNur dadurch das *du* zur Wahl gehst, werden auch *deine* Interessen repräsentiert.\nNatürlich heißt das nicht, dass der, den du wählst, auch am Ende im Landtag sitzt. Demokratie heißt auch, die Meinung der Anderen zu respektieren.\n",
    answers: [
      {
        text: "Vergiss es einfach",
        next: "give_up",
      },
      {
        text: "Okay, ich überlegs mir...",
        next: "congrats",
      }
    ]
  },

  partys: {
    text: "Im Landtag sind zurzeit folgende Parteien:",
    answers: [
      {
        text: "SPD",
        onClick() {
          window.location.href = "https://spd.de";
        },
        next: "congrats",
      },
      {
        text: "CDU",
        onClick() {
          window.location.href = "https://cdu.de";
        },
        next: "congrats",
      },

      {
        text: "Die Gruene",
        onClick() {
          window.location.href = "https://gruene.de";
        },
        next: "congrats",
      },
      {
        text: "FDP",
        onClick() {
          window.location.href = "https://fdp.de";
        },
        next: "congrats",
      },
      {
        text: "AfD",
        onClick() {
          window.location.href = "https://afd.de";
        },
        next: "congrats",
      },
    ]
  },

  give_up: {
    text: "Schade. Na dann noch einen schönen Tag, und denken sie dran:\nNach jedem Schietwetter scheint auch irgendwann mal wieder die Sonne ... ☀",
    time: 10000,
    next: "start",
  },

  congrats: {
    text: "Herzlichen Glückwunsch!\n Wir sind stolz, Mitbürger wie dich zu haben, die Demokratie leben und aktiv daran arbeiten, das schönste Bundesland noch lebenswerter zu gestalten!\n Unser Dialog ist damit mehr oder weniger zu Ende ...",
    answers: [
      {
        text: "Gib uns Feedback!",
        next: "feedback",
      },
      {
        text: "Wer seid ihr überhaupt?",
        next: "about_us",
      },
      {
        text: "Ich will nochmal!",
        next: "start",
      },
      {
        text: "Tschüss!",
        onClick() {
          window.close();
        }
      }
    ]
  },

  about_us: {
    text: "Moin.\n Wir sind Marie-Christine und Jonas,\n wir sind beide Schüler im 12. Jahrgang, und haben diese App als Projekt in unserem Seminarfach entwickelt um gegen Politikverdrossenheit anzukämpfen.",
    time: 10000,
    next: "start",
  },

  feedback: {
    type: "textarea",
    text: "Bitte konstruktive Kritik hier hin:",
    submit: "Feedback absenden",
    onSubmit(value: string) {
      track("feedback", { feedback: value });
    },
    next: "thanks"
  },

  thanks: {
    text: "Danke für dein Feedback, wir nehmen das sehr Ernst...",
    next: "congrats",
  }



};

export default messageByID;
