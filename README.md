# Harmonize

HARMONIZE

### 1. Elevator Pitch
- Create audio recordings through IOS device or browser
- Choose desired recording and create a complementing harmony
- Can be used as digital instrument

### 2. Developer Notes

- Compatible with web only
- Uses expo-av to take recordings/play on the RecordingPage
- Uses Web Audio API in order to process and play harmonized audio from the CreateHarm page
- Pitch of layered tracks are increased by manipulation of cent value
  - 100 cents = 1 semitone/half step, 200 cents = 1 whole tone/whole step
  - Space Harmony: various stems overlayed with slight latency to create spacey sound
  - Delayed Harmony: original recording stem increased on layering stems such that a third, fifth, and the seventh of the original recording is added

### 3. Limitations

- Currently supports recording in browser
- Records audio on IOS device
  - file path of sound can be found but not accessed at the moment
- Does not change the pitch without changing the tempo
  - Web Audio API does not allow direct Granular synthesis of recording stems
  - more info. about Granular synthesis http://pd-tutorial.com/english/ch03s07.html

### 4. SnapShots
<img src="https://user-images.githubusercontent.com/50627842/144575092-d4dcf5d1-3a5c-4131-b6eb-3bc6723c89ce.JPG" width="300px">
<img src="https://user-images.githubusercontent.com/50627842/144575091-e668f236-cb3b-40b6-8c7e-a76e33a18194.JPG" width="300px">
<img src="https://user-images.githubusercontent.com/50627842/144575090-c2b6cade-c68d-4a88-ac42-e7de131673d6.JPG" width="300px">

VideoDemo
https://drive.google.com/drive/folders/1T7ES0f3-JHvjDWPLWB42F9ND3yw23C9Q?usp=sharing

