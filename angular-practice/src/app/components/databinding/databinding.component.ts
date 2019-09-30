import { Component } from '@angular/core';


@Component({
    selector: 'app-databinding',
    templateUrl: './databinding.component.html'
})
export class DatabindingComponent {

    person1 = {name: 'Flintstone', age: 42, email: 'feetdonthurt@gmail.com'};
    person2 = {name: 'Michangelo', age: 24, email: 'ninjaturtle@gmail.com'};
}