import { Injectable } from '@nestjs/common';
import { createWriteStream } from 'fs';

@Injectable()
export class FsExporterService {
  writeStream() {
    return createWriteStream('./events.json');
  }
}
