import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {applyMiddleware, createStore} from 'redux';
import {appStateReducer} from './global/store/reducer';
import {Epics} from './global/store/epic';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {CoreModule} from './global/core.module';
import {HttpClientModule} from '@angular/common/http';
import {NgRedux, NgReduxModule} from '@angular-redux/store';
import {IAppState} from './global/const';
import {SharedModule} from './global/shared.module';

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
    NgReduxModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


  constructor(private epics: Epics,public ngRedux: NgRedux<IAppState>) {

    const rootEpic = combineEpics(
      this.epics.handleNewMessage,
      this.epics.loadInboxEpic
    );
    const epicMiddleware = createEpicMiddleware();

    const store = createStore(
      appStateReducer,
      applyMiddleware(epicMiddleware)
    );
    epicMiddleware.run(rootEpic);
    ngRedux.provideStore(store);

  }
}
