import { State, Action, StateContext, Selector } from "@ngxs/store";

import { Tutorial } from "./tutorial.interface";
import { AddTutorial, RemoveTutorial } from "./tutorials.actions";

export class TutorialStateModel{
  tutorials:Tutorial[];
}


@State<TutorialStateModel>({
  //pass the initial state slice here
  name: 'tutorialState',
  defaults: {
    tutorials:[
      {name: 'NGXS Coursetro Tutorial',
      url: 'https://coursetro.com/posts/code/152/Angular-NGXS-Tutorial---An-Alternative-to-Ngrx-for-State-Management'},
      {name: 'Coursetro NGXS Youtube',
      url: 'https://www.youtube.com/watch?v=SfiO3bDUK7Q'},
    ]
  }
})
export class TutorialState{
  constructor(){}

  @Selector()
  static getTutorials(state: TutorialStateModel){
    return state.tutorials;
  }

  @Action(AddTutorial)
  add({getState, patchState}:StateContext<TutorialStateModel>, {payload}: AddTutorial){
    const state = getState();
    patchState({ tutorials: [...state.tutorials, payload]
    })
  }
    @Action(RemoveTutorial)
    remove({ getState, patchState}:StateContext<TutorialStateModel>, {payload}: RemoveTutorial){
      patchState({tutorials: getState().tutorials.filter(tutorial => tutorial.name != payload)});
    }
  }





















//Property 'tutorials' has no initializer and is not definitely assigned in the constructor.ts(2564)
//how to fix this error for every property in TS
