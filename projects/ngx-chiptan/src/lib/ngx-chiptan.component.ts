import {Component, Input, OnInit} from '@angular/core';
import { flickerCanvas, flickerCode } from './flicker';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-chiptan',
  template: `
      <div id='flickercontainer'>
      </div>
  `,
  styles: []
})
export class NgxChiptanComponent implements OnInit {

  @Input()
  code: string;

  @Input()
  width: number;

  @Input()
  height: number;

  @Input()
  bgColor: string;

  @Input()
  barColor: string;

  private state: any;
  private interval: any;

  constructor() {
  }


  ngOnInit() {
    this.state = {
      canvas: new flickerCanvas(this.width, this.height, this.bgColor, this.barColor),
      code: new flickerCode(this.code),
    };

    const { canvas, code } = this.state;

    if (!this.code) { return; }

    document
      .getElementById('flickercontainer')
      .appendChild(canvas.getCanvas());

    canvas.setCode(code);

    this.startFlicker();
  }

  startFlicker() {
    this.interval = setInterval(this.step.bind(this), 50);
  }

  stopFlicker() {
    clearInterval(this.interval);
  }

  step() {
    this.state.canvas.step();
  }
}
