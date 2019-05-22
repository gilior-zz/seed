import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {applyMiddleware, createStore} from 'redux';
import {appStateReducer} from './store/reducer';
import {Epics} from './store/epic';
import {createEpicMiddleware} from 'redux-observable';
import {CoreModule} from './global/core.module';
import {HttpClientModule} from '@angular/common/http';
import {NgRedux, NgReduxModule} from '@angular-redux/store';
import {IAppState} from './global/const';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


  constructor(private epics: Epics,public ngRedux: NgRedux<IAppState>) {
    const epicMiddleware = createEpicMiddleware();

    const store = createStore(
      appStateReducer,
      applyMiddleware(epicMiddleware)
    );
    epicMiddleware.run(this.epics.fetchUserEpic);
    ngRedux.provideStore(store);
  }
}
