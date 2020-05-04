import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';

import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
// import {MatIconModule} from '@angular/material/icon';
import {NgModule} from '@angular/core'
import { MatInputModule  } from '@angular/material';
import { from } from 'rxjs';
@NgModule({
    imports: [
        MatStepperModule,
        MatCardModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        CdkStepperModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule

    ],
    exports:[    
        MatStepperModule,
        MatCardModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        CdkStepperModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule
    ]


})
export class MaterialAnglur { }