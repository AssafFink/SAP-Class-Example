import { Component, OnInit, DoCheck, ElementRef, ViewChild, NgZone, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements DoCheck, AfterViewInit {

    private heatMap: { x: number, y: number }[] = [];

    @ViewChild("layoutDiv")
    public layoutDivRef: ElementRef<HTMLDivElement>

    constructor(private ngZone: NgZone) { }

    ngAfterViewInit(): void {
        const div = this.layoutDivRef.nativeElement;
        this.ngZone.runOutsideAngular(() => {
            div.addEventListener("mousemove", (args: MouseEvent) => {
                const p = {x: args.clientX, y: args.clientY};
                console.log(p);
                this.heatMap.push(p);
                if(this.heatMap.length === 500) {
                    console.log("Send to backend...");
                    this.heatMap = [];
                }
            });
        });
    }

    ngDoCheck(): void {
        console.log("Angular change detection...");
    }

}
