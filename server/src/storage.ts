import fs from 'fs';
import path from 'path';

const storageDir = './storage';
function getFilePath(name: string): string {
  return path.resolve(storageDir, name)
}

export default {
  async get(name: string): Promise<string> {
    return fs.promises.readFile(getFilePath(name), { encoding: 'utf-8' });
  },
  async set(name: string, value: string): Promise<void> {
    return fs.promises.writeFile(getFilePath(name), value, { encoding: 'utf-8' });
  }
}