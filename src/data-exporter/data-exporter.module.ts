import { Module } from '@nestjs/common';
import { DataExporterService } from './data-exporter.service';
import { FsExporterService } from './fs-exporter.service';
import { DynamodbExporterService } from './dynamodb-exporter.service';

@Module({
  providers: [DataExporterService, FsExporterService, DynamodbExporterService],
  exports: [DataExporterService],
})
export class DataExporterModule {}
