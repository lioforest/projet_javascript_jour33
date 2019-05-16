const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Liste des entrepreneurs nees dans les annees 70 : (code version avec filter)"); 
  const result1 = entrepreneurs.filter(entrepreneurs => entrepreneurs.year >= 1970 && entrepreneurs.year < 1980 );
  console.log(result1);
console.log("-----------------------------");


console.log("Liste des entrepreneurs nees dans les annees 70 : (code version avec foreach)");
  entrepreneurs.forEach(entrepreneurs => {
    if(entrepreneurs.year >= 1970 && entrepreneurs.year < 1980) {
      console.log(`${entrepreneurs.first} ${entrepreneurs.last} est nee en ${entrepreneurs.year}`);
    } 
 });
console.log("-----------------------------");

console.log("une array qui contient le prénom et le nom des entrepreneurs");
  let entrepreneurs_name = [{}];
  entrepreneurs.forEach(entrepreneurs => {
      entrepreneurs_name.push({first: entrepreneurs.first, last: entrepreneurs.last});
  });
  console.log(entrepreneurs_name)

console.log("-----------------------------");

console.log("Quel age aurait chaque inventeur aujourd'hui ?");
  let age = 0
  entrepreneurs.forEach(entrepreneurs => {
    age = 2019 - entrepreneurs.year
    console.log(`${entrepreneurs.first} ${entrepreneurs.last} aurait ${age} ans`);      
  });
console.log("-----------------------------");


console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille. ?");
  arrayLastName = []  
  entrepreneurs.forEach(entrepreneurs_content => {
    arrayLastName.push(entrepreneurs_content.last)
  })
  console.log(arrayLastName.sort());

console.log("-----------------------------");
