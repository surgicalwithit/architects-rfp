import React from 'react';
import './Gapi.css';


//TEST 

function App() {

  var gapi = window.gapi
  /* 
    Update with your own Client Id and Api key 
  */
  var CLIENT_ID = "144222041606-lq84uujgv7eh6u73cls7a9k3skf56n70.apps.googleusercontent.com"
  var API_KEY = "AIzaSyAvqBPXbwDSdFvalGfX0SOA8tc9MYFr56k"
  var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
  var SCOPES = "https://www.googleapis.com/auth/calendar.events"

  const handleClick = () => {
    gapi.load('client:auth2', () => {
      console.log('loaded client')

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })

      gapi.client.load('calendar', 'v3', () => console.log('bam!'))

      gapi.auth2.getAuthInstance().signIn()
      .then(() => {
        
        var event = {
          'summary': 'Awesome Event!',
          'location': '800 Howard St., San Francisco, CA 94103',
          'description': 'Really great refreshments',
          'start': {
            'dateTime': '2020-06-28T09:00:00-07:00',
            'timeZone': 'America/Los_Angeles'
          },
          'end': {
            'dateTime': '2020-06-28T17:00:00-07:00',
            'timeZone': 'America/Los_Angeles'
          },
          'recurrence': [
            'RRULE:FREQ=DAILY;COUNT=2'
          ],
          'attendees': [
            {'email': 'lpage@example.com'},
            {'email': 'sbrin@example.com'}
          ],
          'reminders': {
            'useDefault': false,
            'overrides': [
              {'method': 'email', 'minutes': 24 * 60},
              {'method': 'popup', 'minutes': 10}
            ]
          }
        }

        var request = gapi.client.calendar.events.insert({
          'calendarId': 'primary',
          'resource': event,
        })

        request.execute(event => {
          console.log(event)
          window.open(event.htmlLink)
        })
        

        /*
            Uncomment the following block to get events
        */
        /*
        // get events
        gapi.client.calendar.events.list({
          'calendarId': 'primary',
          'timeMin': (new Date()).toISOString(),
          'showDeleted': false,
          'singleEvents': true,
          'maxResults': 10,
          'orderBy': 'startTime'
        }).then(response => {
          const events = response.result.items
          console.log('EVENTS: ', events)
        })
        */
    

      })
    })
  }

  return (
    <div className="App">
      <div class="navbar">
                <div class="banner">
            <ul>
                <li>Home</li>
                <li>ArchiMatch</li>
                <li>Events</li>
                <li>Invite</li>
                <li>Contact us</li>
            </ul>
            </div>
        </div>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>Click to add event to Google Calendar</p>
        <p style={{fontSize: 18}}>Uncomment the get events code to get events</p>
        <p style={{fontSize: 18}}>Don't forget to add your Client Id and Api key</p>
        <button style={{width: 100, height: 50}} onClick={handleClick}>Add Event</button>
      </header>
      <div class="footer">
            <div class="content">
                <p>	©2021-2022 ArchiTECHs, all rights reserved. </p>
            </div>
        </div>
    </div>
  );
  
}

export default App;