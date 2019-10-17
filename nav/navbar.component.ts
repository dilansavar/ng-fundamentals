import { Component } from "@angular/core";
import { AuthService } from '../user/auth.service';
import { ISessions,} from '../events/shared/event.model';
import { EventService } from '../events/shared';

@Component({
    selector:'nav-bar',
    templateUrl:'./navbar.component.html',
    styles: ['.nav.navbar-nav{font-size;} #searchForm{margin-right:100px;} @media(max-width:1200px) {#searchForm{display:none}} li>a.active{color:#F97924;}']

})
export class NavBarComponent{
    searchTerm:string="";
    foundSessions:ISessions[];

    constructor(public auth:AuthService,private eventService:EventService){

    }
    searchSessions(searchTerm){
        this.eventService.searchSessions(searchTerm).subscribe(sessions=>{
            this.foundSessions=sessions;
        })
    }
}
