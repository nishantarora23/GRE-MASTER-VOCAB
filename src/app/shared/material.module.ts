import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { MatDialogModule } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


const modules: (any|MatCardModule|MatIconModule|MatSnackBarModule|MatDialogModule|MatProgressSpinnerModule)[] = [MatCardModule,MatIconModule,MatSnackBarModule,MatDialogModule,MatProgressSpinnerModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule.
	...modules
  ],
  exports: [
	...modules
  ]
})
export class MaterialModule { }
