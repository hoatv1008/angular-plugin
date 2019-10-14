import { Component } from '@angular/core';
import { AppConsts } from './app-const';

@Component({
  selector: 'app-root',
  templateUrl: './app-root.component.html'
})
export class AppRootComponent {
  plugins = [];

  constructor() {
    this.plugins = AppConsts.plugins;
  }
}
