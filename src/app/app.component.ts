import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoApp';
  data: any
  linkapi = 'https://api.spacexdata.com/v3/missions'
  constructor(private http: HttpClient) { 
    this.http.get(this.linkapi).subscribe((responseData: any) => {
      this.data = responseData;
    })
  }
}
