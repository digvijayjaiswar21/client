
export class  Users{
  _id: number;
  role: string;
  fullName:string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  courseName:string; 

  constructor(user: any) {
    this._id = user._id;
    this.email = user.email;
    this.role = user.role;
}
};