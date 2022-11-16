import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { phoneNumberPattern } from 'src/app/shared/phone-number.validator';
import { LocalStoreService } from "src/app/services/local-store.service";
import { Profile } from "src/app/models/profile.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.scss']
})
export class AddProfileComponent implements OnInit {

  addUserForm!: FormGroup;
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  userList: Profile[] = []
  constructor(
    private fb: FormBuilder,
    private ls: LocalStoreService,
    private router: Router
  ) {
    this.setAddForm();
   }

  ngOnInit(): void {
    this.userList = this.ls.getItem("userList")
  }

  get userFormControls() {
    return this.addUserForm.controls
  }

  setAddForm() {
    this.addUserForm = this.fb.group({
      name: [ '', Validators.required ],
      address: [ '', Validators.required ],
      dob: [ '', Validators.required],
      role: [ '', Validators.required ],
      gender: [ '', Validators.required ],
      phone: [ '', [Validators.required, phoneNumberPattern] ]
    });
  }


  add() {
    let userList = this.userList;
    if (this.addUserForm.valid) {
      const formData = this.addUserForm.value;
      if(formData){
        userList.push(formData);
      }
      this.ls.setItem("userList",userList);
      this.router.navigateByUrl("list");
    }
  }

  goToList() {
    this.router.navigateByUrl("list");
  }
}
