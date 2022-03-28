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
    return await this.s3HandlerService.getStream(fileName, folder);
  }
}
