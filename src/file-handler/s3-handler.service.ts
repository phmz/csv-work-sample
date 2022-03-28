import { Injectable } from '@nestjs/common';
import { IFileHandler } from './file-handler.interface';
import { S3 } from 'aws-sdk';

@Injectable()
export class S3HandlerService implements IFileHandler {
  async getStream(key: string, bucket: string) {
    const s3 = new S3({
      s3DisableBodySigning: false,
    });
    return s3
      .getObject({
        Bucket: bucket,
        Key: key,
      })
      .createReadStream();
  }
}
