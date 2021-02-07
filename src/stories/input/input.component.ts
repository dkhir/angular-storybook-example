import { Component, Input, Output, EventEmitter } from '@angular/core';

export enum TInputVisualMode {
  primary = 'primary',
  secondary = 'secondary',
  default = 'default'
}

@Component({
  selector: 'storybook-input',
  template: `{{hint}} {{visualMode}} : {{label}}<t-input [hint]="hint" [visualMode]="visualMode" [label]="label"></t-input>`,
})
export default class InputComponent {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  hint?: string;

  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  label?: string;

  /**
   * What background color to use
   */
  @Input()
  visualMode: 'primary' | 'secondary' | 'default';
}
