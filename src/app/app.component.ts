import { Component, OnInit } from '@angular/core';

declare var initAll: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mintanything';

  ngOnInit(): void {
    initAll();
  }
}
