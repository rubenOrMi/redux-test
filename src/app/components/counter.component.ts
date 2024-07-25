import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../store/items.action';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent {

  title: string = 'Counter App con Redux'
  counter: number = 0;

  constructor(private store: Store<{counter: number}>){
    this.store.select('counter').subscribe( counter => {
      this.counter = counter;
    });
  }

  increment(){
    // this.counter++;
    this.store.dispatch(increment({add: 3}))
  }

  decrement(){
    // this.counter > 0 ? this.counter-- : this.counter;
    this.store.dispatch(decrement());
  }

  reset(){
    // this.counter = 0;
    this.store.dispatch(reset());
  }

}
