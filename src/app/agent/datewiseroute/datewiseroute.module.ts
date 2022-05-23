import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
import { CommonModule } from '@angular/common';
import { SharedModule} from '../../theme/shared/shared.module';
import { FormsModule} from '@angular/forms';
import { DatewiserouteComponent } from './datewiseroute.component';
import { NotificationService } from '../../services/notification.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { DatewiserouteRoutingModule } from './datewiseroute-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPrintModule } from 'ngx-print';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { CountdownModule } from 'ngx-countdown';

@NgModule({
  imports: [
    CommonModule,
    DatewiserouteRoutingModule,
    SharedModule,
    CountdownModule,
    FormsModule,
    NgSelectModule,
    NgbModule,NgxPrintModule,NgxSpinnerModule,NgxQRCodeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [DatewiserouteComponent],
  providers: [NotificationService]
})


export class DatewiserouteModule { }

