const inputs = document.querySelectorAll("input"),
	ps = document.querySelectorAll(".error-msg"),
	btn = document.querySelector("button");
btn.addEventListener("click", () => {
	inputs.forEach((input, i) => {
		// Empty error
		if (input.value === "") {
			input.classList.add("error", "empty");
			ps[i].innerHTML = inputs[i].name + " cannot be empty";
		} else {
			input.classList.remove("error", "empty");
			ps[i].innerHTML = "";
		}

		// Invalid Email address error
		const emailValidation = null;
	});

	/* 	ps.forEach((p, i) => {
		p.innerHTML = inputs[i].name + " cannot be empty";
	}); */

	setTimeout(() => {
		for (let i = 0; i <= 4; i++) {
			inputs[i].classList.remove("error", "empty");
			ps[i].innerHTML = "";
		}
	}, 4000);
});
