import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { register } from './register';
import { login } from './login';
import { edit } from './edit';
import { user } from './user';
import { map } from 'rxjs/operators';
import { EmailValidator } from '@angular/forms';
import { FormGroup, FormControl, Validators , ReactiveFormsModule} from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

   getusers(userr: user): Observable<any> {
    console.log("GET USER");
    console.log(userr.userName);
    console.log(userr.oldPassword);
    return this.httpClient.post<any>(`http://localhost:8080/api/users`, userr, { headers: new HttpHeaders().set('responseType', 'text')}).pipe(
      map(
        userData => {
         sessionStorage.setItem('username',userr.userName);
         let tokenStr = userData.token;
         console.log("Token string: " + tokenStr);
         localStorage.setItem('token', tokenStr);
         return userData;
        }
      )
    );
    
  }

  addUser(register: register): Observable<register> {
    return this.httpClient.post<register>('http://localhost:8080/api/users/create', register);
  }
  editUser( editData): Observable<edit> {
    console.log(editData);
    return this.httpClient.put<edit>(`http://localhost:8080/api/users/edit`, editData);
  }
  setBearerToken(token: string) {
    sessionStorage.setItem('token',token);
  }
  getBearerToken() {
    return sessionStorage.getItem('token');
  }
}