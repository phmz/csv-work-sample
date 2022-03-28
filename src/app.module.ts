import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FileHandlerModule } from './file-handler/file-handler.module';
import { ProcessorModule } from './processor/processor.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    FileHandlerModule,
    ProcessorModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
