export default function () {
  localStorage.setItem("test-data", JSON.stringify({
    firstName: "Laurence",
    lastName: "Trippen",
    age: 26,
    sex: "male",
  }));

  const dynDownloadButton = document.getElementById("dyn-download");
  dynDownloadButton.addEventListener("click", e => {
    const data = JSON.parse(localStorage.getItem("test-data"));

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.innerText = "Download";
    link.href = url;
    link.download = `download.json`;

    document.body.appendChild(link);
    // link.click();

    // document.body.removeChild(link);
    // URL.revokeObjectURL(url);
  });

}
