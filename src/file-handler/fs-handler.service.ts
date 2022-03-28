import { Injectable } from '@nestjs/common';
import { IFileHandler } from './file-handler.interface';
import { createReadStream } from 'fs';
import { join } from 'path';

@Injectable()
export class FsHandlerService implements IFileHandler {
  async getStream(fileName: string, folder?: string) {
    const path = join(folder ?? process.cwd(), fileName);
    return createReadStream(path);
  }
}
