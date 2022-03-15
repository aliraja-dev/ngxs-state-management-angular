export class SignInWithGoogle{
  static readonly type='[Auth] Sign In';
  constructor(public username:string, public email:string){}
}

export class SignOutFromGoggle{
  static readonly type='[Auth] Sign Out';
  constructor(public uid:string){}
}

