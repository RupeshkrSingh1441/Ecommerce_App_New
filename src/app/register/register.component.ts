import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'; //imports

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  invalidRPWD: boolean = false;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit():void {
    this.registerForm = this.fb.group({          
      firstName:[
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('[a-zA-Z].*')
        ],
      ],
      lastName:[
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('[a-zA-Z].*')
        ],
      ],
      email:['',[Validators.required,Validators.email]],
      pwd:[
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15)
        ],
      ],
      rpwd:['']
 });
  }
  
  // #region getters
  get FirstName(): FormControl{
    return this.registerForm.get('firstName') as FormControl;
  }
  get LastName(): FormControl{
    return this.registerForm.get('lastName') as FormControl;
  }
  get Email(): FormControl{
    return this.registerForm.get('email') as FormControl;
  }
  get PWD(): FormControl{
    return this.registerForm.get('pwd') as FormControl;
  }
  get RPWD(): FormControl{
    return this.registerForm.get('rpwd') as FormControl;
  }

  register(){

  }
  // end getters
}
