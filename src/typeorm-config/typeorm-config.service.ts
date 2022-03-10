import { ConfigService } from '../config/config.service';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import * as path from 'path';

@Injectable()
export class TypeormConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'oracle',
      host: this.configService.get('ORACLE_HOST'),
      port: parseInt(this.configService.get('ORACLE_PORT')),
      username: this.configService.get('ORACLE_USERNAME'),
      password: this.configService.get('ORACLE_PASSWORD'),
      schema: this.configService.get('ORACLE_SCHEMA'),
      sid: this.configService.get('ORACLE_SID'),
      entities: [path.join(__dirname + '/../**/*.entity{.ts,.js}')],
      synchronize: false,
      subscribers: [path.join(__dirname + '/../**/*.subscriber{.ts,.js}')],
      logging: true,
    };
  }
}
