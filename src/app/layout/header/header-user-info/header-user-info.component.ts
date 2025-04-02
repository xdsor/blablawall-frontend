import {Component, inject, OnInit} from '@angular/core';
import {UserSelfInfo} from '../../../shared/models/User';
import {AuthInfoService} from '../../../auth/auth-info.service';

@Component({
  selector: 'app-header-user-info',
  imports: [

  ],
  templateUrl: './header-user-info.component.html',
  styleUrl: './header-user-info.component.css'
})
export class HeaderUserInfoComponent implements OnInit {
  authInfoService = inject(AuthInfoService)
  userSelfInfo: UserSelfInfo | undefined;

  ngOnInit(): void {
    this.userSelfInfo = this.authInfoService.userSelfInfo;
  }

}
