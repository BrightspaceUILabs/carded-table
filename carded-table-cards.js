import { html, LitElement } from 'lit';

class CardedTableCards extends LitElement {

	render() {
		return html`
			<slot></slot>
		`;
	}
}

window.customElements.define('d2l-labs-carded-table-cards', CardedTableCards);
