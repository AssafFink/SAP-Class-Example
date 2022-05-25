import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-survey',
    templateUrl: './survey.component.html',
    styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

    @Input()
    public title: string;

    @Output()
    public report = new EventEmitter<string>(); // We're reporting a string.

    constructor() { }

    ngOnInit(): void {
    }

    public send(level: string) {
        this.report.emit(level);
    }

}
