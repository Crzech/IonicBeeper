# IonicBeeper
Do you remember Beepers?

![alt text](https://ugc.kn3.net/i/origin/http://www.clasesdeperiodismo.com/wp-content/uploads/2009/08/beeper.gif)

Simple Beeper made with ionic 3 for android devices:
- Using OneSignal API to send push notifications
- Using Google+ Authentication with firebase

# Install for testing
<ul>
  <li>
    Change line 58 of package.json

    "REVERSED_CLIENT_ID": <your_google_firebase_authentication_client_id>
  </li>
  <li>
    Change line 22 of src/providers/rest/rest.ts
    Basic <your_oneSignal_rest_api_key>
  </li>
  <li>
    Change line 31 of src/pages/beeper/beeper.ts
    app_id: <your_oneSignal_application_id>
  </li>
  <li>
    Change line
    Run on a command line:
    <pre>ionic state reset</pre>
    <pre>npm install</pre>
  </li>
</ul>
