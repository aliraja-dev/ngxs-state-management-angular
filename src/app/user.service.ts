import { Injectable } from "@angular/core";

import { delay, of, tap } from "rxjs";
import { SignInWithGoogle, SignOutFromGoggle } from "./store/app.actions";

@Injectable({providedIn:'root'})
export class UserService{
constructor(){
}


signInWithGoogle(payload:SignInWithGoogle){
// now here use angular fire to send request to Google firebase auth
const user = {username:payload.username, email:payload.email, uid:'123456789'};
return of(user).pipe(delay(2000),tap( _ => console.log(user)),
);
}

signOutFromGoogle(payload:SignOutFromGoggle){
  // now here use angular fire to send request to Google firebase auth
  const user = null;
  console.log(payload);
  return of(user).pipe(delay(2000),tap( _ => console.log(user)));
}
}
