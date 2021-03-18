import { Injectable } from "@angular/core";

@Injectable()
export class UsersService {
  constructor() {}
  get getData() {
    return {
      name: "Jeetendra",
      age: 22,
      id: 101
    };
  }
}
