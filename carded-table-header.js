import '@brightspace-ui/core/components/colors/colors.js';
import { css, html, LitElement } from 'lit';

class CardedTableHeader extends LitElement {

	static get styles() {
		return css`
			:host {
				color: var(--d2l-color-galena);
				display: grid;
				font-size: 0.8rem;
				grid-column-gap: 1rem;
				margin-bottom: 0.25rem;
				padding: 0 1rem;
			}
		`;
	}

	render() {
		return html`
			<slot></slot>
		`;
	}
}

window.customElements.define('d2l-labs-carded-table-header', CardedTableHeader);
