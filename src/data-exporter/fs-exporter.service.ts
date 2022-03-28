import { Injectable } from '@nestjs/common';
import { createWriteStream } from 'fs';
import * as stream from 'stream';

@Injectable()
export class FsExporterService {
  formatStream() {
    let first = true;
    return new stream.Transform({
      objectMode: true,
      transform: transformFunc,
      flush: flushFunc,
    });

    function transformFunc(string, encoding, callback) {
      if (first) {
        first = false;
        const chunk = '{"events":[' + string; // add first string to array
        callback(null, chunk);
      } else {
        const chunk = ',' + string; // add comma to separate strings
        callback(null, chunk);
      }
    }

    function flushFunc(callback) {
      const chunk = ']}';
      callback(null, chunk);
    }
  }
  writeStream() {
    return createWriteStream('data.json');
  }
}
