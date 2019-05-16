const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?"); 
  let nbreLivrePasEmprunte = 0;
  let nbreLivreEmprunteAuMoinsUneFois = 0;

  books.forEach(books => {
    if (books.rented >= 1){
      nbreLivreEmprunteAuMoinsUneFois+=1;
    }
    else{
      nbreLivrePasEmprunte+=1
    }
  })
      console.log(`${nbreLivreEmprunteAuMoinsUneFois} ont été empruntés au moins une fois`)
      console.log(`${nbreLivrePasEmprunte} n'ont pas été empruntés`)
      if (nbreLivrePasEmprunte === 0){
        console.log("donc tous les livres ont été empruntés au moins une fois")
      }

console.log("-----------------------------");


console.log("Quel est livre le plus emprunté ?"); 
  let livreLePlusEmprunte = "";
  let nbreEmpruntDuLivreLePlusEmprunte = 0
  books.forEach(books => {
    if (books.rented > nbreEmpruntDuLivreLePlusEmprunte){
      livreLePlusEmprunte = books.title;
      nbreEmpruntDuLivreLePlusEmprunte = books.rented
    }
  })    
  console.log(`Le livre ${livreLePlusEmprunte} a ete le plus empruntés (${nbreEmpruntDuLivreLePlusEmprunte} fois)`)

console.log("-----------------------------");

console.log("Quel est livre le moins emprunté ?"); 
  let livreLeMoinsEmprunte = "";
  let nbreEmpruntDuLivreLeMoinsEmprunte = 10000000
  books.forEach(books => {
    if (books.rented <= nbreEmpruntDuLivreLeMoinsEmprunte){
      livreLeMoinsEmprunte = books.title;
      nbreEmpruntDuLivreLeMoinsEmprunte = books.rented
    }
  })    
  console.log(`Le livre ${livreLeMoinsEmprunte} a ete le moins empruntés (${nbreEmpruntDuLivreLeMoinsEmprunte} fois)`)

console.log("-----------------------------");

console.log("Trouve le livre avec l'ID: 873495"); 
  const result1 = books.find(books => books.id === 873495);
  console.log(result1);
console.log("-----------------------------");

console.log("Supprime le livre avec l'ID: 133712 "); 
  const result2 = books.findIndex(books => books.id === 133712);
  books.splice(result2,1)
  console.log(books);


console.log("-----------------------------");

console.log("Trie les livres par ordre alphabétique.");
  const result3 = books.sort((a,b)=> (a.title>b.title)*2-1);
  console.log(result3);



console.log("-----------------------------");
