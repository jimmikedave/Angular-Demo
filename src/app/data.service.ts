import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  info1: string[]=["Jim David", "123", "email@test.com"];
  info2: string[]=["Jim 2", "222", "email2@test.com"];
  info3: string[]=["Jim 3", "333", "email3@test.com"];


  getInfo1():string[]{
    return this.info1;
  }
  getInfo2():string[]{
    return this.info2;
  }
  getInfo3():string[]{
    return this.info3;
  }

  addInfo(info: any){
    this.info1.push(info)
    this.info2.push(info)
    this.info3.push(info)
    return this.info1
  }

  constructor() { }
}
