import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';

  test() {
    if (this.title === 'app') {
      console.log('app test');
    } else {
      console.log('test');
    }
  }

  test2() {
    console.log('test2');
  }
}
