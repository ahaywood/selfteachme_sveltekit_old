export const getBlogFolder = (filepath: string): string => {
  const filePathArray = filepath.split('/');
  return filePathArray[4];
}