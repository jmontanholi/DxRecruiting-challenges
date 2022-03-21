const find_longest_word = (string) => {
  let longest = '';
  const other_longest = [];
  const remove_commas = string.replace(/[^a-zA-Z\s]/g, '');

  remove_commas.split(' ').forEach((e) => {
      e.length > longest.length ? longest = e : null;
      e.length == longest.length ? other_longest.push(e) : null;
  });

  other_longest.forEach((e) => {
      if (e.length == longest.length) {
        let vowel_count1 = 0;
        let vowel_count2 = 0;
        e.split('').forEach((letter) => {
          if (letter.match(/[aAeEiIoOuU]/)) {
            vowel_count1++;
          }
        })
        longest.split('').forEach((letter) => {
          if (letter.match(/[aAeEiIoOuU]/)) {
            vowel_count2++;
          }
        })
        vowel_count1 > vowel_count2 ? longest = e : null;
      }  
  })
  console.log({other_longest})
  return longest;
}

// sample input: "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";
// sample output: "experience";
// Note: Longest words are "everything" and "experience", but the second has the most vowels

console.log(find_longest_word("Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"));