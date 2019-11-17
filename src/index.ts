import {
  LitElement,
  html,
  property,
  customElement,
} from 'lit-element';

@customElement('start-app')
export class StartApp extends LitElement {
  @property() firstName = 'First';
  @property() lastName = 'Name';

  render() {
    return html`
      <h1>This is an demo repo of using LitElement + TS + Parcel</h1>
      <p>Hello, ${this.firstName} ${this.lastName}</p>
    `;
  }
}
