// Un prompt s'affiche avec la question suivante
let nbre =prompt("Salut, bienvenue dans ma super pyramide ! Combien d etages veux-tu ?");
console.log("Pyramide Premiere version du code : ");

let n = 1;
let m = 0;
let bloc = "#";
let space = "";
if (nbre>0){
	//cree le string space avec tous les espaces de départ
	while(n <= nbre-1) {
	  space = space + " "
	  n = n +1
	};
	while(m < nbre) {
	  //je suprrime à chaque passage un espace du string space.
	  console.log(space.substr(m)+bloc)
	  bloc = bloc + "#"
	  m = m +1
	};
};
console.log("Pyramide 2eme version du code avec .repeat :");

m = 1;
bloc = "#";
space = " ";
if (nbre>0){
	n = nbre-1;
	while(m <= nbre) {
	  console.log(space.repeat(n)+bloc.repeat(m))
	  m = m +1
	  n = n -1
	};
};
