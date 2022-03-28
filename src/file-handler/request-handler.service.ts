import { Injectable } from '@nestjs/common';
import { IFileHandler } from './file-handler.interface';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class RequestHandlerService implements IFileHandler {
  constructor(private readonly httpService: HttpService) {}

  async getStream(fileName: string, path: string) {
    const response = await this.httpService.axiosRef({
      url: `${path}/${fileName}`,
      method: 'GET',
      responseType: 'stream',
    });
    return response.data;
  }
}
