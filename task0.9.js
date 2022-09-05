function matchingVowels(word){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    word = word.toLowerCase();
    const vowelsMatched = [];
    for (let i = 0; i < word.length; i++){
        for (let j = 0; j < vowels.length; j++){
            if (word[i] === vowels[j]){
               vowelsMatched.push(vowels[j]);
               
            } 
        }
    } 
    for (let i = 0; i < vowelsMatched.length; i++){
        let vowelCount = 0;
        for (let j = 0; j < vowelsMatched.length; j++){
            if (vowelsMatched[i] == vowelsMatched[j]){
                vowelCount++
            }
            if (vowelCount > 1) {
                vowelsMatched.splice(j, 1);
                j++
            }
        }
    }
    let vowelsInString = '';
    for (let i = 0; i < vowelsMatched.length; i++){
        vowelsInString += vowelsMatched[i];
        if (i < vowelsMatched.length - 1) vowelsInString += ', ';
    }
    console.log('Vowels: ' +vowelsInString);
}
matchingVowels('Umuzi')
 