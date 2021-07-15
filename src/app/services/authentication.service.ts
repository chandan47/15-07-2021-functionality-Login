import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignIn } from '../Model/signin';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly mockedUser =new SignIn('chandan@gmail.com','1234');
isAuthenticated = false;
  constructor(private router:Router) { }
  authenticate(signIn: SignIn):boolean{
      if(this.checkCredentials(signIn)){
        this.isAuthenticated= true;
        this.router.navigate(['bookflight']);
        return true;
      }
      this.isAuthenticated= false;
      return false;
  }
  private checkCredentials(signin: SignIn) :boolean {
     return this.checkEmail(signin.getEmail()) &&  this.checkPassword(signin.getPassword());
  }

  private checkEmail(email:string):boolean{
     return email=== this.mockedUser.getEmail();
  }
  private checkPassword(password:string):boolean{
      return password === this.mockedUser.getPassword();
  }

  logout(){
    this.isAuthenticated = false;
    this.router.navigate(['']); 
  }
  
}
