interface Abgeordneter {
  img: string;
  name: string;
  birth: string;
  party: string;
  wahlkreis: string;
  votes: string;
}
// Source: https://de.wikipedia.org/wiki/Liste_der_Mitglieder_des_Nieders%C3%A4chsischen_Landtages_(18._Wahlperiode)
const abgeordnete: Abgeordneter[] = [
{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Placeholder_staff_photo.svg/120px-Placeholder_staff_photo.svg.png",
      "name":"Volker Senftleben",
      "birth":"1975",
      "party":"SPD",
      "wahlkreis":"Alfeld",
      "votes":"43,1"
},  {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Nacke%2C_Jens-9313.jpg/120px-Nacke%2C_Jens-9313.jpg",
      "name":"Jens Nacke",
      "birth":"1971",
      "party":"CDU",
      "wahlkreis":"Ammerland",
      "votes":"38,5"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Siebels%2C_Wiard.jpg/120px-Siebels%2C_Wiard.jpg",
      "name":"Wiard Siebels",
      "birth":"1978",
      "party":"SPD",
      "wahlkreis":"Aurich",
      "votes":"52,5"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Watermann%2C_Ulrich.jpg/120px-Watermann%2C_Ulrich.jpg",
      "name":"Ulrich Watermann",
      "birth":"1957",
      "party":"SPD",
      "wahlkreis":"Bad Pyrmont",
      "votes":"42,1"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Placeholder_staff_photo.svg/120px-Placeholder_staff_photo.svg.png",
      "name":"Claudia Schüßler",
      "birth":"1967",
      "party":"SPD",
      "wahlkreis":"Barsinghausen",
      "votes":"41,8"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Schepelmann%2C_J%C3%B6rn.jpg/120px-Schepelmann%2C_J%C3%B6rn.jpg",
      "name":"Jörn Schepelmann",
      "birth":"1986",
      "party":"CDU",
      "wahlkreis":"Bergen",
      "votes":"43,3"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Christian_Calderone_9a.jpg/120px-Christian_Calderone_9a.jpg",
      "name":"Christian Calderone",
      "birth":"1977",
      "party":"CDU",
      "wahlkreis":"Bersenbrück",
      "votes":"53,6"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Placeholder_staff_photo.svg/120px-Placeholder_staff_photo.svg.png",
      "name":"Guido Pott",
      "birth":"1966",
      "party":"SPD",
      "wahlkreis":"Bramsche",
      "votes":"40,9"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Portrait_Christos_Pantazis.jpg/120px-Portrait_Christos_Pantazis.jpg",
      "name":"Christos Pantazis",
      "birth":"1975",
      "party":"SPD",
      "wahlkreis":"Braunschweig-Nord",
      "votes":"41,8"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Sch%C3%BCtze%2C_Annette.jpg/120px-Sch%C3%BCtze%2C_Annette.jpg",
      "name":"Annette Schütze",
      "birth":"1966",
      "party":"SPD",
      "wahlkreis":"Braunschweig-Süd",
      "votes":"44,1"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Christoph_Bratmann_%28Martin_Rulsch%29_4.jpg/120px-Christoph_Bratmann_%28Martin_Rulsch%29_4.jpg",
      "name":"Christoph Bratmann",
      "birth":"1969",
      "party":"SPD",
      "wahlkreis":"Braunschweig-West",
      "votes":"42,3"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mohrmann%2C_Marco.jpg/120px-Mohrmann%2C_Marco.jpg",
      "name":"Marco Mohrmann",
      "birth":"1973",
      "party":"CDU",
      "wahlkreis":"Bremervörde",
      "votes":"50,5"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Landtag_Niedersachsen_DSCF7327.JPG/120px-Landtag_Niedersachsen_DSCF7327.JPG",
      "name":"Heiner Schönecke",
      "birth":"1946",
      "party":"CDU",
      "wahlkreis":"Buchholz",
      "votes":"39,7"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dammann-Tamke%2C_Helmut.jpg/120px-Dammann-Tamke%2C_Helmut.jpg",
      "name":"Helmut Dammann-Tamke",
      "birth":"1961",
      "party":"CDU",
      "wahlkreis":"Buxtehude",
      "votes":"44,0"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Adasch%2C_Thomas.jpg/120px-Adasch%2C_Thomas.jpg",
      "name":"Thomas Adasch",
      "birth":"1965",
      "party":"CDU",
      "wahlkreis":"Celle",
      "votes":"37,7"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Eilers%2C_Christoph.jpg/120px-Eilers%2C_Christoph.jpg",
      "name":"Christoph Eilers",
      "birth":"1969",
      "party":"CDU",
      "wahlkreis":"Cloppenburg",
      "votes":"60,8"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Bley%2C_Karl-Heinz-8318.jpg/120px-Bley%2C_Karl-Heinz-8318.jpg",
      "name":"Karl-Heinz Bley",
      "birth":"1952",
      "party":"CDU",
      "wahlkreis":"Cloppenburg-Nord",
      "votes":"48,1"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Santjer%2C_Uwe-9224.jpg/120px-Santjer%2C_Uwe-9224.jpg",
      "name":"Uwe Santjer",
      "birth":"1965",
      "party":"SPD",
      "wahlkreis":"Cuxhaven",
      "votes":"48,2"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Kurku%2C_Deniz.jpg/120px-Kurku%2C_Deniz.jpg",
      "name":"Deniz Kurku",
      "birth":"1982",
      "party":"SPD",
      "wahlkreis":"Delmenhorst",
      "votes":"41,7"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Scharrelmann%2C_Marcel.jpg/120px-Scharrelmann%2C_Marcel.jpg",
      "name":"Marcel Scharrelmann",
      "birth":"1982",
      "party":"CDU",
      "wahlkreis":"Diepholz",
      "votes":"44,1"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Ehbrecht%2C_Thomas.jpg/120px-Ehbrecht%2C_Thomas.jpg",
      "name":"Thomas Ehbrecht",
      "birth":"1964",
      "party":"CDU",
      "wahlkreis":"Duderstadt",
      "votes":"41,4"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Uwe_Schwarz_2009_%2845%29.jpg/120px-Uwe_Schwarz_2009_%2845%29.jpg",
      "name":"Uwe Schwarz",
      "birth":"1957",
      "party":"SPD",
      "wahlkreis":"Einbeck",
      "votes":"45,0"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Dorendorf%2C_Uwe.jpg/120px-Dorendorf%2C_Uwe.jpg",
      "name":"Uwe Dorendorf",
      "birth":"1960",
      "party":"CDU",
      "wahlkreis":"Elbe",
      "votes":"34,0"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Arends%2C_Matthias.jpg/120px-Arends%2C_Matthias.jpg",
      "name":"Matthias Arends",
      "birth":"1970",
      "party":"SPD",
      "wahlkreis":"Emden/Norden",
      "votes":"50,3"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Lies_Olaf_%282012%29.jpg/120px-Lies_Olaf_%282012%29.jpg",
      "name":"Olaf Lies",
      "birth":"1967",
      "party":"SPD",
      "wahlkreis":"Friesland",
      "votes":"54,2"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Placeholder_staff_photo.svg/120px-Placeholder_staff_photo.svg.png",
      "name":"Rüdiger Kauroff",
      "birth":"1956",
      "party":"SPD",
      "wahlkreis":"Garbsen/Wedemark",
      "votes":"38,8"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Weritz%2C_Lasse.jpg/120px-Weritz%2C_Lasse.jpg",
      "name":"Lasse Weritz",
      "birth":"1986",
      "party":"CDU",
      "wahlkreis":"Geestland",
      "votes":"43,0"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/B%C3%A4umer%2C_Martin.jpg/120px-B%C3%A4umer%2C_Martin.jpg",
      "name":"Martin Bäumer",
      "birth":"1967",
      "party":"CDU",
      "wahlkreis":"Georgsmarienhütte",
      "votes":"48,6"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Heilmann%2C_Tobias.jpg/120px-Heilmann%2C_Tobias.jpg",
      "name":"Tobias Heilmann",
      "birth":"1975",
      "party":"SPD",
      "wahlkreis":"Gifhorn-Nord/Wolfsburg",
      "votes":"40,0"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Raulfs%2C_Philipp.jpg/120px-Raulfs%2C_Philipp.jpg",
      "name":"Philipp Raulfs",
      "birth":"1991",
      "party":"SPD",
      "wahlkreis":"Gifhorn-Süd",
      "votes":"41,3"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Saipa%2C_Alexander.jpg/120px-Saipa%2C_Alexander.jpg",
      "name":"Alexander Saipa",
      "birth":"1976",
      "party":"SPD",
      "wahlkreis":"Goslar",
      "votes":"48,5"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Gabriele_andretta_cropped.jpg/120px-Gabriele_andretta_cropped.jpg",
      "name":"Gabriele Andretta",
      "birth":"1961",
      "party":"SPD",
      "wahlkreis":"Göttingen-Stadt",
      "votes":"38,9"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Karl_Heinz_Hausmann_-_Projekt_Landtag.jpg/120px-Karl_Heinz_Hausmann_-_Projekt_Landtag.jpg",
      "name":"Karl Heinz Hausmann",
      "birth":"1952",
      "party":"SPD",
      "wahlkreis":"Göttingen/Harz",
      "votes":"44,1"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Hujahn%2C_Gerd.jpg/120px-Hujahn%2C_Gerd.jpg",
      "name":"Gerd Hujahn",
      "birth":"1961",
      "party":"SPD",
      "wahlkreis":"Göttingen/Münden",
      "votes":"45,0"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Hilbers%2C_Reinhold.jpg/120px-Hilbers%2C_Reinhold.jpg",
      "name":"Reinhold Hilbers",
      "birth":"1964",
      "party":"CDU",
      "wahlkreis":"Grafschaft Bentheim",
      "votes":"51,1"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Adomat%2C_Dirk.jpg/120px-Adomat%2C_Dirk.jpg",
      "name":"Dirk Adomat",
      "birth":"1960",
      "party":"SPD",
      "wahlkreis":"Hameln/Rinteln",
      "votes":"40,6"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Stephan_Weil_%282013%29_cropped.jpg/120px-Stephan_Weil_%282013%29_cropped.jpg",
      "name":"Stephan Weil",
      "birth":"1958",
      "party":"SPD",
      "wahlkreis":"Hannover-Buchholz",
      "votes":"47,5"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Schr%C3%B6der-K%C3%B6pf%2C_Doris-8894.jpg/120px-Schr%C3%B6der-K%C3%B6pf%2C_Doris-8894.jpg",
      "name":"Doris Schröder-Köpf",
      "birth":"1963",
      "party":"SPD",
      "wahlkreis":"Hannover-Döhren",
      "votes":"38,2"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Thela_Wernstedt.jpg/120px-Thela_Wernstedt.jpg",
      "name":"Thela Wernstedt",
      "birth":"1968",
      "party":"SPD",
      "wahlkreis":"Hannover-Linden",
      "votes":"44,9"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Kirci%2C_Alptekin.jpg/120px-Kirci%2C_Alptekin.jpg",
      "name":"Alptekin Kirci",
      "birth":"1971",
      "party":"SPD",
      "wahlkreis":"Hannover-Mitte",
      "votes":"41,4"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Landtag_Niedersachsen_DSCF7286.JPG/120px-Landtag_Niedersachsen_DSCF7286.JPG",
      "name":"Stefan Politze",
      "birth":"1965",
      "party":"SPD",
      "wahlkreis":"Hannover-Ricklingen",
      "votes":"42,8"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/J%C3%B6rn_Domeier.jpg/120px-J%C3%B6rn_Domeier.jpg",
      "name":"Jörn Domeier",
      "birth":"1979",
      "party":"SPD",
      "wahlkreis":"Helmstedt",
      "votes":"40,8"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Lynack%2C_Bernd-2.jpg/120px-Lynack%2C_Bernd-2.jpg",
      "name":"Bernd Lynack",
      "birth":"1969",
      "party":"SPD",
      "wahlkreis":"Hildesheim",
      "votes":"42,7"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Tippelt%2C_Sabine.jpg/120px-Tippelt%2C_Sabine.jpg",
      "name":"Sabine Tippelt",
      "birth":"1961",
      "party":"SPD",
      "wahlkreis":"Holzminden",
      "votes":"47,1"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Dr._Silke_Lesemann_2017.jpg/120px-Dr._Silke_Lesemann_2017.jpg",
      "name":"Silke Lesemann",
      "birth":"1962",
      "party":"SPD",
      "wahlkreis":"Laatzen",
      "votes":"44,5"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Placeholder_staff_photo.svg/120px-Placeholder_staff_photo.svg.png",
      "name":"Jens Ahrends",
      "birth":"1960",
      "party":"AfD",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Stefan_Birkner_2017.png/120px-Stefan_Birkner_2017.png",
      "name":"Stefan Birkner",
      "birth":"1973",
      "party":"FDP",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Bode%2C_J%C3%B6rg.jpg/120px-Bode%2C_J%C3%B6rg.jpg",
      "name":"Jörg Bode",
      "birth":"1970",
      "party":"FDP",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Bothe%2C_Stephan.jpg/120px-Bothe%2C_Stephan.jpg",
      "name":"Stephan Bothe",
      "birth":"1984",
      "party":"AfD",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Bruns%2C_Sylvia.jpg/120px-Bruns%2C_Sylvia.jpg",
      "name":"Sylvia Bruns",
      "birth":"1969",
      "party":"FDP",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Imke_Byl_LDK_G%C3%B6ttingen_2017.jpg/120px-Imke_Byl_LDK_G%C3%B6ttingen_2017.jpg",
      "name":"Imke Byl",
      "birth":"1993",
      "party":"GRÜNE",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Hillgriet_Eilers_%28Martin_Rulsch%29_3.jpg/120px-Hillgriet_Eilers_%28Martin_Rulsch%29_3.jpg",
      "name":"Hillgriet Eilers",
      "birth":"1959",
      "party":"FDP",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Placeholder_staff_photo.svg/120px-Placeholder_staff_photo.svg.png",
      "name":"Christopher Emden",
      "birth":"1977",
      "party":"AfD",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/F%C3%B6rsterling_2017_%28cropped%29.png/120px-F%C3%B6rsterling_2017_%28cropped%29.png",
      "name":"Björn Försterling",
      "birth":"1982",
      "party":"FDP",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Marco_Genthe_%282017%29.png/120px-Marco_Genthe_%282017%29.png",
      "name":"Marco Genthe",
      "birth":"1967",
      "party":"FDP",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Christian_Grascha.png/120px-Christian_Grascha.png",
      "name":"Christian Grascha",
      "birth":"1978",
      "party":"FDP",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Hermann_Grupe_2.jpg/120px-Hermann_Grupe_2.jpg",
      "name":"Hermann Grupe",
      "birth":"1956",
      "party":"FDP",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/2018-02-28_Dana_Guth-6170.jpg/120px-2018-02-28_Dana_Guth-6170.jpg",
      "name":"Dana Guth",
      "birth":"1970",
      "party":"AfD",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Hamburg%2C_Julia_Willie.jpg/120px-Hamburg%2C_Julia_Willie.jpg",
      "name":"Julia Willie Hamburg",
      "birth":"1986",
      "party":"GRÜNE",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/2018-02-28_AfD_Stefan_Henze_MdL-6171.jpg/120px-2018-02-28_AfD_Stefan_Henze_MdL-6171.jpg",
      "name":"Stefan Henze",
      "birth":"1965",
      "party":"AfD",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Janssen-Kuncz%2C_Meta.jpg/120px-Janssen-Kuncz%2C_Meta.jpg",
      "name":"Meta Janssen-Kucz",
      "birth":"1961",
      "party":"GRÜNE",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Burkhard_Jasper_10.jpg/120px-Burkhard_Jasper_10.jpg",
      "name":"Burkhard Jasper",
      "birth":"1954",
      "party":"CDU",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Joumaah%2C_Petra.jpg/120px-Joumaah%2C_Petra.jpg",
      "name":"Petra Joumaah",
      "birth":"1955",
      "party":"CDU",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Koch%2C_Veronika.jpg/120px-Koch%2C_Veronika.jpg",
      "name":"Veronika Koch",
      "birth":"1972",
      "party":"CDU",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Kortlang%2C_Horst.jpg/120px-Kortlang%2C_Horst.jpg",
      "name":"Horst Kortlang",
      "birth":"1948",
      "party":"FDP",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Lammerskitten%2C_Clemens.jpg/120px-Lammerskitten%2C_Clemens.jpg",
      "name":"Clemens Lammerskitten",
      "birth":"1957",
      "party":"CDU",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Sebastian_Lechner.jpg/120px-Sebastian_Lechner.jpg",
      "name":"Sebastian Lechner",
      "birth":"1980",
      "party":"CDU",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/2018-02-28_AfD_Peer_Lilienthal_MdL-6229.jpg/120px-2018-02-28_AfD_Peer_Lilienthal_MdL-6229.jpg",
      "name":"Peer Lilienthal",
      "birth":"1979",
      "party":"AfD",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Limburg%2C_Helge.jpg/120px-Limburg%2C_Helge.jpg",
      "name":"Helge Limburg",
      "birth":"1982",
      "party":"GRÜNE",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Meyer%2C_Christian.jpg/120px-Meyer%2C_Christian.jpg",
      "name":"Christian Meyer",
      "birth":"1975",
      "party":"GRÜNE",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Meyer_zu_strohen.jpg/120px-Meyer_zu_strohen.jpg",
      "name":"Anette Meyer zu Strohen",
      "birth":"1955",
      "party":"CDU",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Niewerth-Baumann%2C_Esther.jpg/120px-Niewerth-Baumann%2C_Esther.jpg",
      "name":"Esther Niewerth-Baumann",
      "birth":"1968",
      "party":"CDU",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Oesterhelweg%2C_Frank.jpg/120px-Oesterhelweg%2C_Frank.jpg",
      "name":"Frank Oesterhelweg",
      "birth":"1961",
      "party":"CDU",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Oetjen%2C_Jan-Christoph.jpg/120px-Oetjen%2C_Jan-Christoph.jpg",
      "name":"Jan-Christoph Oetjen",
      "birth":"1978",
      "party":"FDP",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Onay%2C_Belit.jpg/120px-Onay%2C_Belit.jpg",
      "name":"Belit Onay",
      "birth":"1981",
      "party":"GRÜNE",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Pancescu%2C_Dragos.jpg/120px-Pancescu%2C_Dragos.jpg",
      "name":"Dragos Pancescu",
      "birth":"1967",
      "party":"GRÜNE",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Piel%2C_Anja.jpg/120px-Piel%2C_Anja.jpg",
      "name":"Anja Piel",
      "birth":"1965",
      "party":"GRÜNE",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Pieper%2C_Gudrun.jpg/120px-Pieper%2C_Gudrun.jpg",
      "name":"Gudrun Pieper",
      "birth":"1956",
      "party":"CDU",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Plett%2C_Christoph.jpg/120px-Plett%2C_Christoph.jpg",
      "name":"Christoph Plett",
      "birth":"1966",
      "party":"CDU",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Placeholder_staff_photo.svg/120px-Placeholder_staff_photo.svg.png",
      "name":"Laura Rebuschat",
      "birth":"1989",
      "party":"CDU",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/R%C3%B6hler%2C_Thiemo.jpg/120px-R%C3%B6hler%2C_Thiemo.jpg",
      "name":"Thiemo Röhler",
      "birth":"1979",
      "party":"CDU",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Placeholder_staff_photo.svg/120px-Placeholder_staff_photo.svg.png",
      "name":"Harm Rykena",
      "birth":"1963",
      "party":"AfD",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Schatta%2C_Oliver.jpg/120px-Schatta%2C_Oliver.jpg",
      "name":"Oliver Schatta",
      "birth":"1974",
      "party":"CDU",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Schulz-Hendel%2C_Detlev.jpg/120px-Schulz-Hendel%2C_Detlev.jpg",
      "name":"Detlev Schulz-Hendel",
      "birth":"1962",
      "party":"GRÜNE",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Landtag_Niedersachsen_DSCF7716.JPG/120px-Landtag_Niedersachsen_DSCF7716.JPG",
      "name":"Uwe Schünemann",
      "birth":"1964",
      "party":"CDU",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Sch%C3%BCtz%2C_Susanne.jpg/120px-Sch%C3%BCtz%2C_Susanne.jpg",
      "name":"Susanne Schütz",
      "birth":"1966",
      "party":"FDP",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Staudte%2C_Miriam.jpg/120px-Staudte%2C_Miriam.jpg",
      "name":"Miriam Staudte",
      "birth":"1975",
      "party":"GRÜNE",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Th%C3%BCmler%2C_Bj%C3%B6rn-9173.jpg/120px-Th%C3%BCmler%2C_Bj%C3%B6rn-9173.jpg",
      "name":"Björn Thümler",
      "birth":"1970",
      "party":"CDU",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Toepffer%2C_Dirk.jpg/120px-Toepffer%2C_Dirk.jpg",
      "name":"Dirk Toepffer",
      "birth":"1965",
      "party":"CDU",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Viehoff%2C_Eva.jpg/120px-Viehoff%2C_Eva.jpg",
      "name":"Eva Viehoff",
      "birth":"1958",
      "party":"GRÜNE",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Wenzel%2C_Stefan.jpg/120px-Wenzel%2C_Stefan.jpg",
      "name":"Stefan Wenzel",
      "birth":"1962",
      "party":"GRÜNE",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Westmann%2C_Editha.jpg/120px-Westmann%2C_Editha.jpg",
      "name":"Editha Westmann",
      "birth":"1963",
      "party":"CDU",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/2018-02-28_AfD_Klaus_Wichmann_MdL-6233.jpg/120px-2018-02-28_AfD_Klaus_Wichmann_MdL-6233.jpg",
      "name":"Klaus Wichmann",
      "birth":"1964",
      "party":"AfD",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Placeholder_staff_photo.svg/120px-Placeholder_staff_photo.svg.png",
      "name":"Stefan Wirtz",
      "birth":"1968",
      "party":"AfD",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Placeholder_staff_photo.svg/120px-Placeholder_staff_photo.svg.png",
      "name":"Mareike Wulf",
      "birth":"1979",
      "party":"CDU",
      "wahlkreis":"Landesliste",
      "votes":""
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Fredermann%2C_Rainer.jpg/120px-Fredermann%2C_Rainer.jpg",
      "name":"Rainer Fredermann",
      "birth":"1959",
      "party":"CDU",
      "wahlkreis":"Langenhagen",
      "votes":"39,0"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Thiele%2C_Ulf.jpg/120px-Thiele%2C_Ulf.jpg",
      "name":"Ulf Thiele",
      "birth":"1971",
      "party":"CDU",
      "wahlkreis":"Leer",
      "votes":"40,9"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Landtag_Niedersachsen_DSCF7242.JPG/120px-Landtag_Niedersachsen_DSCF7242.JPG",
      "name":"Johanne Modder",
      "birth":"1960",
      "party":"SPD",
      "wahlkreis":"Leer/Borkum",
      "votes":"53,7"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Placeholder_staff_photo.svg/120px-Placeholder_staff_photo.svg.png",
      "name":"Thordies Hanisch",
      "birth":"1979",
      "party":"SPD",
      "wahlkreis":"Lehrte",
      "votes":"41,4"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/F%C3%BChner%2C_Christian.jpg/120px-F%C3%BChner%2C_Christian.jpg",
      "name":"Christian Fühner",
      "birth":"1987",
      "party":"CDU",
      "wahlkreis":"Lingen",
      "votes":"58,0"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Schr%C3%B6der-Ehlers%2C_Andrea.jpg/120px-Schr%C3%B6der-Ehlers%2C_Andrea.jpg",
      "name":"Andrea Schröder-Ehlers",
      "birth":"1961",
      "party":"SPD",
      "wahlkreis":"Lüneburg",
      "votes":"38,5"
}, {
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/H%C3%B6vel%2C_Gerda.jpg/120px-H%C3%B6vel%2C_Gerda.jpg",
      "name":"Gerda Hövel",
      "birth":"1954",
      "party":"CDU",
      "wahlkreis":"Melle",
      "votes":"42,5"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Hiebing%2C_Bernd-Carsten.jpg/120px-Hiebing%2C_Bernd-Carsten.jpg",
      "name":"Bernd-Carsten Hiebing",
      "birth":"1951",
      "party":"CDU",
      "wahlkreis":"Meppen",
      "votes":"59,3"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Placeholder_staff_photo.svg/120px-Placeholder_staff_photo.svg.png",
      "name":"Wiebke Osigus",
      "birth":"1981",
      "party":"SPD",
      "wahlkreis":"Neustadt/Wunstorf",
      "votes":"41,7"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Schm%C3%A4deke%2C_Frank.jpg/120px-Schm%C3%A4deke%2C_Frank.jpg",
      "name":"Frank Schmädeke",
      "birth":"1965",
      "party":"CDU",
      "wahlkreis":"Nienburg-Nord",
      "votes":"40,2"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Heineking%2C_Karsten.jpg/120px-Heineking%2C_Karsten.jpg",
      "name":"Karsten Heineking",
      "birth":"1961",
      "party":"CDU",
      "wahlkreis":"Nienburg/Schaumburg",
      "votes":"45,4"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Frauke_Heiligenstadt_%28Martin_Rulsch%29_2.jpg/120px-Frauke_Heiligenstadt_%28Martin_Rulsch%29_2.jpg",
      "name":"Frauke Heiligenstadt",
      "birth":"1966",
      "party":"SPD",
      "wahlkreis":"Northeim",
      "votes":"47,0"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Axel_Brammer_2009_%2856%29.jpg/120px-Axel_Brammer_2009_%2856%29.jpg",
      "name":"Axel Brammer",
      "birth":"1955",
      "party":"SPD",
      "wahlkreis":"Oldenburg-Land",
      "votes":"35,7"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Ulf_Prange_aktuell_cropped.jpg/120px-Ulf_Prange_aktuell_cropped.jpg",
      "name":"Ulf Prange",
      "birth":"1975",
      "party":"SPD",
      "wahlkreis":"Oldenburg-Mitte/Süd",
      "votes":"41,2"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Naber%2C_Hanna.jpg/120px-Naber%2C_Hanna.jpg",
      "name":"Hanna Naber",
      "birth":"1971",
      "party":"SPD",
      "wahlkreis":"Oldenburg-Nord/West",
      "votes":"42,9"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Henning%2C_Frank.jpg/120px-Henning%2C_Frank.jpg",
      "name":"Frank Henning",
      "birth":"1966",
      "party":"SPD",
      "wahlkreis":"Osnabrück-Ost",
      "votes":"40,1"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Pistorius%2C_Boris-9084.jpg/120px-Pistorius%2C_Boris-9084.jpg",
      "name":"Boris Pistorius",
      "birth":"1960",
      "party":"SPD",
      "wahlkreis":"Osnabrück-West",
      "votes":"42,6"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Miesner%2C_Axel.jpg/120px-Miesner%2C_Axel.jpg",
      "name":"Axel Miesner",
      "birth":"1965",
      "party":"CDU",
      "wahlkreis":"Osterholz",
      "votes":"36,1"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Bernd_Busemann_%28Martin_Rulsch%29_1.jpg/120px-Bernd_Busemann_%28Martin_Rulsch%29_1.jpg",
      "name":"Bernhard Busemann",
      "birth":"1952",
      "party":"CDU",
      "wahlkreis":"Papenburg",
      "votes":"60,1"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/M%C3%B6hle%2C_Matthias.jpg/120px-M%C3%B6hle%2C_Matthias.jpg",
      "name":"Matthias Möhle",
      "birth":"1959",
      "party":"SPD",
      "wahlkreis":"Peine",
      "votes":"48,1"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Holsten%2C_Eike.jpg/120px-Holsten%2C_Eike.jpg",
      "name":"Eike Holsten",
      "birth":"1983",
      "party":"CDU",
      "wahlkreis":"Rotenburg",
      "votes":"39,4"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Klein%2C_Stefan.jpg/120px-Klein%2C_Stefan.jpg",
      "name":"Stefan Klein",
      "birth":"1970",
      "party":"SPD",
      "wahlkreis":"Salzgitter",
      "votes":"52,2"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Brinkmann%2C_Markus-8517.jpg/120px-Brinkmann%2C_Markus-8517.jpg",
      "name":"Markus Brinkmann",
      "birth":"1961",
      "party":"SPD",
      "wahlkreis":"Sarstedt/Bad Salzdetfurth",
      "votes":"45,9"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Becker%2C_Karsten.jpg/120px-Becker%2C_Karsten.jpg",
      "name":"Karsten Becker",
      "birth":"1958",
      "party":"SPD",
      "wahlkreis":"Schaumburg",
      "votes":"46,8"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Landtag_Niedersachsen_DSCF7439.JPG/120px-Landtag_Niedersachsen_DSCF7439.JPG",
      "name":"Petra Emmerich-Kopatsch",
      "birth":"1960",
      "party":"SPD",
      "wahlkreis":"Seesen",
      "votes":"45,0"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Althusmann.jpg/120px-Althusmann.jpg",
      "name":"Bernd Althusmann",
      "birth":"1966",
      "party":"CDU",
      "wahlkreis":"Seevetal",
      "votes":"38,6"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Von_Danwitz%2C_Karl-Ludwig.jpg/120px-Von_Danwitz%2C_Karl-Ludwig.jpg",
      "name":"Karl-Ludwig von Danwitz",
      "birth":"1958",
      "party":"CDU",
      "wahlkreis":"Soltau",
      "votes":"41,9"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Liebelt%2C_Kerstin.jpg/120px-Liebelt%2C_Kerstin.jpg",
      "name":"Kerstin Liebelt",
      "birth":"1962",
      "party":"SPD",
      "wahlkreis":"Springe",
      "votes":"40,8"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Seefried%2C_Kai.jpg/120px-Seefried%2C_Kai.jpg",
      "name":"Kai Seefried",
      "birth":"1978",
      "party":"CDU",
      "wahlkreis":"Stade",
      "votes":"43,4"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Meyer%2C_Volker.jpg/120px-Meyer%2C_Volker.jpg",
      "name":"Volker Meyer",
      "birth":"1968",
      "party":"CDU",
      "wahlkreis":"Syke",
      "votes":"35,8"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Hillmer%2C_J%C3%B6rg.jpg/120px-Hillmer%2C_J%C3%B6rg.jpg",
      "name":"Jörg Hillmer",
      "birth":"1966",
      "party":"CDU",
      "wahlkreis":"Uelzen",
      "votes":"36,8"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Lottke%2C_Oliver.jpg/120px-Lottke%2C_Oliver.jpg",
      "name":"Oliver Lottke",
      "birth":"1972",
      "party":"SPD",
      "wahlkreis":"Unterweser",
      "votes":"38,1"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Siemer%2C_Stephan.jpg/120px-Siemer%2C_Stephan.jpg",
      "name":"Stephan Siemer",
      "birth":"1961",
      "party":"CDU",
      "wahlkreis":"Vechta",
      "votes":"60,2"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Liebetruth%2C_D%C3%B6rte.jpg/120px-Liebetruth%2C_D%C3%B6rte.jpg",
      "name":"Dörte Liebetruth",
      "birth":"1979",
      "party":"SPD",
      "wahlkreis":"Verden",
      "votes":"39,8"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Zinke%2C_Sebastian.jpg/120px-Zinke%2C_Sebastian.jpg",
      "name":"Sebastian Zinke",
      "birth":"1981",
      "party":"SPD",
      "wahlkreis":"Walsrode",
      "votes":"46,4"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Logemann%2C_Karin.jpg/120px-Logemann%2C_Karin.jpg",
      "name":"Karin Logemann",
      "birth":"1961",
      "party":"SPD",
      "wahlkreis":"Wesermarsch",
      "votes":"42,8"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Holger_Ansmann_%28Martin_Rulsch%29_2.jpg/120px-Holger_Ansmann_%28Martin_Rulsch%29_2.jpg",
      "name":"Holger Ansmann",
      "birth":"1957",
      "party":"SPD",
      "wahlkreis":"Wilhelmshaven",
      "votes":"45,8"
	},
	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Bock%2C_Andre-8189.jpg/120px-Bock%2C_Andre-8189.jpg",
      "name":"André Bock",
      "birth":"1973",
      "party":"CDU",
      "wahlkreis":"Winsen",
      "votes":"40,2"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Placeholder_staff_photo.svg/120px-Placeholder_staff_photo.svg.png",
      "name":"Jochen Beekhuis",
      "birth":"1977",
      "party":"SPD",
      "wahlkreis":"Wittmund/Inseln",
      "votes":"43,6"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Kreiser%2C_Dunja.jpg/120px-Kreiser%2C_Dunja.jpg",
      "name":"Dunja Kreiser",
      "birth":"1971",
      "party":"SPD",
      "wahlkreis":"Wolfenbüttel-Nord",
      "votes":"39,7"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Bosse%2C_Marcus.jpg/120px-Bosse%2C_Marcus.jpg",
      "name":"Marcus Bosse",
      "birth":"1965",
      "party":"SPD",
      "wahlkreis":"Wolfenbüttel-Süd/Salzgitter",
      "votes":"48,3"
   },	{
      "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Glosemeyer%2C_Immacolata.jpg/120px-Glosemeyer%2C_Immacolata.jpg",
      "name":"Immacolata Glosemeyer",
      "birth":"1965",
      "party":"SPD",
      "wahlkreis":"Wolfsburg",
      "votes":"43,9"
	}
];

export default abgeordnete;

export const byWahlkreis: {[wahlkreis: string]: Abgeordneter} = {};

for(const abgeordneter of abgeordnete)
  byWahlkreis[abgeordneter.wahlkreis] = abgeordneter;
