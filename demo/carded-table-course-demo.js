import '@brightspace-ui/core/components/button/button-icon.js';
import '@brightspace-ui/core/components/colors/colors.js';
import '../carded-table-card.js';
import '../carded-table-cards.js';
import '../carded-table-header.js';
import '../carded-table-heading.js';
import '../carded-table.js';

import { css, html, LitElement } from 'lit-element/lit-element.js';
import { CardedTableDemoMixin } from './carded-table-demo-mixin.js';
import { cardedTableDemoStyles } from './carded-table-demo-styles.js';
import { courseData } from './demo-data.js';

class CardedTableCourseDemo extends CardedTableDemoMixin(LitElement) {
	static get styles() {
		return [ cardedTableDemoStyles,
			css`
				.table-header,
				.table-card {
					grid-template-columns: 5rem repeat(3, 1fr) 2.1rem;
				}

				.table-card-image {
					border-radius: 0.25rem;
					height: 2rem;
					width: 5rem;
				}

				@media only screen and (max-width: 900px) {
					.table-header,
					.table-card {
						grid-template-columns: 5rem repeat(3, 1fr);
					}
				}

				@media only screen and (max-width: 525px) {
					.table-card {
						grid-template-columns: 5rem 1fr 0.75fr;
					}
				}

				@media only screen and (max-width: 330px) {
					.table-card {
						grid-template-columns: 1fr;
					}
				}
			`
		];
	}

	constructor() {
		super();
		this._data = courseData;
	}

	render() {
		return html`
			<d2l-labs-carded-table>
				<d2l-labs-carded-table-header class="table-header">
					<d2l-labs-carded-table-heading>Course</d2l-labs-carded-table-heading>
					<d2l-labs-carded-table-heading></d2l-labs-carded-table-heading>
					<d2l-labs-carded-table-heading>Course Packages</d2l-labs-carded-table-heading>
					<d2l-labs-carded-table-heading>Learners Enrolled</d2l-labs-carded-table-heading>
					<d2l-labs-carded-table-heading></d2l-labs-carded-table-heading>
				</d2l-labs-carded-table-header>
				<d2l-labs-carded-table-cards>
					${this._data.map(item => html`
					<d2l-labs-carded-table-card class="table-card">
						<img class="table-card-image" src="${item.courseImageSrc}"/>
						<div class="table-card-name">${item.name}</div>
						<div class="table-card-course-packages">
							${this._computeCoursePackagesString(item.coursePackages, item.recentlyUpdated)}
							<span class="table-card-recently-updated" ?hidden='${!item.recentlyUpdated}'>
								New!
							</span>
						</div>
						<div class="table-card-learners-enrolled">
							${this._computeLearnersEnrolledString(item.learnersEnrolled)}
						</div>
						<d2l-button-icon text="More options" class="table-card-options" icon="tier1:more"></d2l-button-icon>
					</d2l-labs-carded-table-card>
					`)}
				</d2l-labs-carded-table-cards>
			</d2l-labs-carded-table>
		`;
	}
}

window.customElements.define('d2l-labs-carded-table-course-demo', CardedTableCourseDemo);
