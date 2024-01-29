import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community'; //

@Component({
  selector: 'app-rfi-list',
  templateUrl: './rfi-list.component.html',
  styleUrl: './rfi-list.component.css'
})
export class RfiListComponent {

  columnDefs: ColDef[] = [
		{ headerName: 'Make', field: 'make' },
		{ headerName: 'Model', field: 'model' },
		{ headerName: 'Price', field: 'price' }
	];

	rowData = [
		{ make: 'Toyota', model: 'Celica', price: 35000 },
		{ make: 'Ford', model: 'Mondeo', price: 32000 },
		{ make: 'Porsche', model: 'Boxster', price: 72000 }
	];
}
