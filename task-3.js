function getElementWidth(content, padding, border) {
  console.log(
    `${Number(content) + 2 * Number(padding) + 2 * Number(border)}px `
  );
}
getElementWidth('50', '8', '4');
getElementWidth('60', '12', '8.5');
getElementWidth('200', '0', '0');
