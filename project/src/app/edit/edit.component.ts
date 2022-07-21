import { Component, OnInit } from '@angular/core';
import { edit } from '../edit';
import { FormGroup, FormControl, Validators , ReactiveFormsModule} from '@angular/forms';
import { RouterserviceService } from '../routerservice.service';
import { AuthenticationService } from '../authentication.service';
import { user } from '../user';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  edit: edit = new edit();
  editArray: Array<edit> = [];

  editform: FormGroup;
  oldPassword: FormControl;
  newPassword: FormControl;
  userName: FormControl;

  constructor(private authenticateService :AuthenticationService,private routerService :RouterserviceService) {}
 

  ngOnInit() {
    this.oldPassword = new FormControl('', Validators.required),
    this.newPassword = new FormControl('', Validators.required),
    this.userName = new FormControl('', Validators.required)
    this. editform= new FormGroup({
      userName: this.userName,
      oldPassword: this.oldPassword,
      newPassword : this.newPassword
    });

  }

  editSubmit()
  {
    console.log(this.userName.value.userName);
    console.log(this.editform.value.oldPassword);
    console.log(this.editform.value.newPassword);

    this.edit.oldPassword=this.editform.value.oldPassword;
    this.edit.newPassword=this.editform.value.newassword;

    //this.authenticateService.editUser(id).subscribe((data) => {
      this.authenticateService.editUser(this.editform.value).subscribe((data) => {

        this.routerService.tologin();
      },
      error => {
        console.log(error);
      });
  }


}
