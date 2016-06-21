export default function generateRandomColor(usedColors) {
  let usedColorsPrivate = usedColors;
  if (!usedColorsPrivate) {
    usedColorsPrivate = [];
  }

  let colorHash = '#';
  const possible = '0123456789ABCDEF';

  for (let i = 0; i < 6; i++) {
    colorHash += possible.charAt(
      Math.floor(Math.random() * possible.length)
    );
  }

  /* eliminate duplicates */
  if (usedColorsPrivate.indexOf(colorHash) !== -1) {
    colorHash = generateRandomColor(usedColorsPrivate);
  }
  return colorHash;
}
