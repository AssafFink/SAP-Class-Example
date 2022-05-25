// import { MapComponent } from './../map/map.component';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

    @ViewChild("mapPlaceholder", { read: ViewContainerRef })
    public mapViewContainerRef: ViewContainerRef;

    ngOnInit(): void {
    }

    public async showMap() {
        const { MapComponent } = await import("../map/map.component");
        this.mapViewContainerRef.createComponent(MapComponent);
    }

}
