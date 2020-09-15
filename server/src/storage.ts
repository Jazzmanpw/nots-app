import fs from 'fs';
import path from 'path';

const storageDir = './storage';

export default {
  async get(name: string): Promise<string> {
    return fs.promises.readFile(path.resolve(storageDir, name), { encoding: 'utf-8' });
  },
}