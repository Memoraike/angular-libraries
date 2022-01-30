import { NgModule } from '@angular/core';
import { NgxMatPaginator } from './ngx-mat-paginator.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCommonModule } from '@angular/material/core';
import { NGX_MAT_PAGINATOR_INTL_PROVIDER } from './ngx-mat-paginator-intl';

@NgModule({
  declarations: [NgxMatPaginator],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSelectModule,
    MatTooltipModule,
    MatCommonModule,
  ],
  exports: [NgxMatPaginator],
  providers: [NGX_MAT_PAGINATOR_INTL_PROVIDER],
})
export class NgxMatPaginatorModule {}
