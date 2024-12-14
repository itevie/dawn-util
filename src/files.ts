import fs from "fs";

/**
 * Gets all files from a directory
 * @param dirPath The path to search
 * @param arrayOfFiles The current array of files
 * @returns An array of files in the directory
 */
export default function getAllFiles(
  dirPath: string,
  arrayOfFiles: string[] = []
): string[] {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach((file) => {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(dirPath + (dirPath.endsWith("/") ? "" : "/") + file);
    }
  });

  return arrayOfFiles;
}
