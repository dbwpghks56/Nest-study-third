import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],
  exports: [ // 프로젝트 내의 다른 모듈에서 해당 클래스를 사용할 수 있도록 만든다.
    PowerService
  ]
})
export class PowerModule {}
