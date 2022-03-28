import { Injectable } from '@nestjs/common';
import * as csv from 'csv-parser';
import * as stream from 'stream';

@Injectable()
export class ProcessorService {
  readCsv() {
    return csv();
  }

  processCsv() {
    return new stream.Transform({
      objectMode: true,
      transform: transformFunc,
    });

    function transformFunc(object, encoding, callback) {
      object.tags = JSON.parse(object.tags.replace(/'/g, '"')); // transform tags string into array
      callback(null, JSON.stringify(object));
    }
  }
}
