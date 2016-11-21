import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import '../assets/css/main.sass';

// should be enabled for the production mode
// enableProdMode();

platformBrowserDynamic().bootstrapModule( AppModule );
