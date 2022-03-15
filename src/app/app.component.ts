import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';

import { Observable } from 'rxjs';
import { SignInWithGoogle, SignOutFromGoggle } from './store/app.actions';
import { AppState, AppStateModel } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngxs-learning-proj';
@Select(AppState) user$: Observable<AppStateModel>;

  constructor(private store:Store){
    // this.user$ = this.store.select(state=> state);
  }
signIn(username:string, email:string){
  console.log(username, email)
  this.store.dispatch(new SignInWithGoogle(username, email));

}
signOut(uid:string){
  this.store.dispatch(new SignOutFromGoggle(uid));
}
}
