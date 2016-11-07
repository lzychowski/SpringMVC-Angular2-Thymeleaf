// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// The app module
import { AppModule } from './app.module';

// Compile and launch the module
console.log("main.ts root module bootstrap");
platformBrowserDynamic().bootstrapModule(AppModule);