import { Injectable } from "@nestjs/common";

@Injectable()
export class PowerService{
    supplyPower(watts:number) {
        console.log(`Supplyin ${watts} worth of power.`);
    }
}