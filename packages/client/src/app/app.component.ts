import { Component, OnInit } from '@angular/core';

// add 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// add
export class AppComponent implements OnInit{
  title = 'client';

  // add start
  constructor(private http: HttpClient) {}

  async ngOnInit() {
    const result = await this.http.get('/api').toPromise();
    this.title = result['message']
  }
  // add end
}
