import { Injectable } from '@nestjs/common';
import { IFileHandler } from './file-handler.interface';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class RequestHandlerService implements IFileHandler {
  constructor(private readonly httpService: HttpService) {}

  async getStream(path: string) {
    const response = await this.httpService.axiosRef({
      url: path,
      method: 'GET',
      responseType: 'stream',
    });
    return response.data;
  }
}
