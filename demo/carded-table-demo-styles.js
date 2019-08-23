import '@brightspace-ui/core/components/colors/colors.js';

import { css } from 'lit-element/lit-element.js';

export const cardedTableDemoStyles = css`
	.table-header,
	.table-card {
		padding-right: 2rem;
	}

	.table-header[dir=rtl],
	.table-card[dir=rtl] {
		padding-left: 2rem;
		padding-right: 1rem;
	}

	.table-card-name,
	.table-card-course-packages,
	.table-card-learners-enrolled {
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		display: -webkit-box;

		line-height: 1rem;
		overflow: hidden;
	}

	.table-card-recently-updated {
		color: var(--d2l-color-primary-accent-action);
		display: inline-block;
	}

	.table-card-options {
		transform: rotate(90deg);
	}

	@media only screen and (max-width: 900px) {
		.table-header,
		.table-card {
			padding-right: 1rem;
		}

		.table-card-options {
			display: none;
		}
	}

	@media only screen and (max-width: 525px) {
		.table-header {
			display: none;
		}

		.table-card {
			font-size: 0.65rem;
			height: 4rem;
			padding-right: 0.5rem;
		}

		.table-card[dir=rtl] {
			padding-left: 0.5rem;
			padding-right: 1rem;
		}

		.table-card-image {
			grid-row: 1 / 3;
		}

		.table-card-name {
			-webkit-line-clamp: 1;
			align-self: end;
			font-weight: bold;
			grid-column: 2 / 4;
		}

		.table-card-course-packages,
		.table-card-learners-enrolled {
			-webkit-line-clamp: 1;
			align-self: start;
		}
	}
	@media only screen and (max-width: 330px) {
		.table-card {
			height: 5rem;
			padding-right: 1rem;
		}

		.table-card-image {
			display: none;
		}

		.table-card-name {
			font-size: 0.7rem;
			grid-column: 1;
		}

		.table-card-course-packages {
			align-self: end;
		}

		.table-card-learners-enrolled {
			align-self: start;
		}
	}
`;
