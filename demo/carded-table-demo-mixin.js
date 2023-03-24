export const CardedTableDemoMixin = superclass => class extends superclass {
	static get properties() {
		return {
			_data: { type: Array },
			_windowWidth: { type: Number }
		};
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		if (this.__resizeObserver) {
			this.__resizeObserver.disconnect();
			this.__resizeObserver = null;
		}
	}

	firstUpdated() {
		super.firstUpdated();
		this.__startObserver();
	}

	__startObserver() {
		const htmlElem = document.documentElement;
		this.__resizeObserver = this.__resizeObserver || new ResizeObserver(entries => {
			entries.forEach(entry => {
				this._windowWidth = entry.contentRect.width;
			});
		});
		this.__resizeObserver.observe(htmlElem);
	}

	_computeCoursePackagesString(numCoursePackages, recentlyUpdated) {
		const packageString = numCoursePackages > 1
			? 'Packages'
			: 'Package';
		const courseStringPrefix = this._windowWidth < 526
			? 'Course'
			: '';
		return `${numCoursePackages} ${courseStringPrefix} ${packageString}${recentlyUpdated ? ' - ' : ''}`;
	}

	_computeLearnersEnrolledString(numLearnersEnrolled) {
		return `${numLearnersEnrolled} Learners ${this._windowWidth < 526 ? 'Enrolled' : ''}`;
	}
};
