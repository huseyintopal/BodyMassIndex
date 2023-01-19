import { LightningElement } from 'lwc';

export default class BMIcamculator extends LightningElement {
    cardTitle = 'BMI Calculator';

    weights;
    height;
    result;

    onWeightChange(event) {
        this.weight = parseFloat(event.target.value);

    }

    onHeightChange(event) {
        this.height = parseFloat(event.target.value);

    }

    clickHandler(){
        this.result = this.weight/(this.height*this.height);
    }
}