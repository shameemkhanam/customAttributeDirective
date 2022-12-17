import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SetBackgroundDirective } from './customDirectives/setBackground.directive';
import { HighlightDirective } from './customDirectives/highlight.directive';
import { HoverDirective } from './customDirectives/hover.directive';
import { BetterhighlightDirective } from './customDirectives/betterhighlight.directive';
import { ClassDirective } from './customDirectives/class.directive';

@NgModule({
  declarations: [AppComponent, SetBackgroundDirective, HighlightDirective, HoverDirective, BetterhighlightDirective, ClassDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
