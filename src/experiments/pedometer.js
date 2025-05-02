export default function() {
  console.log(window.AndroidFitness);

  const startButton = document.getElementById("pedometer-start");
  startButton.addEventListener("click", (e) => {
    window.AndroidFitness?.startPedometer();
  });

  const stopButton = document.getElementById("pedometer-stop");
  stopButton.addEventListener("click", (e) => {
    window.AndroidFitness?.stopPedometer();
  });

  const stepCounter = document.getElementById("step-counter");

  window.AndroidFitnessEvents = {
    onStepUpdated(steps) {
      console.log(steps);

      stepCounter.innerText = steps;
    }
  }
}
