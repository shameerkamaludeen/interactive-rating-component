const params = new Proxy(new URLSearchParams(window.location.search), {
	get: (searchParams, prop) => searchParams.get(prop),
});
// Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
let rating = params.rateRn;
const note = document.getElementById('rc-rnb-note');
note.textContent = `You selected ${rating} out of 5`;