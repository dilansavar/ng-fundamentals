import { Component,Input, Output,EventEmitter } from "@angular/core";
//import { EventEmitter } from 'events';
import {IEvent} from './shared/index'

@Component({
    selector:'event-thumbnail',
    template:`<div [routerLink]="['/events',event.id]" class="well hoverwell thumbnail">
    <h2>{{event.name | uppercase }}</h2>
    <div>Date:{{event.date | date:'d/M/y'}}</div>
    <div [ngSwitch]="event?.time">
        Time:{{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div>Price: {{event.price | currency:'USD'}}</div>
    <div *ngIf="event?.location">
        <span>Location:{{event?.location?.address}}</span>
        <span class="pad-left">{{event?.location?.city}},{{event?.location?.country}}</span>
    </div>
        <div *ngIf="event?.onlineUrl">
            Online URL:{{event.onlineUrl}}
        </div>
    </div>
    `,
    styles:[`
        .thumbnail{min-height:210px;}
        .pad-left{margin-left:10px;}
        .well div{color: #bbb;}
    `]
})
export class EventThumbnailComponent{
    @Input() event:IEvent
    somePropert:any =" some value"
    /*  @Output() eventClick=new EventEmitter()

    handleClickMe(){
        this.eventClick.emit(this.event.name)
    
    }*/
    

}