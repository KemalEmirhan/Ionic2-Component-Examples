import { Component } from '@angular/core';

@Component({
    selector: 'app-touch-event',
    template: `

        <div class="gestures"
            (click)="onElementClicked()">
                Click me!
        </div>

        <div class="gestures"
            (tap)="onElementTapped()">
                Tap me!
        </div>

        <div class="gestures"
            (press)="onElementPressed()">
                Press me!
        </div>
    
    `
})
export class TouchEventComponent {

    onElementClicked() {
        console.log('Clicked me');
    }

     onElementTapped() {
        console.log('Tapped me');
    }

     onElementPressed() {
        console.log('Pressed me');
    }


}