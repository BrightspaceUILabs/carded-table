import { css, html, LitElement } from 'lit';

class CardedTableHeading extends LitElement {
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
