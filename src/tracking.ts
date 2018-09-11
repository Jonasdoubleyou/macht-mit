/* I know tracking sounds bad,
   but we just wanna see if we actually improve something with our efforts.
   We do not track any personal data. The ISPS and hosters might log IP addresses
   for maintenance, but the data we collect in our database only contains a unique token,
   that is stored on your device like a cookie, and we are unable to relate a token with a
   certain IP or anything. Except of that, we only store certain events, e.g. when the app
   is opened or when you contacted your representative.

   We do not collect where you live, and which politician you click on.

   To see the data we collect about you, go to your browsers network tab,
   the tracking server responds with what it logs ...


   Otherwise we would've used Google Analytics so ... yes we are concerned ybout your privacy :)
   */

let ID = localStorage.getItem("macht-mit-id");

if(!ID) {
  ID = "" + Math.floor(Math.random() * 10 ** 6);
  localStorage.setItem("macht-mit-id", ID);
}

export default function track(event: string, meta?: {[key: string]: string}) {
  // fire and forget, tracking doesnt impact the apps usage ....
  fetch(`http://district-ronin.de:9080/tracker/macht-mit/${event}`, {
    mode: "cors",
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8", },
    body: JSON.stringify({ ...(meta || {}), ID }),
  });
}
