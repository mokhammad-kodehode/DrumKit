const soundFolder = "sounds/";

const soundList = [
  "clap.wav",
  "hihat.wav",
  "openhat.wav",
  "ride.wav",
  "snare.wav",
  "tink.wav",
  "tom.wav",
  "kick.wav",
];

const container = document.getElementById("drumkit");

function drum(soundFile) {
  const button = document.createElement("button");
  button.textContent = soundFile;

  const sound = new Audio(soundFile);

  button.addEventListener("click", () => {
    sound.play();
  });
  return button;
}

const drumkitElement = soundList.map((sound) => {
  return drum(soundFolder + sound);
});

container.append(...drumkitElement);

const soundKeys = {
  q: soundList[0],
  w: soundList[1],
  e: soundList[2],
  r: soundList[3],
  t: soundList[4],
  y: soundList[5],
  u: soundList[6],
};

document.addEventListener("keydown", (event) => {
  new Audio(soundFolder + soundKeys[event.key]).play();
});
