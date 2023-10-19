import { Module } from '@nestjs/common';
import { ComputerController } from './computer.controller';
import { CpuModule } from 'src/cpu/cpu.module';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';
import { DiskModule } from 'src/disk/disk.module';

@Module({
  controllers: [ComputerController],
  imports: [
    CpuModule,
    DiskModule
  ]
})
export class ComputerModule {}
