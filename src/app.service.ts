import { Injectable } from '@nestjs/common';
import { QueryRepository } from './neo4j/query.repository';

@Injectable()
export class AppService {
  constructor( private readonly queryRepo: QueryRepository){
  }
  getHello(): string {
    return 'Hello World!';
  }
}
