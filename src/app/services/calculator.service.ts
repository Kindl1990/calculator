import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  
  /* addition */
  add(x: number, y: number): number { return x + y; }
  
  /* subtraction */
  subtract(x: number, y: number): number { return x - y; }
  
  /* multiplication */
  multiply(x: number, y: number): number { return x * y; }
  
  /* division */
  divide(x: number, y: number): number { return x / y; }

}
