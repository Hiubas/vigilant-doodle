declare const $MM: any;

// Black and Gold Clock and Calendar plugin for MIDI Mixer
// by Jules

// Update the clock every second
setInterval(() => {
  // Get the current date and time
  const now = new Date();

  // Format the date and time
  const date = now.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const time = now.toLocaleTimeString();

  // Combine the date and time
  const dateTimeString = `${date} - ${time}`;

  // Set the status in the settings
  $MM.setSettingsStatus('clock', dateTimeString);
}, 1000);
