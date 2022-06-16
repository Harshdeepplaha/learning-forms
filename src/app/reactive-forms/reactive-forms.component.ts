import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  genders = ['male', 'female'];
forbiddenUsernames = ['harshu', 'aman'];



  signupform =new FormGroup({
    userdata: new FormGroup({ // nested FormGroup
       username : new FormControl(null, Validators.required),                    // the first argument is the default value and the second arg is of validators
      email : new FormControl(null, [Validators.required, Validators.email]),   //to add multiple validators add an array of validators

    }),

      gender : new FormControl('gender', Validators.required),
      hobbies: new FormArray([])
    });


    validity = this.signupform.valid;
    usage = this.signupform.touched;

  constructor(private fb: FormBuilder) {

   }

  ngOnInit(): void {





  }

  onSubmitting(){
    console.log(this.signupform);

  };


  // get name(){
  //  return  this.signupform.get('username');
  // };


 //for nested form group we have to give the path of the property using dots to the the get fn
  get name(){
   return  this.signupform.get('userdata.username');
  };

  get mail(){
    return this.signupform.get('userdata.email');
  }

get hobby() {
  return this.signupform.get('hobbies') as FormArray;
}
addAlias() {
  this.hobby.push(this.fb.control(''));
}




};






