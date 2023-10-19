import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from 'src/power/power.module';

@Module({
  providers: [CpuService],
  imports: [ // PowerModule 과 CpuModule 연결
    PowerModule
  ],
  exports: [
    CpuService
  ]
})
export class CpuModule {}
