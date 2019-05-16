let userPrompt = prompt(`Alors tu veux qu'on discute :`,"");    

  if(userPrompt.includes(`Fortnite`)){
    console.log(`On se fait une partie en soum-soum?`);
  }
  else if(userPrompt.includes(`?`)){
    console.log(`Ouais Ouais...`);
  }
  else if(userPrompt.includes(`!`)){
    console.log(`Pwa, calme-toi...`);
  }
  else if(userPrompt === ``){
    console.log(`t'es en PLS ?`);
  }
  else{
    console.log('Balek');
  }
