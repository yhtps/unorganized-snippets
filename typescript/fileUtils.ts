import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";

export async function getFilePaths(include: vscode.GlobPattern, exclude?: vscode.GlobPattern): Promise<string[]> {
  return (await vscode.workspace.findFiles(include, exclude)).map((file: vscode.Uri): string => file.fsPath);
}
/**
 * @param searchStr A string to search for in the file content
 * @returns The paths of the files that contain the given string in their content
 */
export async function getFilteredFilePaths(filePaths: string[], searchStr: string, excludeContentRgx?: RegExp[]): Promise<string[]> {
  const qFContents: string[] = await Promise.all(filePaths.map((f: string): Promise<string> => getQualifiedFileContent(f, excludeContentRgx)));
  return filePaths.filter((_file: string, index: number): boolean => qFContents[index].includes(searchStr));
}

/**
 * @param excludeContentRgx  An optional array of regex to remove content from original content. For example, [\/\\/\\/.*\/g] will remove single-line comments from the content.
 * @returns The content of the file, or the qualified content if excludeContentRgx is provided
 */
export async function getQualifiedFileContent(filePath: string, excludeContentRgx?: RegExp[]): Promise<string> {
  let fileContent: string = (await fs.promises.readFile(filePath, "utf8")).toString();
  return excludeContentRgx ? excludeContentRgx.map((r: RegExp): string => (fileContent = fileContent.replace(r, ""))).join("") : fileContent;
}

export function getFileName(filePath: string): string {
  return path.basename(filePath);
}

/**
 * Creates a file with the given content if the file does not exist
 * @returns True if the file was created, false otherwise
 */
export async function createFile(filePath: string, fileContent: string): Promise<boolean> {
  try {
    await fs.promises.access(filePath);
    return false;
  } catch (error) {
    await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
    await fs.promises.writeFile(filePath, fileContent);
  }
  return true;
}
