import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
//
import { AppModuleNgFactory } from './app.module.ngfactory';

import '../../assets/css/main.sass';

// should be enabled for the production mode
// Not necessary when using @ngtools.
// enableProdMode();

platformBrowser().bootstrapModuleFactory( AppModuleNgFactory );
