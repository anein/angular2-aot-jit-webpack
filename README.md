# Angular2 JIT and AOT compilation examples.
This is a small experiment with Angular 2 compilation process for my pet project ([*www.getexrate.com*](http://www.getexrate.com)).
Obviously, I use Webpack to combine all project files  into a single bundle file (included sass files).

##### There are three types of configuration which I used:
 - AOT - compile the project using *angular-cli* and *babel*;
 - WAOT - compile the project using *@ngtools/webpack* and webpack plugins;
 - JIT - compile the project using *ts-loader*.
 
#### How to compile:
- ``npm run compile:aot``
- ``npm run compile:jit``
- ``npm run compile:waot``


Good luck!
