import { Injectable } from '@nestjs/common';
import { FsExporterService } from './fs-exporter.service';
import { DynamodbExporterService } from './dynamodb-exporter.service';

@Injectable()
export class DataExporterService {
  constructor(
    private readonly fsExporterService: FsExporterService,
    private readonly dynamodbExporterService: DynamodbExporterService,
  ) {}

  formatStream() {
    return this.fsExporterService.formatStream();
  }

  writeStream() {
    return this.fsExporterService.writeStream();
  }
}
