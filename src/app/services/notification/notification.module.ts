import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {NotificationComponent} from "@src/app/services/notification/components";
import {NotificationService} from "@src/app/services";


@NgModule({
    declarations: [NotificationComponent],
    imports: [
        CommonModule,
        MatSnackBarModule
    ]
})
export class NotificationModule {
    static forRoot(): ModuleWithProviders<any> {
        return {
            ngModule: NotificationModule,
            providers: [
                NotificationService
            ]
        };
    }
}
