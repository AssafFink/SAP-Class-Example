import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

    @ViewChild("location")
    public selectWrapper: ElementRef<HTMLSelectElement>;

    constructor() { }

    ngOnInit(): void {
    }

    public show(location: HTMLSelectElement) {

        // First method: 
        alert("Your location: " + location.value);
        
        // Second Method:
        const select = this.selectWrapper.nativeElement;
        alert("Your location: " + select.value);
    }

}
