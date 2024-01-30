import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first-angular';
//}
  constructor() {
    console.log('AppComponent: Object created..');

    this.show();
  }
  // Scope in class or out of class
  private firstName: String = 'Deepak';
  private lastName: String = 'Kumar';
  public age: number = 58;
  public salary: number = 12.95;
  isActive: boolean = true;
  gender: String = 'Male';
  profilePhoto: any;

  public userName: Array<string> = ['Mohit', 'Deepak', 'Nilesh', 'Punit'];
  public test: Array<any> = ['Dev', 52, false, 63.5];

  // read only, final | Class level
  public readonly count: number = 15;

  private show() {
    console.log('Method: Show:- ');

    let collageName: String = 'IET-DAVV';
    // Scope only in method
    let collageAddress = 'Indore';

    // read only, final | Method level
    const collagePincode = 452001;

    // Class var calling
    console.log('First Name: ' + this.firstName);
    console.log('Last Name: ' + this.lastName);
    console.log('Age: ' + this.age);

    // Local var calling
    console.log('collageName: ' + collageName);
    console.log('collageAddress: ' + collageAddress);
    console.log('collagePincode: ' + collagePincode);

    console.log('Count: ' + this.count);

    let total = this.sum(1, 15, 25);
    console.log('Total: ' + total);
  }

  public sum(a: number, b: number, c: number): number {
    console.log('Method: Sum:- ');

    let total: number = a + b + c;
    // return a + b + c;
    return total;
  }
}