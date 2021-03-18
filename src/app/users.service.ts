import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; //JD

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}
  get getData() {
    let url = "https://jsonplaceholder.typicode.com/todos/";
    return this.http.get(url);
  }
}
