export const findSaved = (name, gemList, savedGems) => {
  let savedCopy = [...savedGems];
  const isSaved = savedCopy.find(gem => gem.name === name);
  if (isSaved) {
    savedCopy = savedCopy.filter(gem => gem.name !== name);
  } else {
    const gemToSave = gemList.find(gem => gem.name === name);
    savedCopy.push(gemToSave);
  }
  return savedCopy;
};
