import { Component, OnInit } from '@angular/core';
import { faHome, faInfo, faList, faAddressCard, faPhone, faFax, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faHome = faHome;
  faInfo = faInfo;
  faList = faList;
  faAddressCard = faAddressCard;
  faPhone = faPhone;
  faFax = faFax;
  faEnvelope = faEnvelope;
  faGoogle = faGoogle;
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;
  faYoutube = faYoutube;

  constructor() { }

  ngOnInit(): void {
  }

}
