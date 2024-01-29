import { ANALYZE_FOR_ENTRY_COMPONENTS, NgModule } from '@angular/core';
import {AgGridModule} from "ag-grid-angular/main";
import {RedComponentComponent} from "./red-component/red-component.component";

// common ag grid entry components
const commonAgGridComponents: any[] = [RedComponentComponent];
@NgModule({    
  imports: [AgGridModule.withComponents(commonAgGridComponents)],
  exports: [AgGridModule]
})
export class AgGridCommonModule { 
  static withComponents(components: any[]) {
     return {
      ngModule: AgGridCommonModule,
      providers: [{
        provide: ANALYZE_FOR_ENTRY_COMPONENTS,
        useValue: components,
        multi: true
      }]
    };
  }
}
