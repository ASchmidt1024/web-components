// button.stories.js
import { html } from 'lit-html';
import './Button';

export default {
  title: 'Button',
  component: 'my-button',
};

export const Default = () => html`<my-button label="Click Me"></my-button>`;

export const CustomLabel = () => html`<my-button label="Press Here"></my-button>`;

export const CustomColor = () => html`<my-button label="Click Me" style="background-color: green; color: white;"></my-button>`;

