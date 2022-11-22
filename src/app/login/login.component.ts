import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
  aim="Your Perfect Banking Partner";//string interpolation

  account="Enter your account here";//property binding

  acno='';
  pswd='';


  //3rd execution
  //class - collection of properties and methods
  //properties/variables
  //userdefined methods(4th execution)

  userDetails:any={
    1000:{acno:1000,username:'Rony',password:1000,balance:100000},
    
    1001:{acno:1001,username:'Sijo',password:1001,balance:100000}
  }
  
  constructor(){//1st execution
    //it automatically invokes when the object is created
  }

    ngOnInit(): void {//2nd execution
      //for initial process of component
      //lifecycle hook of Angular
    }

    

    acnoChange(event:any){
       this.acno=event.target.value;

       console.log(this.acno);
    }

    pswdChange(event:any){
      this.pswd=event.target.value;

      console.log(this.pswd);
    }

    // template referencing

    /*login(a:any,p:any){
      //alert("log clicked");
      var acno=a.value;

      var pswd=p.value;

      var userDetails=this.userDetails;

      if(acno in userDetails){
        if(pswd==userDetails[acno]['password']){
          alert('login successful');
        }
        else{
          alert('invalid password');
        }
      }
      else{
        alert('valid username');
      }
    }
*/
login(){
  //alert("log clicked");
  var acno=this.acno;

  var pswd=this.pswd;

  var userDetails=this.userDetails;

  if(acno in userDetails){
    if(pswd==userDetails[acno]['password']){
      alert('login successful');
    }
    else{
      alert('invalid password');
    }
  }
  else{
    alert('invalid username');
  }
}
    
  

}
