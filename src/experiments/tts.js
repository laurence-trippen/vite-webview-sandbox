export default function() {
  const ttsTextEl = document.getElementById("tts-text");
  const ttsSubmit = document.getElementById("tts-submit");

  const ttsHref = document.createElement("a");

  ttsSubmit.addEventListener("click", () => {
    const text = ttsTextEl.value;

    console.log(text);

    const url = `tts://?text=${text}`;
    ttsHref.href = url;
    ttsHref.innerText = "TTS";
    ttsHref.click();

    // window.open(`, "_self");

    
  });
}
