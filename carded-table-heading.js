import { css, html, LitElement } from 'lit-element/lit-element.js';

class CardedTableHeading extends LitElement {

	static get properties() {
		return {
			text: { type: String }
		};
	}

	static get styles() {
		return css`
			:host {
				display: block;
			}
		`;
	}

	render() {
		return html`
			<slot></slot>
		`;
	}
}

window.customElements.define('d2l-labs-carded-table-heading', CardedTableHeading);
