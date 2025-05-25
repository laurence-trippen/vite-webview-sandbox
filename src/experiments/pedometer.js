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

  const secureLocationButton = document.getElementById("request-secure-location");
  secureLocationButton.addEventListener("click", (e) => {
    window.WebViewGoldFitness?.requestSecureLocation();
  });

  const stepCounter = document.getElementById("step-counter");

  window.WebViewGoldFitnessEvents = {
    onStepUpdated(steps) {
      console.log("steps:", steps);

      stepCounter.innerText = steps;
    },
    onSecureLocationReceived(location) {
      console.log("location:", location);
    },
  }
}
