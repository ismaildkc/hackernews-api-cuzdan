const WordCounter = (sentences, count) => {
  // Make flat string from array
  sentences = String(sentences)

  // Remove special chars & make lowercase 
  sentences = sentences.replaceAll(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLocaleLowerCase();
  sentences = sentences.replaceAll("  ", " ");

  // Words to exclude
  const exclude = ["the", "a", "for", "to", "of", "and"];
  sentences = sentences.split(" ").filter(word => exclude.indexOf(word) === -1);

  const densities = {};
  sentences.forEach(word => {
    densities[word] = (densities[word] || 0) + 1;
  });

  // Sort by density
  const sortedArray = Object.keys(densities).map(word => ({
    word: word,
    density: densities[word]
  })).sort((a, b) => b.density - a.density);

  return sortedArray.slice(0, count);
}

export { WordCounter }