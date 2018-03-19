import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import {LEADERS} from '../shared/leaders'; 

@Injectable()
export class LeaderService {

  constructor() { }

  leaders:Leader[];
  getLeaders():Leader[]{
    return LEADERS;
  }

}
