import { vi } from 'vitest';
import { getAuthUrl, wait } from '../functions';

describe('wait()', () => {
	it('should execute once after 2 seconds', async () => {
		const viFunction = vi.fn(async (number: number) => await wait(number));

		await viFunction(2);

		expect(viFunction).toHaveBeenCalledOnce();
		expect(viFunction).toHaveBeenCalledWith(2);
	});

	it('should return "undefined" by default', async () => {
		const viFunction = vi.fn(async (number: number) => await wait(number));

		await viFunction(0);

		expect(viFunction).toReturnWith(undefined);
	});
});

describe('getAuthUrl()', () => {
	it('should return URL string which contain "signInWithPassword" string if "true" parametr was privided', () => {
		const expectedString = 'signInWithPassword';

		const result = getAuthUrl(true);

		expect(result).toMatch(expectedString);
	});

	it('should return URL string which contain "signUp" string if "false" parametr was privided', () => {
		const expectedString = 'signUp';

		const result = getAuthUrl(false);

		expect(result).toMatch(expectedString);
	});
});
