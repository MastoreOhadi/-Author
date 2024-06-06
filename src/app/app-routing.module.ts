import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthorsComponent} from "./authors/authors.component";

const routes: Routes = [
  {path: '', component: AuthorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


//------------- for Fetch the route data from an API or service
/*
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { PageService } from './services/page.service';

export const appRoute: Routes = [];

export function configurationInit(pageService: PageService) {
  return (): Promise<any> => {
    return pageService.init();
  };
}

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule],
  providers: [
    PageService,
    {
      provide: APP_INITIALIZER,
      useFactory: configurationInit,
      deps: [PageService],
      multi: true
    }
  ]
})
export class AppRoutingModule {}*/
