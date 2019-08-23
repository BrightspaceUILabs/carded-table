import { css, html, LitElement } from 'lit-element/lit-element.js';

class CardedTable extends LitElement {

	static get properties() {
		return {
			defaultColumns: { type: Boolean, attribute: 'default-columns' }
		};
	}

	static get styles() {
		return css`
			:host {
				display: block;
			}
		`;
	}

	connectedCallback() {
		super.connectedCallback();
		if (this.defaultColumns) {
			const headerElement = this.querySelector('d2l-labs-carded-table-header');
			if (headerElement) {
				// convert to array as childNodes returns a NodeList
				const numColumns = this.querySelectorAll('d2l-labs-carded-table-heading').length;
				if (numColumns < 1) {
					return;
				}

				const gridTemplateColumnStyle = `repeat(${numColumns}, 1fr)`;
				headerElement.style.gridTemplateColumns = gridTemplateColumnStyle;

				const cardElements = [...this.querySelectorAll('d2l-labs-carded-table-card')];
				if (cardElements) {
					cardElements.forEach(cardElement => {
						cardElement.style.gridTemplateColumns = gridTemplateColumnStyle;
					});
				}
			}
		}
	}

	render() {
		return html`
			<slot></slot>
		`;
	}
}

window.customElements.define('d2l-labs-carded-table', CardedTable);
