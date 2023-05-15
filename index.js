//mappen med lydfiler

// const soundFolder = "sounds/";

// // array med lydfiler

// const soundList = [
//   "clap.wav",
//   "hihat.wav",
//   "openhat.wav",
//   "ride.wav",
//   "snare.wav",
//   "tink.wav",
//   "tom.wav",
//   "kick.wav",
// ];

// const drumkitContainer = document.getElementById("drumkit");

// // lag en button og en audio element

// function drum(soundFile) {
//   const button = document.createElement("button");
//   button.textContent = soundFile;

//   const sound = new Audio(soundFile);

//   button.addEventListener("click", () => {
//     //console.log("PLAY!")
//     sound.play();
//   });
//   return button;
// }

// drumkitContainer.append();

// // for method

// // for (const sound of soundList) {
// //   drumkitContainer.append(drum(soundFolder + sound));
// // }

// // forEach method

// // soundList.forEach((sound, index) => {
// //   drumkitContainer.append(drum(soundFolder + sound));
// // });

// // loop gjennom soundList
// const drumkitElements = soundList.map((sound) => {
//   return drum(soundFolder + sound);
// });

// // let myArray = ["abc", "def", "hjjk"];

// // pakk opp innholder fra arrayet slik at det kan appendes til drumkit

// drumkitContainer.append(...drumkitElements);

// //keybord events:

// const soundKeys = {
//   q: soundList[0],
//   w: soundList[1],
//   e: soundList[2],
//   r: soundList[3],
//   t: soundList[4],
//   y: soundList[5],
//   u: soundList[6],
//   i: soundList[7],
// };

// document.addEventListener("keydown", (event) => {
//   switch (event.key) {
//     case "q":
//       const soundClap = new Audio(soundFolder + soundList[0]);
//       soundClap.play();
//       break;
//     case "w":
//       const soundHihat = new Audio(soundFolder + soundList[1]);
//       soundHihat.play();
//       break;
//     case "e":
//       const soundKick = new Audio(soundFolder + soundList[2]);
//       soundKick.play();
//       break;
//     case "r":
//       const soundopenHat = new Audio(soundFolder + soundList[3]);
//       soundopenHat.play();
//       break;
//     case "t":
//       const soundRide = new Audio(soundFolder + soundList[4]);
//       soundRide.play();
//       break;
//     case "y":
//       const soundSnare = new Audio(soundFolder + soundList[5]);
//       soundSnare.play();
//       break;
//     case "u":
//       const soundTink = new Audio(soundFolder + soundList[6]);
//       soundTink.play();
//       break;
//     case "i":
//       const soundTom = new Audio(soundFolder + soundList[7]);
//       soundTom.play();
//       break;
//   }
// });
