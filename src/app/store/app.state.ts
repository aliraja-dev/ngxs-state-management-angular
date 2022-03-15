import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs";
import { UserService } from "../user.service";
import { SignInWithGoogle, SignOutFromGoggle } from "./app.actions";

export interface AppStateModel{
  username:string;
  email:string;
  uid?:string;
}

@State<AppStateModel>({
 name: 'user',
 defaults:{
  username:'',
  email:'',
  uid: ''
 }
})
@Injectable()
export class AppState{
constructor(private userService: UserService){}
@Action (SignInWithGoogle)
signInWithGoogle(
  {patchState, setState}:StateContext<AppStateModel>, payload:SignInWithGoogle){
    console.log(payload)
return this.userService.signInWithGoogle(payload).pipe(tap(user =>{
  setState({username: user.username, email: user.email, uid: user.uid})
}))
}

@Action (SignOutFromGoggle)
signOutFromGoogle({setState}: StateContext<AppStateModel>, payload:SignOutFromGoggle){
return this.userService.signOutFromGoogle(payload).pipe(
  tap(user=> {
    setState({username:'', email:''})
  })
);
}
}
