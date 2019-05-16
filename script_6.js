const arn = [
  "CCGUCGUUGCGCUACAGC",
  "CCUCGCCGGUACUUCUCG",
  ];
const dico = [
  { abreviation: 'UCU', trad: 'Sérine'},
  { abreviation: 'UCC', trad: 'Sérine'},
  { abreviation: 'UCA', trad: 'Sérine'},
  { abreviation: 'UCG', trad: 'Sérine'},
  { abreviation: 'AGU', trad: 'Sérine'},
  { abreviation: 'AGC', trad: 'Sérine'},
  { abreviation: 'CCU', trad: 'Proline'},
  { abreviation: 'CCC', trad: 'Proline'},
  { abreviation: 'CCA', trad: 'Proline'},
  { abreviation: 'CCG', trad: 'Proline'},
  { abreviation: 'UUA', trad: 'Leuine'},
  { abreviation: 'UUG', trad: 'Leuine'},
  { abreviation: 'UUU', trad: 'Phénylalanine'},
  { abreviation: 'UUC', trad: 'Phénylalanine'},
  { abreviation: 'CGU', trad: 'Arginine'},
  { abreviation: 'CGC', trad: 'Arginine'},
  { abreviation: 'CGA', trad: 'Arginine'},
  { abreviation: 'CGG', trad: 'Arginine'},
  { abreviation: 'AGA', trad: 'Arginine'},
  { abreviation: 'AGG', trad: 'Arginine'},
  { abreviation: 'UAU', trad: 'Tyrosine'},
  { abreviation: 'UAC', trad: 'Tyrosine'},
]
  let  arnLisible = "";
  let  resultat = [];
  arn.forEach(arn => {
    for(let count = 0; count <=15; count+=3){
      resultat = (dico.find(dico => dico.abreviation === arn.slice(count,count+3)))
      arnLisible = arnLisible + resultat.trad +`-`
    }
    console.log (`Le code de la vie de ${arn} est ${arnLisible}`)  
    arnLisible =""   
    console.log("-----------------------------");

  })

