import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environments';

@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'entso-ui';
  acquiring_Domain: string = '10YAT-APG------L';
  connecting_Domain: string = '10Y1001A1001A82H';
  periodStart: string = '202303032300';
  periodEnd: string = '202303042300';
  response: string = '';

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  fetchData(event: Event) {
    event.preventDefault();
    const url = `${this.apiUrl}/balancing?acquiring_Domain=${this.acquiring_Domain}&connecting_Domain=${this.connecting_Domain}&periodStart=${this.periodStart}&periodEnd=${this.periodEnd}`;

    this.http.get(url, { responseType: 'text' }).subscribe(
      (data: string) => (this.response = data),
      (error: string) => (this.response = 'Error fetching data'),
    );
  }
}
