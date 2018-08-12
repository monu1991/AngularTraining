import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Test2Component } from './test2/test2.component';
import { Test1Component } from './test1/test1.component';
import { HighlightDirective } from './highlight.directive';
import { ToggleParaDirective } from './toggle-para.directive';
const appRoutes: Routes = [
  { path: '',component: Test1Component },
  { path: 'test2', component: Test2Component }
];


@NgModule({
  declarations: [
    AppComponent,
    Test2Component,
    Test1Component,
    HighlightDirective,
    ToggleParaDirective
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
