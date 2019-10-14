import { Component } from '@angular/core';

@Component({
  selector: 'plugin-a-component',
  template: `<div style="text-align:center; background-color:lightgray; padding: 20px;">
              <router-outlet></router-outlet>
            </div>`
})
export class PluginAComponent {}