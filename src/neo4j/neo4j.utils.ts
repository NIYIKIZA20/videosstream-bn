
import { ConfigService } from '@nestjs/config';
import { Neo4jConfig } from './neo4j.config.interface';


export const createDatabaseConfig = (
    configService: ConfigService,
    customConfig?: Neo4jConfig,
  ): Neo4jConfig =>
    customConfig || {
      host: configService.get('HOST'),
      password: configService.get('PASSWORD'),
      port: configService.get('PORT'),
      scheme: configService.get('SCHEME'),
      username: configService.get('USERNAME'),
    };
    export class ConnectionError extends Error {
      public details: string;
      constructor(oldError: Error) {
        super();
        this.message = 'Neo4j database not yet connected';
        this.name = 'Connection error';
        this.stack = oldError.stack;
        this.details = oldError.message;
      }
    }