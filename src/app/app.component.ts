import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpService } from './service/http.service';
import { ButtonComponent } from "./button/button.component";
import { BoxComponent } from "./box/box.component";
import { Observable, Subject, concatMap, switchMap } from 'rxjs';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ReactiveFormsModule, ButtonComponent, BoxComponent]
})
export class AppComponent {
    title = 'test';
    text = '';

    dataFormControl = new FormControl();

    constructor(private http: HttpService) {
        this.dataFormControl.valueChanges.pipe(concatMap((data) => this.http.callToServer(data))).subscribe((data) => {
            this.text = data;
        });
    }
}
