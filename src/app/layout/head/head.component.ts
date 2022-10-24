import { Component, OnInit } from '@angular/core';
import { faHome, faInfo, faList, faAddressCard, faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/pages/login/login.component';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  faHome = faHome; 
  faInfo = faInfo; 
  faList = faList;
  faAddressCard = faAddressCard;
  faSignInAlt = faSignInAlt;

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  abrirFormularioLogin(){
    this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
  }

}
