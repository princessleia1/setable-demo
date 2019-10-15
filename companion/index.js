import * as messaging from "messaging";
import { settingsStorage } from "settings";
import { me } from "companion";

// Helper
const MILLISECONDS_PER_MINUTE = 1000 * 60

// Wake the Companion after 30 minutes
me.wakeInterval = 30 * MILLISECONDS_PER_MINUTE

// Cancel the wakeInterval timer
// 0, null, undefined - default = undefined
me.wakeInterval = 31 * MILLISECONDS_PER_MINUTE

// Internet access 
console.log("Application ID: " + me.applicationId);
if (!me.permissions.granted("access_internet")) {
   console.log("Not allowed to access the internet.");
}
else {
  console.log("The permission API is not yet supported in the Fitbit OS simulator. Fitbit will tell you this anyway.")
}

// Message socket opens
messaging.peerSocket.onopen = () => {
  console.log("Companion Socket Open");
  restoreSettings();
};

// Event fires when a setting is changed
settingsStorage.onchange = function(evt) {
  // Which setting changed
  console.log("key: " + evt.key)

  // What was the old value
  console.log("old value: " + evt.oldValue)

  // What is the new value
  console.log("new value: " + evt.newValue)
}

// Message socket closes
messaging.peerSocket.onclose = () => {
  console.log("Companion Socket Closed");
};

// A user changes settings
settingsStorage.onchange = evt => {
  let data = {
    key: evt.key,
    newValue: evt.newValue
  };
  sendVal(data);
};

// Restore any previously saved settings and send to the device
function restoreSettings() {
  for (let index = 0; index < settingsStorage.length; index++) {
    let key = settingsStorage.key(index);
    if (key) {
      let data = {
        key: key,
        newValue: settingsStorage.getItem(key)
      };
      sendVal(data);
    }
  }
}

// Send data to device using Messaging API
function sendVal(data) {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send(data);
  }
}


