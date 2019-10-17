import { Routes } from "@angular/router";
import { EventListComponent } from "./events/events-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { CreateEventComponent } from "./events/create-event.component";
import { Error404Component } from "./errors/404.component";
import { EventListResolver } from "./events/events-list-resolver.service";
import { CreateSessionComponent } from "./events/event-details";
import { EventResolver } from "./events/index";

export const appRoutes: Routes = [
  { path: "user", loadChildren: "./user/user.module#UserModule" },
  {
    path: "events/new",
    component: CreateEventComponent,
    canDeactivate: ["canDeactivateCreateEvent"]
  },
  {
    path: "events",
    component: EventListComponent,
    resolve: { events: EventListResolver }
  },
  {
    path: "events/:id",
    component: EventDetailsComponent,
    resolve:{event:EventResolver}
  },
  { path: "events/session/new", component: CreateSessionComponent },
  { path: "404", component: Error404Component },
  { path: "", redirectTo: "/events", pathMatch: "full" }
];
