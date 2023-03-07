// Button.js
class Button extends HTMLElement {
    constructor() {
      super();
  
      // Create a shadow root
      const shadow = this.attachShadow({ mode: 'open' });
  
      // Create a button element and set its label
      const button = document.createElement('button');
      button.textContent = this.getAttribute('label');
  
      // Add a click event listener to the button
      button.addEventListener('click', () => {
        console.log('Button clicked!');
      });
  
      // Add the button element to the shadow root
      shadow.appendChild(button);
    }
  }
  
  // Define the custom element
  customElements.define('my-button', Button);
  