import { Component } from '@angular/core';
import {ToastrService} from 'ngx-toastr'
@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent {
  constructor(public toastr: ToastrService){}
  save(){
    this.toastr.success('everything is broken', 'Major Error', {
      timeOut: 3000,
    });
    console.log('SAVE');

  }

}
