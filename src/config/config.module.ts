import { Module, Global } from '@nestjs/common';
import { ConfigService } from './config.service';

@Global()
@Module({
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService(
        `envs/${process.env.NODE_ENV || 'local'}.env`,
      ),
    },
  ],
  exports: [ConfigService],
})
export class ConfigModule {}
