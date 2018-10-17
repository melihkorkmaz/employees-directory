import { Component } from '@angular/core';
import { routerTransition } from './router.animation';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  animations: [ routerTransition ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  animationState: number;
  constructor(private route: ActivatedRoute) {

  }
  onActivate($event) {
    this.animationState = this.route.firstChild.snapshot.data['routeIdx'];
  }
}
