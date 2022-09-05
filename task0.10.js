function getCommonCharacters (string1, string2) {
    const duplicateCharacter = [];
    for (let i = 0; i < string1.length; i++) {
      for (let j = 0; j < string2.length; j++){
        if (string2[j].toLowerCase() == string1[i].toLowerCase()){
        duplicateCharacter.push(string1[i].toLowerCase()); 
        }
      }
    }
    let commonCharacters = "";
    for (let i = 0; i < duplicateCharacter.length; i++){
      commonCharacters += duplicateCharacter[i];
      if (i < duplicateCharacter.length - 1) 
        commonCharacters += ', '
      } 
      console.log('Common letters: ' +commonCharacters)
    }  
    getCommonCharacters ("house", "computers"); 