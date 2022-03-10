import { ConfigModule } from '../config/config.module';
import { Module, Global } from '@nestjs/common';
import { TypeormConfigService } from './typeorm-config.service';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [TypeormConfigService],
  exports: [TypeormConfigService],
})
export class TypeormConfigModule {}
