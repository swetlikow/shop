Task 1:

- add FirstComponent
- add properties to FirstComponent.
- add ProductComponent
- add ProductsService
- add CartListComponent
- add CartService
- implement ngFor, ngIf

Task 2:

- divide to modules
- add product <-> product-list communication (@Input(), @Output())
- add cart <-> cart-list communication (@Input(), @Output())
- add logic buy/remove product to/from basket
- add #appTitle using @ViewChild
- add HighlightDirective directive

Task 3:

- add sum and quantity
- add LocalStorageService
- add ConfigOptionsService
- implement DI with useClass option
- add ConstantsService and implement useValue in AboutComponent
- add generate service + factory
- add appDivFontSize directive

Task 4:

- add built-in Pipe
- change getProducts to Promise
- add OrderByPipe for basket
- use OrderByPipe

Task 5:

- add routing rotes
- add HomeComponent
- add NavBar with links to Home, About and Products routes
- add navigation by routes
- add AdminModule (AdminComponent, AdminDashboardComponent)
- add AuthGuard (CanLoad, CanActivate, CanActivateChild)
- add AuthService
- add Login/Logout

Task 6:

- add db server
- add ProductsDatabaseService (Promise)
- change logic for get/add/remove product from hardcoded to db
- add TimingInterceptor

Task 7:

- add ngrx module and appState
- add ngrx product state/actions/reducer
- add ngrx product selectors/effects
- implement in product component work with ngrx store

Task 8:

- add ProcessOrderComponent form
- implement form builder
- add logic to create/send products order
- add custom validators for lastName
- add email validator directive

Task 9:

- add AppComponent isolated test
- add LocalStorageService isolated test
- add GeneratorService isolated test
- add OrderProductsPipe isolated test
- add CartComponent integration test
- add AboutComponent integration test
- generate test code coverage (ng test --code-coverage)
