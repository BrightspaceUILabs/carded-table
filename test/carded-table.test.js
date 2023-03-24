import '../carded-table-card.js';
import '../carded-table-cards.js';
import '../carded-table-header.js';
import '../carded-table-heading.js';
import '../carded-table.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('d2l-labs-carded-table', () => {

	let element;
	beforeEach(async() => {
		element = await fixture(html`
			<d2l-labs-carded-table default-columns>
				<d2l-labs-carded-table-header>
					<d2l-labs-carded-table-heading text="Column 1"></d2l-labs-carded-table-heading>
					<d2l-labs-carded-table-heading text="Column 2"></d2l-labs-carded-table-heading>
				</d2l-labs-carded-table-header>
				<d2l-labs-carded-table-cards>
					<d2l-labs-carded-table-card>
						<div>Card 1 Element 1</div>
						<div>Card 1 Element 2</div>
					</d2l-labs-carded-table-card>
					<d2l-labs-carded-table-card>
						<div>Card 2 Element 1</div>
						<div>Card 2 Element 2</div>
					</d2l-labs-carded-table-card>
				</d2l-labs-carded-table-cards>
			</d2l-labs-carded-table>
		`);
	});

	it('should pass all axe tests', async() => {
		await expect(element).to.be.accessible();
	});

	it('should add the grid-template-columns correctly if default-columns is set', () => {
		// Safari sets the style as 1fr 1fr
		const expectedStyles = ['repeat(2, 1fr)', '1fr 1fr'];
		const header = document.querySelector('d2l-labs-carded-table-header');
		const cards = document.querySelectorAll('d2l-labs-carded-table-card');
		expect(header.style.gridTemplateColumns).to.be.oneOf(expectedStyles);
		[...cards].forEach(card =>
			expect(card.style.gridTemplateColumns).to.be.oneOf(expectedStyles));
	});

});
