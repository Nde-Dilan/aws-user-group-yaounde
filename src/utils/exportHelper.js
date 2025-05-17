/**
 * Converts the data to index.js format for easy copying
 */
export const formatDataForExport = (data) => {
  return `// filepath: src/data/index.js
export const DATA = ${JSON.stringify(data, null, 2)};
`;
};

/**
 * Downloads the data in index.js format
 */
export const downloadAsIndexJs = (data) => {
  const formattedData = formatDataForExport(data);
  const blob = new Blob([formattedData], { type: 'application/javascript' });
  const url = URL.createObjectURL(blob);
  
  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', url);
  linkElement.setAttribute('download', 'index.js');
  linkElement.click();
  
  URL.revokeObjectURL(url);
};