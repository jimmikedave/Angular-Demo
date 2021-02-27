import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1: string[] = ["Adam One", "na1212", "atc@abc.net"]
  info2: string[] = ["Adam Two", "na1231", "at2@abc.net"]
  info3: string[] = ["Adam Three", "na7654", "at3@abc.net"]

  getinfo1(): string[]{
    return this.info1
  }

  getinfo2(): string[]{
    return this.info2
  }

  getinfo3(): string[]{
    return this.info3
  }

  constructor() { }
}
