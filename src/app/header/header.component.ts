import { Component, OnInit } from '@angular/core';
import {MdDialog,MdDialogRef} from '@angular/material';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog:MdDialog) { }
  

  ngOnInit() {
  }

  openLoginForm():void{
    //second parameter of open is used to specify the width and hight of login component
    this.dialog.open(LoginComponent , {width:'500px',height:'450px'});
  }
}
