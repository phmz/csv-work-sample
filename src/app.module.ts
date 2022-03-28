import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FileHandlerModule } from './file-handler/file-handler.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), FileHandlerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
