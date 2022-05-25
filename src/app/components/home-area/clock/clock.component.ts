import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

// Lifecycle Hooks

@Component({
    selector: 'app-clock',
    templateUrl: './clock.component.html',
    styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

    // Side Effect

    public time: string;
    private timerId: number;

    // Object created, init variables, DI
    constructor() { }
    
    // Once, when component is ready for use
    ngOnInit(): void {
        this.time = this.getCurrentTime();
        this.timerId = window.setInterval(() => {
            this.time = this.getCurrentTime();
        }, 1000);
    }

    // Component got new input from parent component:
    ngOnChanges(changes: SimpleChanges): void {
        // ...
    }

    // Angular performs the change detection mechanism
    ngDoCheck(): void {
        // ...
    }

    // Component is about to be destroyed
    ngOnDestroy(): void {
        window.clearInterval(this.timerId);
    }

    private getCurrentTime(): string {
        const now = new Date();
        return now.toLocaleTimeString();
    }

}
