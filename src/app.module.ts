import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FileHandlerModule } from './file-handler/file-handler.module';
import { ProcessorModule } from './processor/processor.module';
import { DataExporterModule } from './data-exporter/data-exporter.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    FileHandlerModule,
    ProcessorModule,
    DataExporterModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
