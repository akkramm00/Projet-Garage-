

// Fonction pour afficher la modal
function ouvrirModal() {
  var modal = document.getElementById('myModal');
  modal.style.display = 'block';
}

// Fonction pour fermer la modal
function fermerModal() {
  var modal = document.getElementById('myModal');
  modal.style.display = 'none';
}

// validation formulaire

function validerFormulaire() {
  var nom = document.getElementById('nom').value.trim();
  var email = document.getElementById('email').value.trim();
  var motDePasse = document.getElementById('motDePasse').value.trim();
  var genre = document.querySelector('input[name="genre"]:checked');
  var adresse = document.getElementById('adresse').value.trim();
  var commentaire = document.getElementById('commentaire').value.trim();

  // Vérifier si les champs sont vides
  if (nom === '' || email === '' || motDePasse === '' || !genre || adresse === '' || commentaire === '') {
    alert("Veuillez remplir tous les champs !");
    return false;
  }

  // Vérifier si l'adresse email est valide
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Veuillez entrer une adresse email valide !");
    return false;
  }

  // Vérifier si le mot de passe a au moins 6 caractères
  if (motDePasse.length < 6) {
    alert("Le mot de passe doit contenir au moins 6 caractères !");
    return false;
  }

  // Ajoutez vos propres conditions de validation supplémentaires ici

  return true;
}
