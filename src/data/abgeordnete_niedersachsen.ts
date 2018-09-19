interface Abgeordneter {
  // fetched from wikipedia:
  img: string;
  name: string;
  birth: string;
  party: string;
  wahlkreis: string;
  votes: string;
  // researched infos:
  address?: string;
  email?: string;
  phone?: string;
  website?: string;
}

// Source: https://de.wikipedia.org/wiki/Liste_der_Mitglieder_des_Nieders%C3%A4chsischen_Landtages_(18._Wahlperiode)
// Enriched with researched data found on websites of the Abgeordneten and their parties
// Only contains direct mandates
const abgeordnete: Abgeordneter[] = [{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Placeholder_staff_photo.svg/120px-Placeholder_staff_photo.svg.png",
      "name":"Volker Senftleben",
      "birth":"1975",
      "party":"SPD",
      "wahlkreis":"Alfeld",
      "votes":"43,1",
      "address":"Wahlkreisbüro\nKalandstraße5\n31061 Alfeld (Leine)",
      "phone":"+49 5181 82 82 92",
      "email":"info@volker-senftleben.de",
      "website":""
},  {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Nacke%2C_Jens-9313.jpg/120px-Nacke%2C_Jens-9313.jpg",
      "name":"Jens Nacke",
      "birth":"1971",
      "party":"CDU",
      "wahlkreis":"Ammerland",
      "votes":"38,5",
      "address":"Langenhof 2\n26160 Bad Zwischenahn",
      "phone":"+49 4403 93 75 62",
      "email":"",
      "website":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Siebels%2C_Wiard.jpg/120px-Siebels%2C_Wiard.jpg",
      "name":"Wiard Siebels",
      "birth":"1978",
      "party":"SPD",
      "wahlkreis":"Aurich",
      "votes":"52,5",
      "address":"Julianenburger Straße 33\n26603 Aurich",
      "phone":"+49 4941 3387",
      "email":"buero@wiard-siebels.de",
      "website":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Watermann%2C_Ulrich.jpg/120px-Watermann%2C_Ulrich.jpg",
      "name":"Ulrich Watermann",
      "birth":"1957",
      "party":"SPD",
      "wahlkreis":"Bad Pyrmont",
      "votes":"42,1",
      "address":"Rosa-Helfers-Haus\nHeiliggeiststraße 2\n31785 Hameln",
      "phone":"+49 5151 1073397",
      "email":"info@ulrich-watermann.de",
      "website":"www.ulrich-watermann.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Placeholder_staff_photo.svg/120px-Placeholder_staff_photo.svg.png",
      "name":"Claudia Schüßler",
      "birth":"1967",
      "party":"SPD",
      "wahlkreis":"Barsinghausen",
      "votes":"41,8",
      "address":"Odeonstraße 15/16\n30159 Hannover",
      "phone":"+49 511 1674 346",
      "email":"buero@claudiaschuessler.de",
      "website":"claudiaschuessler.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Schepelmann%2C_J%C3%B6rn.jpg/120px-Schepelmann%2C_J%C3%B6rn.jpg",
      "name":"Jörn Schepelmann",
      "birth":"1986",
      "party":"CDU",
      "wahlkreis":"Bergen",
      "votes":"43,3",
      "address":"Südwall 26\n29221 Celle",
      "phone":" +49 5141 977 91 97",
      "email":"buero@joern-schepelmann.de",
      "website":"joern-schepelmann.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Christian_Calderone_9a.jpg/120px-Christian_Calderone_9a.jpg",
      "name":"Christian Calderone",
      "birth":"1977",
      "party":"CDU",
      "wahlkreis":"Bersenbrück",
      "votes":"53,6",
      "address":"Schiphorst 23\n49610 Quakenbrück",
      "phone":"+49 5431 22 60",
      "email":"post@calderone.de",
      "website":"calderone.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Placeholder_staff_photo.svg/120px-Placeholder_staff_photo.svg.png",
      "name":"Guido Pott",
      "birth":"1966",
      "party":"SPD",
      "wahlkreis":"Bramsche",
      "votes":"40,9",
      "address":"Lengericher Landstraße 19b\n4978 Osnabrück",
      "phone":"+49 541 580 28 107",
      "email":"buero@guido-pott.de",
      "website":"guido-pott.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Portrait_Christos_Pantazis.jpg/120px-Portrait_Christos_Pantazis.jpg",
      "name":"Christos Pantazis",
      "birth":"1975",
      "party":"SPD",
      "wahlkreis":"Braunschweig-Nord",
      "votes":"41,8",
      "address":"Schloßstraße 8\n38100 Braunschweig",
      "phone":"+49 531 48 09 8 27",
      "email":"buero@christos-pantazis.de",
      "website":"christos-pantazis.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Sch%C3%BCtze%2C_Annette.jpg/120px-Sch%C3%BCtze%2C_Annette.jpg",
      "name":"Annette Schütze",
      "birth":"1966",
      "party":"SPD",
      "wahlkreis":"Braunschweig-Süd",
      "votes":"44,1",
      "address":"Schloßstraße 8\n38100 Braunschweig",
      "phone":"+49 531 480 98 35",
      "email":"info@anette-schuetze.de",
      "website":"annette-schuetze.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Christoph_Bratmann_%28Martin_Rulsch%29_4.jpg/120px-Christoph_Bratmann_%28Martin_Rulsch%29_4.jpg",
      "name":"Christoph Bratmann",
      "birth":"1969",
      "party":"SPD",
      "wahlkreis":"Braunschweig-West",
      "votes":"42,3",
      "address":"Schloßstraße 8\n38100 Braunschweig",
      "phone":"+49 531 480 98 23",
      "email":"buero@christoph-bratmann.de",
      "website":"christoph-bratmann.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mohrmann%2C_Marco.jpg/120px-Mohrmann%2C_Marco.jpg",
      "name":"Marco Mohrmann",
      "birth":"1973",
      "party":"CDU",
      "wahlkreis":"Bremervörde",
      "votes":"50,5",
      "address":"Lange Straße 23\n27404 Zeven",
      "phone":"+49 4281 953 60 52",
      "email":"dialog@marco-mohrmann.de",
      "website":"marco-mohrmann.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Landtag_Niedersachsen_DSCF7327.JPG/120px-Landtag_Niedersachsen_DSCF7327.JPG",
      "name":"Heiner Schönecke",
      "birth":"1946",
      "party":"CDU",
      "wahlkreis":"Buchholz",
      "votes":"39,7",
      "address":"Fliegenmoor 24\n21629 Neu Wulmstorf - Elstorf",
      "phone":"+49 4168 913131",
      "email":"heiner@schoenecke.de",
      "website":"heiner-schoeneke.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dammann-Tamke%2C_Helmut.jpg/120px-Dammann-Tamke%2C_Helmut.jpg",
      "name":"Helmut Dammann-Tamke",
      "birth":"1961",
      "party":"CDU",
      "wahlkreis":"Buxtehude",
      "votes":"44,0",
      "address":"Pommernstraße 6\n21698 Harsefeld",
      "phone":"+49 4164 888 532",
      "email":"wahlkreisbuero@dammann-tamke.de",
      "website":"dammann-tamke.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Adasch%2C_Thomas.jpg/120px-Adasch%2C_Thomas.jpg",
      "name":"Thomas Adasch",
      "birth":"1965",
      "party":"CDU",
      "wahlkreis":"Celle",
      "votes":"37,7",
      "address":"Südwall 26\n29221 Celle",
      "phone":"+49 51 41 977 91 99",
      "email":"buero-celle@thomas-adasch.de",
      "website":"thomas-adasch.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Eilers%2C_Christoph.jpg/120px-Eilers%2C_Christoph.jpg",
      "name":"Christoph Eilers",
      "birth":"1969",
      "party":"CDU",
      "wahlkreis":"Cloppenburg",
      "votes":"60,8",
      "address":"Löninger Str. 1\n49661 Cloppenburg",
      "phone":"+49 4471 1860620",
      "email":"info@christoph-eilers.de",
      "website":"christoph-eilers.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Bley%2C_Karl-Heinz-8318.jpg/120px-Bley%2C_Karl-Heinz-8318.jpg",
      "name":"Karl-Heinz Bley",
      "birth":"1952",
      "party":"CDU",
      "wahlkreis":"Cloppenburg-Nord",
      "votes":"48,1",
      "address":"Böseler Straße 12a\n49681 Garrel",
      "phone":"+49 4474 941791",
      "email":"",
      "website":"karl-heinz-bley.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Santjer%2C_Uwe-9224.jpg/120px-Santjer%2C_Uwe-9224.jpg",
      "name":"Uwe Santjer",
      "birth":"1965",
      "party":"SPD",
      "wahlkreis":"Cuxhaven",
      "votes":"48,2",
      "address":"Bahnhofsstraße 46\n27472 Cuxhaven",
      "phone":"+49 4721 66 592 90",
      "email":"buero@uwe-santjer.de",
      "website":"uwe-santjer.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Kurku%2C_Deniz.jpg/120px-Kurku%2C_Deniz.jpg",
      "name":"Deniz Kurku",
      "birth":"1982",
      "party":"SPD",
      "wahlkreis":"Delmenhorst",
      "votes":"41,7",
      "address":"Arthur-Fitger-Straße 10\n27749 Delmenhorst",
      "phone":"+49 4221 1521219",
      "email":"buero@deniz-kurku.de",
      "website":"deniz-kurku.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Scharrelmann%2C_Marcel.jpg/120px-Scharrelmann%2C_Marcel.jpg",
      "name":"Marcel Scharrelmann",
      "birth":"1982",
      "party":"CDU",
      "wahlkreis":"Diepholz",
      "votes":"44,1",
      "address":"Hindenburgstraße 55\n49356 Diepholz",
      "phone":"+49 5441 975 4080",
      "email":"dialog@marcel-scharrelmann.de",
      "website":"marcel-scharrelmann.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Ehbrecht%2C_Thomas.jpg/120px-Ehbrecht%2C_Thomas.jpg",
      "name":"Thomas Ehbrecht",
      "birth":"1964",
      "party":"CDU",
      "wahlkreis":"Duderstadt",
      "votes":"41,4",
      "address":"Stadtweg 7\n37434 Obernfeld",
      "phone":" +49 151 120 23 630",
      "email":"nfo@thomas-ehbrecht.de",
      "website":"thomas-ehbrecht.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Uwe_Schwarz_2009_%2845%29.jpg/120px-Uwe_Schwarz_2009_%2845%29.jpg",
      "name":"Uwe Schwarz",
      "birth":"1957",
      "party":"SPD",
      "wahlkreis":"Einbeck",
      "votes":"45,0",
      "address":"Hoher Weg 14\n37581 Bad Gandersheim",
      "phone":"+49 5561 2 06 57 10",
      "email":"buero.uweschwarz@uschwarz.de",
      "website":"uschwarz.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Dorendorf%2C_Uwe.jpg/120px-Dorendorf%2C_Uwe.jpg",
      "name":"Uwe Dorendorf",
      "birth":"1960",
      "party":"CDU",
      "wahlkreis":"Elbe",
      "votes":"34,0",
      "address":"Schützenstraße 2\n29439 Lüchow",
      "phone":"+49 172 5452078",
      "email":"uwe-dorendorf.com",
      "website":"wahlkreisbuero@uwe-dorendorf.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Arends%2C_Matthias.jpg/120px-Arends%2C_Matthias.jpg",
      "name":"Matthias Arends",
      "birth":"1970",
      "party":"SPD",
      "wahlkreis":"Emden/Norden",
      "votes":"50,3",
      "address":"Große Straße 58\n26721 Emden",
      "phone":"+49 49 21 5 85 72-50",
      "email":"Info@matthias-arends.de",
      "website":"matthias-arends.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Lies_Olaf_%282012%29.jpg/120px-Lies_Olaf_%282012%29.jpg",
      "name":"Olaf Lies",
      "birth":"1967",
      "party":"SPD",
      "wahlkreis":"Friesland",
      "votes":"54,2",
      "address":"St.-Annen-Straße 2\n26441 Jever",
      "phone":" +49 4461 7485225",
      "email":"buero-fri@olaf-lies.de",
      "website":"olaf-lies.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Placeholder_staff_photo.svg/120px-Placeholder_staff_photo.svg.png",
      "name":"Rüdiger Kauroff",
      "birth":"1956",
      "party":"SPD",
      "wahlkreis":"Garbsen/Wedemark",
      "votes":"38,8",
      "address":"Odeonstraße 15/16\n30159 Hannover",
      "phone":"+49 5 11 16 74-348",
      "email":"buero@kauroff-spd.de",
      "website":"kauroff-spd.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Weritz%2C_Lasse.jpg/120px-Weritz%2C_Lasse.jpg",
      "name":"Lasse Weritz",
      "birth":"1986",
      "party":"CDU",
      "wahlkreis":"Geestland",
      "votes":"43,0",
      "address":"Grenzweg 31a\n21745 Hemmoor",
      "phone":"+49 4771 8891682",
      "email":"landtag@lasse-weritz.de",
      "website":"lasse-weritz.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/B%C3%A4umer%2C_Martin.jpg/120px-B%C3%A4umer%2C_Martin.jpg",
      "name":"Martin Bäumer",
      "birth":"1967",
      "party":"CDU",
      "wahlkreis":"Georgsmarienhütte",
      "votes":"48,6",
      "address":"Auf der Urlage 1\n49219 Glandorf-Westendorf",
      "phone":"+49 54 26 93 31 65",
      "email":"info@martinbaeumer.de",
      "website":"martinbaeumer.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Heilmann%2C_Tobias.jpg/120px-Heilmann%2C_Tobias.jpg",
      "name":"Tobias Heilmann",
      "birth":"1975",
      "party":"SPD",
      "wahlkreis":"Gifhorn-Nord/Wolfsburg",
      "votes":"40,0",
      "address":"Steinweg 11\n38518 Gifhorn",
      "phone":"+49 5371 672 44 68",
      "email":"tobias.eilmann@lt.niedersachsen.de",
      "website":"tobias-heilmann-landtag.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Raulfs%2C_Philipp.jpg/120px-Raulfs%2C_Philipp.jpg",
      "name":"Philipp Raulfs",
      "birth":"1991",
      "party":"SPD",
      "wahlkreis":"Gifhorn-Süd",
      "votes":"41,3",
      "address":"Steinweg 11\n38518 Gifhorn",
      "phone":"+49 537115474",
      "email":"kontakt@philipp-raulfs.de",
      "website":"philipp-raulfs.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Saipa%2C_Alexander.jpg/120px-Saipa%2C_Alexander.jpg",
      "name":"Alexander Saipa",
      "birth":"1976",
      "party":"SPD",
      "wahlkreis":"Goslar",
      "votes":"48,5",
      "address":"Bäckerstraße 23/24\n38640 Goslar",
      "phone":"+49 5321 3979988",
      "email":"wahlkreisbuero@asaipa.de",
      "website":"alexandersaipa.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Gabriele_andretta_cropped.jpg/120px-Gabriele_andretta_cropped.jpg",
      "name":"Gabriele Andretta",
      "birth":"1961",
      "party":"SPD",
      "wahlkreis":"Göttingen-Stadt",
      "votes":"38,9",
      "address":"Nikolaistraße 30\n37073 Göttingen",
      "phone":"+49 551 503 11 18",
      "email":"buero@gabriele-andretta.de",
      "website":"gabriele-andretta.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Karl_Heinz_Hausmann_-_Projekt_Landtag.jpg/120px-Karl_Heinz_Hausmann_-_Projekt_Landtag.jpg",
      "name":"Karl Heinz Hausmann",
      "birth":"1952",
      "party":"SPD",
      "wahlkreis":"Göttingen/Harz",
      "votes":"44,1",
      "address":"Berliner Straße 3\n37520 Osterode am Harz",
      "phone":"+49 5522 3 17 50 88",
      "email":"info@karl-heinz-hausmann.de",
      "website":"karl-heinz-hausmann.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Hujahn%2C_Gerd.jpg/120px-Hujahn%2C_Gerd.jpg",
      "name":"Gerd Hujahn",
      "birth":"1961",
      "party":"SPD",
      "wahlkreis":"Göttingen/Münden",
      "votes":"45,0",
      "address":"Kesselbach 24\n34346 Hann. Münden",
      "phone":"+49 5541 126 60",
      "email":"wahlkreisbuero@gerd-hujahn.de",
      "website":"gerd-hujahn.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Hilbers%2C_Reinhold.jpg/120px-Hilbers%2C_Reinhold.jpg",
      "name":"Reinhold Hilbers",
      "birth":"1964",
      "party":"CDU",
      "wahlkreis":"Grafschaft Bentheim",
      "votes":"51,1",
      "address":"Bahnhofsstraße 21a\n48529 Nordhorn",
      "phone":"+49 59 21 99 1440",
      "email":"wahlkreisbuero@reinhold-hilbers.de",
      "website":"reinhold-hilbers.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Adomat%2C_Dirk.jpg/120px-Adomat%2C_Dirk.jpg",
      "name":"Dirk Adomat",
      "birth":"1960",
      "party":"SPD",
      "wahlkreis":"Hameln/Rinteln",
      "votes":"40,6",
      "address":"Heiliggeiststr. 2\n31785 Hameln",
      "phone":"+49 5151 1073388",
      "email":" info@dirk-adomat.de",
      "website":" dirk-adomat.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Stephan_Weil_%282013%29_cropped.jpg/120px-Stephan_Weil_%282013%29_cropped.jpg",
      "name":"Stephan Weil",
      "birth":"1958",
      "party":"SPD",
      "wahlkreis":"Hannover-Buchholz",
      "votes":"47,5",
      "address":"Odeonstraße 15/16\n30159 Hannover",
      "phone":"+49 511 1674 200",
      "email":"buero@stephan-weil.de",
      "website":"stephan-weil.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Schr%C3%B6der-K%C3%B6pf%2C_Doris-8894.jpg/120px-Schr%C3%B6der-K%C3%B6pf%2C_Doris-8894.jpg",
      "name":"Doris Schröder-Köpf",
      "birth":"1963",
      "party":"SPD",
      "wahlkreis":"Hannover-Döhren",
      "votes":"38,2",
      "address":"Odeonstr. 15/16\n30159 Hannover",
      "phone":"+49 511 1674 300",
      "email":"info@schroeder-koepf.de  ",
      "website":"schroeder-koepf.de  "
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Thela_Wernstedt.jpg/120px-Thela_Wernstedt.jpg",
      "name":"Thela Wernstedt",
      "birth":"1968",
      "party":"SPD",
      "wahlkreis":"Hannover-Linden",
      "votes":"44,9",
      "address":"Hannah-Arendt-Platz 1\n30159 Hannover",
      "phone":"+49 511 30 30 30 67",
      "email":"thela-wernstedt@icloud.com",
      "website":"thela-wernstedt.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Kirci%2C_Alptekin.jpg/120px-Kirci%2C_Alptekin.jpg",
      "name":"Alptekin Kirci",
      "birth":"1971",
      "party":"SPD",
      "wahlkreis":"Hannover-Mitte",
      "votes":"41,4",
      "address":"Odeonstraße 15/16\n30159 Hannover",
      "phone":"+49 511 1674 347",
      "email":"kontakt@kirci.de",
      "website":"kirci.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Landtag_Niedersachsen_DSCF7286.JPG/120px-Landtag_Niedersachsen_DSCF7286.JPG",
      "name":"Stefan Politze",
      "birth":"1965",
      "party":"SPD",
      "wahlkreis":"Hannover-Ricklingen",
      "votes":"42,8",
      "address":"Odeonstraße 15/16\n30159 Hannover",
      "phone":"+49 511 30 30 30 70",
      "email":"info@stefan-politze.de",
      "website":"stefan-politze.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/J%C3%B6rn_Domeier.jpg/120px-J%C3%B6rn_Domeier.jpg",
      "name":"Jörn Domeier",
      "birth":"1979",
      "party":"SPD",
      "wahlkreis":"Helmstedt",
      "votes":"40,8",
      "address":"Kleiner Wall 1\n38350 Helmstedt",
      "phone":"+49 5351 309 25 12",
      "email":"info@joern-domeier.de",
      "website":"joern-domeier.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Lynack%2C_Bernd-2.jpg/120px-Lynack%2C_Bernd-2.jpg",
      "name":"Bernd Lynack",
      "birth":"1969",
      "party":"SPD",
      "wahlkreis":"Hildesheim",
      "votes":"42,7",
      "address":"Osterstraße 39a\n31134 Hildesheim",
      "phone":"+49 5121 39 55 2",
      "email":"info@bernd-lynack.de",
      "website":"bernd-lynack.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Tippelt%2C_Sabine.jpg/120px-Tippelt%2C_Sabine.jpg",
      "name":"Sabine Tippelt",
      "birth":"1961",
      "party":"SPD",
      "wahlkreis":"Holzminden",
      "votes":"47,1",
      "address":"Am Freibad 12\n31073 Delligsen",
      "phone":"+49 55 31 94 93 05",
      "email":"sabinetippelt@aol.de",
      "website":"sabine-tippelt.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Dr._Silke_Lesemann_2017.jpg/120px-Dr._Silke_Lesemann_2017.jpg",
      "name":"Silke Lesemann",
      "birth":"1962",
      "party":"SPD",
      "wahlkreis":"Laatzen",
      "votes":"44,5",
      "address":"Kurt-Schumacher-Haus\nOdeonstraße 15/16\n30159 Hannover",
      "phone":"+49 511 1674 342",
      "email":"info@silke-lesemann.de",
      "website":"silke-lesemann.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Fredermann%2C_Rainer.jpg/120px-Fredermann%2C_Rainer.jpg",
      "name":"Rainer Fredermann",
      "birth":"1959",
      "party":"CDU",
      "wahlkreis":"Langenhagen",
      "votes":"39,0",
      "address":"Virchowstraße 2\n30938 Burgwedel",
      "phone":"+49 171 7556705",
      "email":"post@rainer-fredermann.de",
      "website":"rainer-fredermann.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Thiele%2C_Ulf.jpg/120px-Thiele%2C_Ulf.jpg",
      "name":"Ulf Thiele",
      "birth":"1971",
      "party":"CDU",
      "wahlkreis":"Leer",
      "votes":"40,9",
      "address":"Ledastr. 11\n26789 Leer",
      "phone":"+49 491 91 96 12 9",
      "email":"email@ulf-thiele.de",
      "website":"ulf-thiele.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Landtag_Niedersachsen_DSCF7242.JPG/120px-Landtag_Niedersachsen_DSCF7242.JPG",
      "name":"Johanne Modder",
      "birth":"1960",
      "party":"SPD",
      "wahlkreis":"Leer/Borkum",
      "votes":"53,7",
      "address":"Friesenstraße 58\n26789 Leer",
      "phone":"+49 49 133 71",
      "email":"buero@johanne-modder.de",
      "website":"johanne-modder.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Placeholder_staff_photo.svg/120px-Placeholder_staff_photo.svg.png",
      "name":"Thordies Hanisch",
      "birth":"1979",
      "party":"SPD",
      "wahlkreis":"Lehrte",
      "votes":"41,4",
      "address":"Odeonstraße 15/16\n30159 Hannover",
      "phone":"+49 511 16 74 345",
      "email":"info@thordies-hanisch.de",
      "website":"thordies-hanisch.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/F%C3%BChner%2C_Christian.jpg/120px-F%C3%BChner%2C_Christian.jpg",
      "name":"Christian Fühner",
      "birth":"1987",
      "party":"CDU",
      "wahlkreis":"Lingen",
      "votes":"58,0",
      "address":"Holthauser Esch 16\n49808 Lingen",
      "phone":"+49 172 322 72 88",
      "email":"info@christian-fuehner.de",
      "website":"christian-fuehner.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Schr%C3%B6der-Ehlers%2C_Andrea.jpg/120px-Schr%C3%B6der-Ehlers%2C_Andrea.jpg",
      "name":"Andrea Schröder-Ehlers",
      "birth":"1961",
      "party":"SPD",
      "wahlkreis":"Lüneburg",
      "votes":"38,5",
      "address":"Auf dem Meere 14/15\n21335 Lüneburg",
      "phone":"+49 4131 23 28 59",
      "email":"info@andrea-schroeder-ehlers.de",
      "website":"andrea-schroeder-ehlers.de"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/H%C3%B6vel%2C_Gerda.jpg/120px-H%C3%B6vel%2C_Gerda.jpg",
      "name":"Gerda Hövel",
      "birth":"1954",
      "party":"CDU",
      "wahlkreis":"Melle",
      "votes":"42,5",
      "address":"Weststraße 8\n49324 Melle",
      "phone":"",
      "email":"buero@gerda-hoevel.de",
      "website":"gerda-hoevel.de"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Hiebing%2C_Bernd-Carsten.jpg/120px-Hiebing%2C_Bernd-Carsten.jpg",
      "name":"Bernd-Carsten Hiebing",
      "birth":"1951",
      "party":"CDU",
      "wahlkreis":"Meppen",
      "votes":"59,3",
      "address":"Landegge 1\n49733 Haren",
      "phone":"+49 59 32 73 45 83",
      "email":"bc@hiebing.de",
      "website":"hiebing.de"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Placeholder_staff_photo.svg/120px-Placeholder_staff_photo.svg.png",
      "name":"Wiebke Osigus",
      "birth":"1981",
      "party":"SPD",
      "wahlkreis":"Neustadt/Wunstorf",
      "votes":"41,7",
      "address":"Odeonstraße 15/16\n30159 Hannover",
      "phone":"+49 511 1674344",
      "email":"wk@wiebkeosigus.de",
      "website":"wiebkeosigus.de"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Schm%C3%A4deke%2C_Frank.jpg/120px-Schm%C3%A4deke%2C_Frank.jpg",
      "name":"Frank Schmädeke",
      "birth":"1965",
      "party":"CDU",
      "wahlkreis":"Nienburg-Nord",
      "votes":"40,2",
      "address":"Eichenweg 6\n31622 Heemsen",
      "phone":"+49 170 2208756",
      "email":"frank.schmaedeke@t-online.de",
      "website":"frank-schmaedeke.de"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Heineking%2C_Karsten.jpg/120px-Heineking%2C_Karsten.jpg",
      "name":"Karsten Heineking",
      "birth":"1961",
      "party":"CDU",
      "wahlkreis":"Nienburg/Schaumburg",
      "votes":"45,4",
      "address":"Weserstraße 15\n31582 Nienburg",
      "phone":"+49 50 21 6 000",
      "email":"heineking@t-online.de",
      "website":"karsten-heineking.de"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Frauke_Heiligenstadt_%28Martin_Rulsch%29_2.jpg/120px-Frauke_Heiligenstadt_%28Martin_Rulsch%29_2.jpg",
      "name":"Frauke Heiligenstadt",
      "birth":"1966",
      "party":"SPD",
      "wahlkreis":"Northeim",
      "votes":"47,0",
      "address":"Scharnhorstplatz 8\n37154 Northeim",
      "phone":"+49 555 1 908 1111",
      "email":"buero@frauke-heiligenstadt.de",
      "website":"frauke-heiligenstadt.de"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Axel_Brammer_2009_%2856%29.jpg/120px-Axel_Brammer_2009_%2856%29.jpg",
      "name":"Axel Brammer",
      "birth":"1955",
      "party":"SPD",
      "wahlkreis":"Oldenburg-Land",
      "votes":"35,7",
      "address":"Arthur Fitger-Straße 10\n27749 Delmenhorst",
      "phone":"+49 4221 15 212 11",
      "email":"edelmann.buero@axel-brammer.de",
      "website":"axel-brammer.de"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Ulf_Prange_aktuell_cropped.jpg/120px-Ulf_Prange_aktuell_cropped.jpg",
      "name":"Ulf Prange",
      "birth":"1975",
      "party":"SPD",
      "wahlkreis":"Oldenburg-Mitte/Süd",
      "votes":"41,2",
      "address":"Huntestr. 23\n26135 Oldenburg",
      "phone":"+49 441 361175 12",
      "email":"wahlkreisbuero@ulf-prange.de",
      "website":"ulf-prange.de"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Naber%2C_Hanna.jpg/120px-Naber%2C_Hanna.jpg",
      "name":"Hanna Naber",
      "birth":"1971",
      "party":"SPD",
      "wahlkreis":"Oldenburg-Nord/West",
      "votes":"42,9",
      "address":"Huntestr. 23\n26135 Oldenburg",
      "phone":"+49 441 36117513",
      "email":"wahlkreisbuero@hannanaber.de",
      "website":"hannanaber.de"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Henning%2C_Frank.jpg/120px-Henning%2C_Frank.jpg",
      "name":"Frank Henning",
      "birth":"1966",
      "party":"SPD",
      "wahlkreis":"Osnabrück-Ost",
      "votes":"40,1",
      "address":"Lengericher Landstraße 19b\n49078 Osnabrück",
      "phone":"+49541 21 440",
      "email":"kontakt@frankhenning.info",
      "website":"frankhenning.info"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Pistorius%2C_Boris-9084.jpg/120px-Pistorius%2C_Boris-9084.jpg",
      "name":"Boris Pistorius",
      "birth":"1960",
      "party":"SPD",
      "wahlkreis":"Osnabrück-West",
      "votes":"42,6",
      "address":"Lengericher Landstraße 19b\n49078 Osnabrück",
      "phone":"+49541 202 6831",
      "email":"info@boris-pistorius.de",
      "website":"boris-pistorius.de"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Miesner%2C_Axel.jpg/120px-Miesner%2C_Axel.jpg",
      "name":"Axel Miesner",
      "birth":"1965",
      "party":"CDU",
      "wahlkreis":"Osterholz",
      "votes":"36,1",
      "address":"Bahnhofsstraße 33a\n27711 Osterholz-Scharmbeck",
      "phone":"+49 4791 98 294 04",
      "email":"axel@miesner.de",
      "website":"axel-miesner.de"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Bernd_Busemann_%28Martin_Rulsch%29_1.jpg/120px-Bernd_Busemann_%28Martin_Rulsch%29_1.jpg",
      "name":"Bernhard Busemann",
      "birth":"1952",
      "party":"CDU",
      "wahlkreis":"Papenburg",
      "votes":"60,1",
      "address":"Meisenstr. 1a\n26892 Dörpen",
      "phone":"+49 4961 4024",
      "email":"kontakt@bernd-busemann.de",
      "website":"bernd-busemann.de"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/M%C3%B6hle%2C_Matthias.jpg/120px-M%C3%B6hle%2C_Matthias.jpg",
      "name":"Matthias Möhle",
      "birth":"1959",
      "party":"SPD",
      "wahlkreis":"Peine",
      "votes":"48,1",
      "address":"Goethestraße 16\n31224 Peine",
      "phone":"+49 51 71 5 06 83 22",
      "email":"info@matthias-moehle.de",
      "website":"matthias-moehle.de"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Holsten%2C_Eike.jpg/120px-Holsten%2C_Eike.jpg",
      "name":"Eike Holsten",
      "birth":"1983",
      "party":"CDU",
      "wahlkreis":"Rotenburg",
      "votes":"39,4",
      "address":"Große Straße 61a\n27356 Rotenburg",
      "phone":"+49 42 61 960 223",
      "email":"e.holsten@eike-holsten.de",
      "website":"eike-holsten.de"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Klein%2C_Stefan.jpg/120px-Klein%2C_Stefan.jpg",
      "name":"Stefan Klein",
      "birth":"1970",
      "party":"SPD",
      "wahlkreis":"Salzgitter",
      "votes":"52,2",
      "address":"Riesentrapp 14\n38226 Salzgitter",
      "phone":"+49 53 41 2 23 96 65",
      "email":"buero@stefanklein-mdl.de",
      "website":"stefanklein-mdl.de"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Brinkmann%2C_Markus-8517.jpg/120px-Brinkmann%2C_Markus-8517.jpg",
      "name":"Markus Brinkmann",
      "birth":"1961",
      "party":"SPD",
      "wahlkreis":"Sarstedt/Bad Salzdetfurth",
      "votes":"45,9",
      "address":"Holztorstr. 31\n31157 Sarstedt",
      "phone":"+49 5066 6005560",
      "email":"markus-brinkmann@t-online.de",
      "website":"ma-brinkmann.de"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Becker%2C_Karsten.jpg/120px-Becker%2C_Karsten.jpg",
      "name":"Karsten Becker",
      "birth":"1958",
      "party":"SPD",
      "wahlkreis":"Schaumburg",
      "votes":"46,8",
      "address":"Obernstraße 18\n31655 Stadthagen",
      "phone":"+49 5721 9953670",
      "email":"wk@karstenbecker.info",
      "website":"karstenbecker.info"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Landtag_Niedersachsen_DSCF7439.JPG/120px-Landtag_Niedersachsen_DSCF7439.JPG",
      "name":"Petra Emmerich-Kopatsch",
      "birth":"1960",
      "party":"SPD",
      "wahlkreis":"Seesen",
      "votes":"45,0",
      "address":"Bäckerstraße 23/24\n38640 Goslar",
      "phone":"+49 5321 39 79 989 ",
      "email":"kontakt@emmerich-kopatsch.de",
      "website":"emmerich-kopatsch.de"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Althusmann.jpg/120px-Althusmann.jpg",
      "name":"Bernd Althusmann",
      "birth":"1966",
      "party":"CDU",
      "wahlkreis":"Seevetal",
      "votes":"38,6",
      "address":"",
      "phone":"+49 5 11 27 99 10",
      "email":"althusmann@cdu-niedersachsen.de",
      "website":"athusmann.de"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Von_Danwitz%2C_Karl-Ludwig.jpg/120px-Von_Danwitz%2C_Karl-Ludwig.jpg",
      "name":"Karl-Ludwig von Danwitz",
      "birth":"1958",
      "party":"CDU",
      "wahlkreis":"Soltau",
      "votes":"41,9",
      "address":"Poststraße 11 \n29640 Schneverdingen",
      "phone":"+49 172 48 21 406",
      "email":"info@vondanwitz.de",
      "website":"vondanwitz.de"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Liebelt%2C_Kerstin.jpg/120px-Liebelt%2C_Kerstin.jpg",
      "name":"Kerstin Liebelt",
      "birth":"1962",
      "party":"SPD",
      "wahlkreis":"Springe",
      "votes":"40,8",
      "address":"Odeonstraße 15/16\n30159 Hannover",
      "phone":"+49 511 167 43 49",
      "email":"info@kerstin-liebelt.de",
      "website":"kerstin-liebelt.de"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Seefried%2C_Kai.jpg/120px-Seefried%2C_Kai.jpg",
      "name":"Kai Seefried",
      "birth":"1978",
      "party":"CDU",
      "wahlkreis":"Stade",
      "votes":"43,4",
      "address":"Am Hinterdeich 4\n21680 Stade",
      "phone":"+49 4141 7976488",
      "email":"beckermann@kai-seefried.de",
      "website":"kai-seefried.de"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Meyer%2C_Volker.jpg/120px-Meyer%2C_Volker.jpg",
      "name":"Volker Meyer",
      "birth":"1968",
      "party":"CDU",
      "wahlkreis":"Syke",
      "votes":"35,8",
      "address":"Bertha-von-Suttner Straße 5\n27211 Bassum",
      "phone":"+49 4241 921 011 9",
      "email":"info@volker-meyer.eu",
      "website":"volker-meyer.eu"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Hillmer%2C_J%C3%B6rg.jpg/120px-Hillmer%2C_J%C3%B6rg.jpg",
      "name":"Jörg Hillmer",
      "birth":"1966",
      "party":"CDU",
      "wahlkreis":"Uelzen",
      "votes":"36,8",
      "address":"Burgstr. 1\n29556 Suderburg",
      "phone":"+49 581 76066",
      "email":"info@joerg-hillmer.de",
      "website":"joerg-hillmer.de"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Lottke%2C_Oliver.jpg/120px-Lottke%2C_Oliver.jpg",
      "name":"Oliver Lottke",
      "birth":"1972",
      "party":"SPD",
      "wahlkreis":"Unterweser",
      "votes":"38,1",
      "address":"Lindenstraße 32\n27612 Loxstedt-Nesse",
      "phone":" +49 4744 / 9138810",
      "email":"buero@oliver-lottke.de",
      "website":"oliver-lottke.de"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Siemer%2C_Stephan.jpg/120px-Siemer%2C_Stephan.jpg",
      "name":"Stephan Siemer",
      "birth":"1961",
      "party":"CDU",
      "wahlkreis":"Vechta",
      "votes":"60,2",
      "address":"Falkenrotter Str. 44\n49377 Vechta",
      "phone":"+49 4441 88979 0",
      "email":"info@dr-stephan-siemer.de",
      "website":"dr-stephan-siemer.de"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Liebetruth%2C_D%C3%B6rte.jpg/120px-Liebetruth%2C_D%C3%B6rte.jpg",
      "name":"Dörte Liebetruth",
      "birth":"1979",
      "party":"SPD",
      "wahlkreis":"Verden",
      "votes":"39,8",
      "address":"Große Straße 78\n27283 Verden ",
      "phone":"+49 4231 9708720",
      "email":"info@doerte-liebetruth.de",
      "website":"doerte-liebetruth.de"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Zinke%2C_Sebastian.jpg/120px-Zinke%2C_Sebastian.jpg",
      "name":"Sebastian Zinke",
      "birth":"1981",
      "party":"SPD",
      "wahlkreis":"Walsrode",
      "votes":"46,4",
      "address":"Moorstrassse 54\n29664 Walsrode",
      "phone":"+49 51 61 48 10 70 3",
      "email":"info@sebastian-Zinke.de",
      "website":"sebastian-Zinke.de"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Logemann%2C_Karin.jpg/120px-Logemann%2C_Karin.jpg",
      "name":"Karin Logemann",
      "birth":"1961",
      "party":"SPD",
      "wahlkreis":"Wesermarsch",
      "votes":"42,8",
      "address":"Hiddigwarder Straße 24\n27804 Berne",
      "phone":" +49 4406 972398",
      "email":"kontakt@karin-logemann.info",
      "website":"karin-logemann.info"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Holger_Ansmann_%28Martin_Rulsch%29_2.jpg/120px-Holger_Ansmann_%28Martin_Rulsch%29_2.jpg",
      "name":"Holger Ansmann",
      "birth":"1957",
      "party":"SPD",
      "wahlkreis":"Wilhelmshaven",
      "votes":"45,8",
      "address":"Rathausplatz 14\n26384 Wilhelmshaven",
      "phone":"+49 4421 7 79 19 11",
      "email":"info@holger-ansmann.de",
      "website":"holger-ansmann.de"
   }, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Bock%2C_Andre-8189.jpg/120px-Bock%2C_Andre-8189.jpg",
      "name":"André Bock",
      "birth":"1973",
      "party":"CDU",
      "wahlkreis":"Winsen",
      "votes":"40,2",
      "address":"Rathausstraße 7\n21423 Winsen",
      "phone":"+49 41 71 69 25 968",
      "email":"a.bock@andrebock.de",
      "website":"andrebock.de"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Placeholder_staff_photo.svg/120px-Placeholder_staff_photo.svg.png",
      "name":"Jochen Beekhuis",
      "birth":"1977",
      "party":"SPD",
      "wahlkreis":"Wittmund/Inseln",
      "votes":"43,6",
      "address":"Kirchstraße 7 \n26409 Wittmund",
      "phone":"+49 4462 1750 ",
      "email":"info@jochen-beekhuis.de",
      "website":"jochen-beekhuis.de"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Kreiser%2C_Dunja.jpg/120px-Kreiser%2C_Dunja.jpg",
      "name":"Dunja Kreiser",
      "birth":"1971",
      "party":"SPD",
      "wahlkreis":"Wolfenbüttel-Nord",
      "votes":"39,7",
      "address":"Bahnhof 1C\n38300 Wolfenbüttel",
      "phone":"+49 5331 88 1415",
      "email":"info@dunja-kreiser.de",
      "website":"dunja-kreiser.de"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Bosse%2C_Marcus.jpg/120px-Bosse%2C_Marcus.jpg",
      "name":"Marcus Bosse",
      "birth":"1965",
      "party":"SPD",
      "wahlkreis":"Wolfenbüttel-Süd/Salzgitter",
      "votes":"48,3",
      "address":"Bahnhof 1C\n38300 Wolfenbüttel",
      "phone":"+49 5331 88 14 16",
      "email":"info@marcus-bosse.de",
      "website":"marcus-bosse.de"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Glosemeyer%2C_Immacolata.jpg/120px-Glosemeyer%2C_Immacolata.jpg",
      "name":"Immacolata Glosemeyer",
      "birth":"1965",
      "party":"SPD",
      "wahlkreis":"Wolfsburg",
      "votes":"43,9",
      "address":"Goethestraße 48\n38440 Wolfsburg",
      "phone":"+495361 890 529 1",
      "email":"info@immacolata-glosemeyer.de",
      "website":"immacolata-glosemeyer.de"
   }
];

export default abgeordnete;

export const byWahlkreis: {[wahlkreis: string]: Abgeordneter} = {};

for(const abgeordneter of abgeordnete)
  byWahlkreis[abgeordneter.wahlkreis] = abgeordneter;
