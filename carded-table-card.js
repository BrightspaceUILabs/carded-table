import '@brightspace-ui/core/components/colors/colors.js';
import { css, html, LitElement } from 'lit-element/lit-element.js';

class CardedTableCard extends LitElement {

	static get styles() {
		return css`
			:host {
				align-items: center;
				border-radius: 0.25rem;
				border: 0.05rem solid var(--d2l-color-mica);
				box-shadow: 0 0.05rem 0.05rem 0.05rem var(--d2l-color-gypsum);
				color: var(--d2l-color-tungsten);
				display: grid;
				font-size: 0.75rem;
				grid-column-gap: 1rem;
				height: 3rem;
				margin-bottom: 0.25rem;
				max-width: 100%;
				padding: 0 1rem;
			}

			:host(:hover) {
				border: 0.1rem solid var(--d2l-color-primary-accent-action);
				margin: -0.05rem;
				margin-bottom: 0.20rem;
			}
		`;
	}
	render() {
		return html`
			<slot></slot>
		`;
	}
}

window.customElements.define('d2l-labs-carded-table-card', CardedTableCard);
