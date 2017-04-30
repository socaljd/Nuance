function validateForm() {
	var el = document.getElementById('phone_number');
	if (!el.value.match(/^\d{10}$|^\(\d{3}\) \d{3}-\d{4}$|^\d{3}-\d{3}-\d{4}$/)) {
		el.parentNode.className = 'row error';
		el.previousElementSibling.innerHTML = '* Phone Number - invalid phone number';
	} else {
		el = document.getElementById('content');
		var html = '';
		html += '<h5>Thank you!</h5>';
		html += '<div class="row">';
			html += '<p>Your information was submitted successfully. We will now connect you to the next available chat agent.</p>';
		html += '</div>';
		el.innerHTML = html;
	}
}