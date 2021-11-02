import { Injectable } from '@angular/core';
import { Operation } from './operation';

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

  calculate(operation: Operation, x: number, y: number): number {
    switch (operation) {
      case Operation.ADD: return this.add(x, y);
      case Operation.SUBTRACT: return this.subtract(x, y);
      case Operation.MULTIPLY: return this.multiply(x, y);
      case Operation.DIVIDE: return this.divide(x, y);
    }
    return null;
  }

}
