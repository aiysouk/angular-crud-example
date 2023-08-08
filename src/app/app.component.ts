import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { UnitsService } from './units.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient, private unitsService: UnitsService) { }
  title = 'myapp';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true'
  })

  message = "";

  // ngOnInit() {
  //   this.http.get<any>('https://921f-103-43-77-205.ngrok-free.app', {
  //     headers: this.headers,
  //   }).subscribe(data => {
  //     console.log(data)
  //     this.message = data.message
  //   })
  // }
  listUnits: any

  ngOnInit() {
    // this.getUnits();
  }

  getUnits(): void {
    this.unitsService.getTodos().subscribe(data => {
      console.log(data)
      this.listUnits = data
    })
  }
}
