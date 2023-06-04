<?php
    // Vérifier si le formulaire a été soumis
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Récupérer les données du formulaire
        $marque = $_POST["marque"];
        $modele = $_POST["modele"];
        $annee = $_POST["annee"];
        $prix = $_POST["prix"];
        $description = $_POST["description"];

        // Connexion à la base de données
        $servername = "localhost";
        $username = "votre_nom_utilisateur";
        $password = "votre_mot_de_passe";
        $dbname = "nom_de_votre_base_de_donnees";

        $conn = new mysqli($servername, $username, $password, $dbname);

        // Vérifier la connexion
        if ($conn->connect_error) {
            die("Échec de la connexion à la base de données: " . $conn->connect_error);
        }

        // Préparer et exécuter la requête d'insertion
        $sql = "INSERT INTO voitures (marque, modele, annee, prix, description) VALUES ('$marque', '$modele', '$annee', '$prix', '$description')";

        if ($conn->query($sql) === TRUE) {
            echo "Voiture ajoutée avec succès.";
        } else {
            echo "Erreur lors de l'ajout de la voiture: " . $conn->error;
        }

        // Fermer la connexion à la base de données
        $conn->close();
    }

    ?>