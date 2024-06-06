/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import {AppInjector} from './app/app-injector.service'

platformBrowserDynamic().bootstrapModule(AppModule).then((moduleRef) => {
    AppInjector.setInjector(moduleRef.injector);
})
    .catch(err => console.error(err));
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
