// Un prompt s'affiche avec la question suivante
let nbre =prompt("De quel nombre veut tu calculer la factorielle ?")
// Utilisateur rentre un nombre (par ex 4)
// Dans la console le résultat suivant est affiché
if (nbre>0){
	function factorial(n) {
		return n ? n * factorial(n - 1) : 1;
	}	
	console.log("Le resultat est :" + factorial(nbre))
}
else{
	console.log("Le chiffre doit etre positif !")
}

