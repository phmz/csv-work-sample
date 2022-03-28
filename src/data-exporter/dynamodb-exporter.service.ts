import { Injectable } from '@nestjs/common';
import { DynamoDB } from 'aws-sdk';
import * as stream from 'stream';

@Injectable()
export class DynamodbExporterService {
  writeStream() {
    const dynamoDb = new DynamoDB.DocumentClient();

    return new stream.Transform({
      objectMode: true,
      transform: transformFunc,
    });

    function transformFunc(object, encoding, callback) {
      const params = {
        TableName: process.env.AWS_TABLE_NAME,
        Item: JSON.parse(object),
      };
      dynamoDb.put(params, (err) => {
        if (err) {
          callback(err);
        }
        callback();
      });
    }
  }
}
