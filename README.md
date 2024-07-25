# Angular Counter App with Redux

Este proyecto es una aplicación simple de contador hecha en Angular que utiliza Redux para el manejo del estado.

## Estructura del Proyecto

El proyecto contiene los siguientes archivos principales:

- `items.action.ts`
- `item.reducer.ts`
- `counter.component.ts`
- `counter.component.html`

## items.action.ts

Este archivo define las acciones que se pueden realizar en el contador.

```typescript
import { createAction, props } from "@ngrx/store";

export const increment = createAction('[Counter Component] Increment', props<{add: number}>());
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
```

## item.reducer.ts

Este archivo define el reducer que maneja los cambios de estado basados en las acciones.

```typescript
import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./items.action";

export const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    on(increment, (state, { add }) => state + add),
    on(decrement, (state) => state - 1),
    on(reset, (state) => 0)
)
```

## counter.component.ts

Este archivo define el componente principal de la aplicación que interactúa con la store de Redux.

```typescript
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
    this.store.select('counter').subscribe(counter => {
      this.counter = counter;
    });
  }

  increment(){
    this.store.dispatch(increment({add: 3}));
  }

  decrement(){
    this.store.dispatch(decrement());
  }

  reset(){
    this.store.dispatch(reset());
  }
}
```

## counter.component.html

Este archivo define la vista del componente de contador.

```html
<h3>{{ title }}</h3>

<button (click)="increment()">Increment</button>
<div>Contador actual: {{ counter }}</div>
<button (click)="decrement()">Decrement</button>
<button (click)="reset()">Reset</button>
```

## Cómo Ejecutar el Proyecto

Clona el repositorio.
Instala las dependencias usando npm install.
Ejecuta el proyecto con ng serve.
Abre tu navegador y navega a http://localhost:4200.
¡Eso es todo! Ahora deberías ver tu aplicación de contador funcionando con Redux.

## Licencia

Este proyecto está bajo la licencia MIT.