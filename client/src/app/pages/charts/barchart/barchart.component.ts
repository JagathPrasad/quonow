import {
  Component,
  OnInit
  , Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';
import { GanttChart } from '../barchart/barchart.model';

@Component({
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(1000)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ],
  selector: 'app-barchart',
  templateUrl: '../barchart/barchart.html',
  styleUrls: ['../barchart/barchart.css']

})
export class BarchartComponent implements OnInit {
  private _bar: GanttChart;

  constructor() {
    //alert(this._bar.color);
  }

  setStyle(): any {
    return {
      'background-color': this._bar.color,
      'width': this._bar.width.toString() + '%',
      'left': this._bar.position.toString() + '%',
      'border-radius': this.setRound()
    }
  }

  setRound(): any {

    if (this._bar.roundDirecton === 'right') {
      return '0 4px 4px 0';
    } else if (this._bar.roundDirecton === 'left') {
      return '4px 0px 0px 4px';
    } else if (this._bar.roundDirecton === 'both') {
      return '4px 4px 4px 4px';
    }
  }


  ngOnInit() {

  }


  @Input('ganttbar') set bar(bar) {
    this._bar = bar;
    if (this._bar.direction) {
      let leftArrow = this._bar.leftArrowData;
      this._bar.leftArrowData = this._bar.rightArrowData;
      this._bar.rightArrowData = leftArrow;
    }
  }
}
