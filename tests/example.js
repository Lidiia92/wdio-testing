describe('First Steps with WebdriverIO', () => {
	it('Load Example Website', () => {
		browser.url('http://www.example.com');
		//browser.pause(3000);
		expect(browser).toHaveUrl('http://www.example.com/');
		expect(browser).toHaveTitle('Example Domain');
	});

	it('H1 should be visible', () => {
		//Get selector and sav it to a variable
		const h1 = $('h1');

		//Assertion
		expect(h1).toBeVisible();
	});
});
