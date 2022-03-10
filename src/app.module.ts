import {
  HttpModule,
  MiddlewareConsumer,
  Module,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeormConfigModule } from './typeorm-config/typeorm-config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormConfigService } from './typeorm-config/typeorm-config.service';
import { LaboratoryModule } from './laboratory/laboratory.module';
import { LaboratoryController } from './laboratory/laboratory..controller';




@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      name: 'default',
      useClass: TypeormConfigService,
    }),
    TypeOrmModule.forRootAsync({
      name: 'mysql',
      useClass: TypeormConfigService,
    }),
    TypeormConfigModule,
    HttpModule,
    LaboratoryModule,
  ],
  controllers: [AppController],
  providers: [AppService, ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply()
      .forRoutes(
        LaboratoryController,
      );
  }
}
