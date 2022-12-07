// const fs = require('fs').promises;
// const path = require('path');
// const process = require('process');
// const {authenticate} = require('@google-cloud/local-auth');
// const {google} = require('googleapis');

// // If modifying these scopes, delete token.json.
// const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
// // The file token.json stores the user's access and refresh tokens, and is
// // created automatically when the authorization flow completes for the first
// // time.
// const TOKEN_PATH = path.join(process.cwd(), 'token.json');
// const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

// /**
//  * Reads previously authorized credentials from the save file.
//  *
//  * @return {Promise<OAuth2Client|null>}
//  */
// async function loadSavedCredentialsIfExist() {
//   try {
//     const content = await fs.readFile(TOKEN_PATH);
//     const credentials = JSON.parse(content);
//     return google.auth.fromJSON(credentials);
//   } catch (err) {
//     return null;
//   }
// }

// /**
//  * Serializes credentials to a file compatible with GoogleAUth.fromJSON.
//  *
//  * @param {OAuth2Client} client
//  * @return {Promise<void>}
//  */
// async function saveCredentials(client) {
//   const content = await fs.readFile(CREDENTIALS_PATH);
//   const keys = JSON.parse(content);
//   const key = keys.installed || keys.web;
//   const payload = JSON.stringify({
//     type: 'authorized_user',
//     client_id: key.client_id,
//     client_secret: key.client_secret,
//     refresh_token: client.credentials.refresh_token,
//   });
//   await fs.writeFile(TOKEN_PATH, payload);
// }

// /**
//  * Load or request or authorization to call APIs.
//  *
//  */
// async function authorize() {
//   let client = await loadSavedCredentialsIfExist();
//   if (client) {
//     return client;
//   }
//   client = await authenticate({
//     scopes: SCOPES,
//     keyfilePath: CREDENTIALS_PATH,
//   });
//   if (client.credentials) {
//     await saveCredentials(client);
//   }
//   return client;
// }

// /**
//  * Lists the next 10 events on the user's primary calendar.
//  * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
//  */
// async function listEvents(auth) {
//   const calendar = google.calendar({version: 'v3', auth});
//   const res = await calendar.events.list({
//     calendarId: 'primary',
//     timeMin: new Date().toISOString(),
//     maxResults: 10,
//     singleEvents: true,
//     orderBy: 'startTime',
//   });
//   const events = res.data.items;
//   if (!events || events.length === 0) {
//     console.log('No upcoming events found.');
//     return;
//   }
//   console.log('Upcoming 10 events:');
//   events.map((event, i) => {
//     const start = event.start.dateTime || event.start.date;
//     console.log(`${start} - ${event.summary}`);
//   });
// }

// authorize().then(listEvents).catch(console.error);
// import React, { useEffect, useState } from "react";
// import { gapi } from "gapi-script";
// import Event from "../../components/Event.js";
 
// function App() {
//   const [events, setEvents] = useState([]);
 
//   const calendarID = process.env.REACT_APP_CALENDAR_ID;
//   const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
//   const accessToken = process.env.REACT_APP_GOOGLE_ACCESS_TOKEN;
 
//   const getEvents = (calendarID, apiKey) => {
//     function initiate() {
//       gapi.client
//         .init({
//           apiKey: apiKey,
//         })
//         .then(function () {
//           return gapi.client.request({
//             path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
//           });
//         })
//         .then(
//           (response) => {
//             let events = response.result.items;
//             console.log(events)
//             setEvents(events);
//           },
//           function (err) {
//             return [false, err];
//           }
//         );
//     }
//     gapi.load("client", initiate);
//   };
 
//   useEffect(() => {
//     const events = getEvents(calendarID, apiKey);
//     setEvents(events);
//   }, []);
 
//   return (
//     <div className="App py-8 flex flex-col justify-center">
//       <h1 className="text-2xl font-bold mb-4">
//         React App with Google Calendar API!
//         <ul>
//           {events?.map((event) => (
//             <li key={event.id} className="flex justify-center">
//               <Event description={event.summary} />
//             </li>
//           ))}
//         </ul>
//       </h1>
//     </div>
//   );
// }
 
// export default App;

// const getEvents = (calendarID, apiKey) => {
    
//   function initiate() {
//     gapi.client
//       .init({
//         apiKey: apiKey,
//       })

//       .then(function () {
//         return gapi.client.request({
//           path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
//         });
//       })

//       .then(
//         (response) => {
//           let events = response.result.items;
//           return events;
//         },
//         function (err) {
//           return [false, err];
//         }
//       );
//   }

//   gapi.load("client", initiate);

// };

const Calendar = () => {
    return(
      <>
      <h1>Google Calendar <a href="https://calendar.google.com/calendar/embed?src=02dfc498ebaa95949f7d20c5cff340496aa25d25b6132c101097a728672e32ab%40group.calendar.google.com&ctz=America%2FDenver" className="h3"><i className="bi bi-box-arrow-up-right"></i></a></h1>
      <div className="text-center">
          <iframe id="google calendar"
              title="Google Calendar"
              src="https://calendar.google.com/calendar/embed?src=02dfc498ebaa95949f7d20c5cff340496aa25d25b6132c101097a728672e32ab%40group.calendar.google.com&ctz=America%2FDenver"style={{width:'100%', height: '90vh'}}>
          </iframe>
      </div>
  </>
    )
}


export default Calendar;