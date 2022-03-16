import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Tutorial } from '../state/tutorial.interface';
import { RemoveTutorial } from '../state/tutorials.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  tutorials$: Observable<Tutorial[]>;

  constructor(private store:Store) {
    this.tutorials$ = this.store.select(state=> {
    // console.log("state", state);
    // console.log("state.tutorials", state.tutorials);
    // console.log("state.tutorials.tutorials", state.tutorials.tutorials);
    return state.tutorialState.tutorials
    })
   }

  ngOnInit(): void {
  }

  delTutorial(name:string){
    this.store.dispatch(new RemoveTutorial(name))
  }

}
