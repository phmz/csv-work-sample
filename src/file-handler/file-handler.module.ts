import { Module } from '@nestjs/common';
import { FsHandlerService } from './fs-handler.service';
import { S3HandlerService } from './s3-handler.service';
import { HttpModule } from '@nestjs/axios';
import { RequestHandlerService } from './request-handler.service';
import { FileHandlerService } from './file-handler.service';

@Module({
  imports: [HttpModule],
  providers: [
    FsHandlerService,
    S3HandlerService,
    RequestHandlerService,
    FileHandlerService,
  ],
  exports: [FileHandlerService],
})
export class FileHandlerModule {}
