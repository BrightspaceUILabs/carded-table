import { html, LitElement } from 'lit-element/lit-element.js';

class CardedTableCards extends LitElement {

	render() {
		return html`
			<slot></slot>
		`;
	}
}

window.customElements.define('d2l-labs-carded-table-cards', CardedTableCards);
