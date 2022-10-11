import { Component, OnInit } from '@angular/core';
import { faHome, faInfo, faList, faAddressCard } from '@fortawesome/free-solid-svg-icons';

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

  constructor() { }

  ngOnInit(): void {
  }

}
