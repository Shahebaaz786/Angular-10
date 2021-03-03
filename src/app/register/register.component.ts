import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import {RestoService} from '../resto.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private resto:RestoService) { }

  alert:boolean=false;

  register = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  collection()
  {
    this.resto.registerUser(this.register.value).subscribe((result)=>
    {
      console.log(result);
    })
    this.alert=true;
  }
  closeAlert()
  {
    this.alert=false;
  }
  ngOnInit(): void {
  }

}
