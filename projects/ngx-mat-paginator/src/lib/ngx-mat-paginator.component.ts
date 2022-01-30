import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  Optional,
  ViewEncapsulation,
} from '@angular/core';
import {
  _NgxMatPaginatorBase,
  NGX_MAT_PAGINATOR_DEFAULT_OPTIONS,
  NgxMatPaginatorDefaultOptions,
} from './ngx-mat-paginator.directive';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { NgxMatPaginatorIntl } from './ngx-mat-paginator-intl';

@Component({
  selector: 'ngx-ngx-mat-paginator',
  templateUrl: 'ngx-mat-paginator.component.html',
  styleUrls: ['paginator.scss'],
  inputs: ['disabled'],
  host: {
    class: 'ngx-mat-paginator',
    role: 'group',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NgxMatPaginator extends _NgxMatPaginatorBase<NgxMatPaginatorDefaultOptions> {
  /** If set, styles the "page size" form field with the designated style. */
  _formFieldAppearance?: MatFormFieldAppearance;

  constructor(
    intl: NgxMatPaginatorIntl,
    changeDetectorRef: ChangeDetectorRef,
    @Optional()
    @Inject(NGX_MAT_PAGINATOR_DEFAULT_OPTIONS)
    defaults?: NgxMatPaginatorDefaultOptions
  ) {
    super(intl, changeDetectorRef, defaults);

    if (defaults && defaults.formFieldAppearance != null) {
      this._formFieldAppearance = defaults.formFieldAppearance;
    }
  }
}
