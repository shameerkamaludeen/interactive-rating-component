// adding novalidate attribute to remove default browser validation
const formRate = document.getElementById('form-rating');
formRate.setAttribute('novalidate', '');

// validate rating form
formRate.addEventListener('submit', function (event) {

	// checking rating selected or not
	const ratingElements = formRate.querySelectorAll('[name="rateRn"]');
	let checked = false;
	for (const rating of ratingElements) {
		if (rating.checked) {
			checked = true;
		}
	}
	// preventing submit if not selected a rate
	if (!checked) {
		const error = formRate.querySelector('.validation-error');
		error.textContent = 'Please select a rating!';
		error.classList.add('active');
		event.preventDefault();
	}
});

// removing validation error message if user checked any rating
const ratingElements = formRate.querySelectorAll('[name="rateRn"]');
for (const rating of ratingElements) {
	rating.addEventListener('change', function () {
		if (this.checked) {
			const error = formRate.querySelector('.validation-error');
			if (error.classList.contains('active')) {
				error.textContent = '';
				error.classList.remove('active');
			}
		}
	});
}
