export default function() {
  console.log(window.WebViewGoldFitness);

  const startButton = document.getElementById("pedometer-start");
  startButton.addEventListener("click", (e) => {
    window.WebViewGoldFitness?.startPedometer();
  });

  const stopButton = document.getElementById("pedometer-stop");
  stopButton.addEventListener("click", (e) => {
    window.WebViewGoldFitness?.stopPedometer();
  });

  const stepCounter = document.getElementById("step-counter");

  window.WebViewGoldFitnessEvents = {
    onStepUpdated(steps) {
      console.log(steps);

      stepCounter.innerText = steps;
    }
  }
}
