import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatButton, MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, MatSidenavModule, MatButtonModule, MatToolbarModule, MatIcon],
  template: `
    <mat-drawer-container class="main-container">
      <mat-drawer #drawer mode="over" class="drawer">

        <div class="drawer-header">
          <button matIconButton (click)="drawer.toggle()">
            <mat-icon>arrow_back</mat-icon>
          </button>  
        </div>
      
      </mat-drawer>

      <mat-drawer-content class="content">

        <mat-toolbar>

          <button matIconButton aria-label="Example icon-button with menu icon" (click)="drawer.toggle()">
            <mat-icon>menu</mat-icon>
          </button>

          <!-- <span>My App</span> -->

        </mat-toolbar>


        <router-outlet/>

      </mat-drawer-content>

    </mat-drawer-container>
  `,
  styles: `
    .main-container {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .content {
        flex: 1;
        padding-left: 1rem;
    }

    .drawer-header{
      display: flex;
      flex: 1;
      max-height: 100%;
      justify-content: flex-end;
    }

    .drawer{
      padding: 0.5rem;
    }
  `
})

export class MainLayout {
  showDrawer: boolean = false;
}
  