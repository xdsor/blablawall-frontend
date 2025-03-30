import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgbCollapse} from '@ng-bootstrap/ng-bootstrap';
import {HeaderNavComponent} from './header-nav/header-nav.component';
import {HeaderUserInfoComponent} from './header-user-info/header-user-info.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgbCollapse, HeaderNavComponent, HeaderUserInfoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuCollapsed = true
}
