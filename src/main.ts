import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config as awsConfig } from 'aws-sdk';
import { FileHandlerService } from './file-handler/file-handler.service';
import { ProcessorService } from './processor/processor.service';
import { DataExporterService } from './data-exporter/data-exporter.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const date = new Date();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const year = date.getFullYear();

  const yearMonth: string = process.argv[2] ?? `${year}-${month}`;

  awsConfig.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  });

  const fileHandlerService = app.get(FileHandlerService);
  const processorService = app.get(ProcessorService);
  const dataExporterService = app.get(DataExporterService);

  const stream = await fileHandlerService.getStream(
    'events.csv',
    yearMonth.replace('-', '/'),
  );

  stream
    .pipe(processorService.readCsv())
    .pipe(processorService.processCsv())
    .pipe(dataExporterService.writeStream())
    .on('finish', () => {
      console.log('Finished');
      app.close();
    })
    .on('error', (err) => {
      console.log(err);
      app.close();
    });
}
bootstrap();
