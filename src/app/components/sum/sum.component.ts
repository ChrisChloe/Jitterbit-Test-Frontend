import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SumOperationService } from '../../services/sum-operation/sum-operation.service';

@Component({
  selector: 'app-sum',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
  ],
  templateUrl: './sum.component.html',
  styleUrl: './sum.component.scss',
})
export class SumComponent {
  constructor(public sumOperationService: SumOperationService) {}

  number1 = new FormControl();
  number2 = new FormControl();

  sumId = new FormControl('');

  sendNumbers() {
    this.sumOperationService
      .sendSumData(this.number1.value, this.number2.value)
      .subscribe(
        (response) => {
          console.log(response.insertedId);
        },
        (error) => {
          console.error('sendSumData Error: ' + error);
        }
      );
  }

  getSumInfo() {
    this.sumOperationService.findSumById(this.sumId.value).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error('findSumById Error: ' + error);
      }
    );
  }
}
