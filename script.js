let synth = window.speechSynthesis;
let voices = [];
const text = document.querySelector("textarea");
// console.log(text);
const btn = document.getElementById("btn");
const selectBox = document.getElementById("select-box");

// jab mei button par click karunga tb changes hounge ..//
btn.addEventListener("click", () => {
  let utterThis = new SpeechSynthesisUtterance(text.value);
  for (v of synth.getVoices()) {
    console.log(selectBox.value, v.name);
    if (selectBox.value === v.name) {
      utterThis.voice = v;
      console.log("ok");
    }
  }
  console.log(utterThis.voice);
  synth.speak(utterThis);
});

// sare options ko update or add krdiya hai mein idhar ..... ///
window.speechSynthesis.onvoiceschanged = () => {
  // On Voices Loaded
  voices = window.speechSynthesis.getVoices();
  let i = 0;
  for (v of voices) {
    const op = document.createElement("option");
    op.text = v.name;
    op.value = v.name;
    selectBox.add(op);
  }
};
