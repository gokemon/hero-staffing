# HeroStaffing

This is the Tour of Heros, from the [Angular 2 docs tutorial](https://angular.io/docs/ts/latest/tutorial/).
I am also using the angular 2 CLI as my build tool. And editing the instructions from the tutorial to fit my needs.

I think this will make a nice module for staffing. I also like my product management application module. This is part of my step-by-step learning process towards building an enterprise-type business application. I want to master routing, forms, and putting several different "baby" apps together.



- We declared the required application directives in an Angular module.
- You listed the directives in the NgModule decorator's declarations array.
- You learned to bind a parent component to a child component.
- Like when you change a name in hero-detail.component, 
	it shows up in the master list in the app.component.
- So our app is more reusable with shared components, but its (mock) data is still hard coded within the AppComponent. That's not sustainable. Data access should be re-factored to a separate service and shared among the components that need data.


## Next steps,

- Need to learn to use Step-Tags in my Git workflow process. I used Branches pretty well in my [Angular-CLI-ToDos project](https://github.com/gokemon/Angular-CLI-ToDos);
	- Master branch
	- FirstBasicAppComponent branch
	- ComponentRefactoring branch
	- GH-pages branch
	- *[Tagging Steps](http://alblue.bandlem.com/2011/04/git-tip-of-week-tags.html)*
- Our next step (Step Five, 1.1.5) in the Staffing Firm project is ***Creating Services***
- Then Adding Router and learning to navigate among the views
- Lastly, you’ll replace the mock data with data retrieved from a server using http.

### Step Five ~ Creating Services

As the app evolves, we'll add more components that need access to hero data.

Instead of copying and pasting the same code over and over, let's create a single reusable data service and inject it into the components that need it. Using a separate service keeps components lean and focused on supporting the view, and makes it easy to unit-test components with a mock service.

Because data services are invariably asynchronous, we'll finish the page with a *Promise-based* version of the data service.

### Step Six ~ Routing
(Step Six, 1.1.6)
There are new requirements for the Heroes Staffing Firm app:

1. Add a Dashboard view.
1. Add the ability to navigate between the Heroes and Dashboard views.
1. When users click a hero name in either view, navigate to a detail view of the selected hero.
1. When users click a deep link in an email, open the detail view for a particular hero.

When you’re done, users will be able to navigate the app

### Step Seven ~ Use Angular's HTTP service
(Step Seven, 1.1.7)

We make the following improvements.
 
1. Get the hero data from a server.
1. Let users add, edit, and delete hero names.
1. Save the changes to the server.

You'll teach the app to make corresponding HTTP calls to a remote server's web API.


----------

## Boilerplate ##

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
