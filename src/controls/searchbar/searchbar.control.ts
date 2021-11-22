import { HostManagerService } from 'src/app/host-manager.service';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-searchbar',
    templateUrl: './searchbar.control.html',
    styleUrls: ['./searchbar.control.ts']
})

export class SearchBarControl implements OnInit {

    data: any[] = [];

    constructor(private HostManagerService: HostManagerService){}

    ngOnInit(){
  
        this.HostManagerService.getClientes().subscribe( res=> {
            
        })
            
        
    }


    search(event){
       
    }

}