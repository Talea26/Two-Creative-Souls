//Galerie: Klick auf Bild zoomt Bild
    document.addEventListener("DOMContentLoaded", function () {
  const bilder = [
    "img/nudeln.jpg",
    "img/hund.jpg",
    "img/matcha.jpg",
    "img/familie.jpg",
    "img/urlaub.jpg",
    "img/schwester.jpg"
  ];

  const container = document.getElementById("galleryContainer");

  bilder.forEach((pfad) => {
    const div = document.createElement("div");
    div.classList.add("gallery-item");

    const img = document.createElement("img");
    img.src = pfad;
    img.alt = "Galeriebild";

    div.appendChild(img);
    container.appendChild(div);
  });
});

//Kontaktformular: Validierung
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("feedback");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      feedback.textContent = "Bitte füllen Sie alle Felder aus.";
      feedback.style.color = "red";
    } else {
      feedback.textContent = "Vielen Dank für Ihre Nachricht!";
      feedback.style.color = "green";
      form.reset();
    }
  });
});