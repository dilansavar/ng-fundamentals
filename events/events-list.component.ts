import { Component, OnInit, Inject } from "@angular/core";
import { EventService } from "./shared/event.service";
import { analyzeAndValidateNgModules } from "@angular/compiler";
import { from } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "./shared";
import { Toastr, TOASTR_TOKEN } from "../common/toastr.service";

declare let toastr;

@Component({
  template: `
    <div>
    	<h1>Upcoming Angular Events</h1>
    	<div class="row">
    		<div *ngFor="let event of events" class="col-md-5">
    			<event-thumbnail [event]="event"></event-thumbnail>
    		</div>
    	</div>
    </div>`
})
export class EventListComponent implements OnInit {
  events: IEvent[];
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    @Inject(TOASTR_TOKEN) private toastr: Toastr
  ) {}
  ngOnInit() {
    this.events = this.route.snapshot.data["events"];
  }
}
