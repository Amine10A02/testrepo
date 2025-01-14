



function increaseCount() {
  count++;        // Augmente le compteur de 1
  displayCount(); // Met à jour l'affichage sur la page
  checkCountValue(); // Vérifie les jalons
}

function displayCount() {
  document.getElementById('countDisplay').innerHTML = count; // Affiche la valeur actuelle
}

function checkCountValue() {
  if (count === 10) {
    alert("Your Instagram post gained 10 followers! Congratulations!");
  } else if (count === 20) {
    alert("Your Instagram post gained 20 followers! Keep it up!");
  }
}
    
