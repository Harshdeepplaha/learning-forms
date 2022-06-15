import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupform: NgForm | undefined
  title = 'learning-forms';
  defaultQuestion = 'your first pet?';
  genders = ['male', 'female'];
  answer = '';
  user = {
    username:'',
    email:'',
    gender:'',
    secretQuestion:''


  };

submitted = false;



// onSubmit(form: NgForm){
//   console.log(form);

onSubmit(){
  this.submitted = true;
this.user.username = this.signupform?.value.userdata.username;
this.signupform?.reset();



}



}




