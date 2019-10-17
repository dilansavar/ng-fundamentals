import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EventsAppComponent } from "./events-app.component";
import { EventListComponent } from "./events/events-list.component";
import { EventThumbnailComponent } from "./events/event-thumbnail.component";
import { NavBarComponent } from "./nav/navbar.component";
import { EventService } from "./events/shared/event.service";
import {
  TOASTR_TOKEN,
  Toastr,
  JQ_TOKEN,
  CollapsibleWellComponent,
  SimpleModalComponent,
  ModalTriggerDirective
} from "./common/index";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes";
import { CreateEventComponent } from "./events/create-event.component";
import { Error404Component } from "./errors/404.component";
import { EventListResolver } from "./events/events-list-resolver.service";
import { UserModule } from "./user/user.module";
import { AuthService } from "./user/auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  CreateSessionComponent,
  SessionListComponent,
  UpvoteComponent,
  VoterService
} from "./events/event-details";
import {} from "./common/collapsible-well.component";
import { DurationPipe } from "./events/shared";
import { LocationValidator, EventResolver } from "./events/index";
import { HttpClientModule } from "@angular/common/http";

let toastr: Toastr = window["toastr"];
let jQuery = window["$"];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    //UserModule
  ],
  providers: [
    EventService,
    VoterService,

    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    EventResolver,
    EventListResolver,
    AuthService,
    { provide: "canDeactivateCreateEvent", useValue: checkDirtyState }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}
export function checkDirtyState(componenet: CreateEventComponent) {
  if (componenet.isDirty) {
    return window.confirm(
      "you have not saved this event,do you really want to cancel?"
    );
  }
  return true;
}
