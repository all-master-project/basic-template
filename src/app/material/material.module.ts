import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDividerModule} from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [],
  imports: [
    MatPaginatorModule,
     MatToolbarModule,
     MatSidenavModule,
     MatSelectModule,
     CommonModule,
     
     ReactiveFormsModule,
     FormsModule,
     MatListModule,
     MatInputModule,
     MatFormFieldModule,
    MatCheckboxModule,
     MatTooltipModule,
     MatSnackBarModule,
     MatDividerModule,
     MatIconModule,
     MatDatepickerModule,
    MatDialogModule,
     MatButtonModule,
     MatSelectModule,
     MatMenuModule,
     MatTabsModule,
     MatTableModule,
    MatSortModule,
     MatCardModule
    ],
  exports: [
      ReactiveFormsModule,
      MatPaginatorModule,
      MatToolbarModule,
      MatSidenavModule,
      MatSelectModule,
      CommonModule,
      MatListModule,
      MatInputModule,
      MatFormFieldModule,
      MatCheckboxModule,
      MatTooltipModule,
      MatSnackBarModule,
      MatDividerModule,
      MatIconModule,
      MatDatepickerModule,
      MatDialogModule,
      MatButtonModule,
      MatSelectModule,
      MatMenuModule,
      MatTabsModule,
      MatTableModule,
      MatSortModule,
      MatCardModule
    ]

})
export class MaterialModule { }
