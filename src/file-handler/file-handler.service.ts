import { Injectable } from '@nestjs/common';
import { S3HandlerService } from './s3-handler.service';
import { FsHandlerService } from './fs-handler.service';
import { RequestHandlerService } from './request-handler.service';

@Injectable()
export class FileHandlerService {
  constructor(
    private readonly s3HandlerService: S3HandlerService,
    private readonly fsHandlerService: FsHandlerService,
    private readonly requestFileHandlerService: RequestHandlerService,
  ) {}

  async getStream(fileName: string, folder?: string) {
    // if using requestHandler
    // AWS_BUCKET_NAME should be the complete bucket url
    // (ex: https://my-bucket.s3.eu-west-3.amazonaws.com)

    // if using s3Handler
    // AWS_BUCKET_NAME should be just the bucket name (ex: my-bucket)

    // if using fsHandler
    // AWS_BUCKET_NAME should be the path to the folder (ex: /tmp/my-bucket)
    return await this.s3HandlerService.getStream(
      fileName,
      `${process.env.AWS_BUCKET_NAME}/${folder}`,
    );
  }
}
