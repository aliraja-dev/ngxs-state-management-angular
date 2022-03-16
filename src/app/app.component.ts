import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Store } from '@ngxs/store';

// import { Observable } from 'rxjs';
// import { SignInWithGoogle, SignOutFromGoggle } from './store/app.actions';
// import { AppStateModel } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NGXS Learning Project';
//   user$: Observable<AppStateModel>;

//   constructor(private store:Store){
//     this.user$ = this.store.select(state=>state.select.user);
//   }

// signIn(username:string, email:string){
//   console.log(username, email)
//   this.store.dispatch(new SignInWithGoogle(username, email));

// }
// signOut(uid:string){
//   this.store.dispatch(new SignOutFromGoggle(uid));
// }

}
