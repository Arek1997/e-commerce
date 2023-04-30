import { vi } from 'vitest';
import Overlay from '../Overlay';
import { fireEvent, render, screen } from '@testing-library/react';

it('should render <Overlay/>', () => {
	const fakeFunction = vi.fn();
	render(<Overlay onClose={fakeFunction}>{}</Overlay>);
	expect(screen.getByTestId('overlay')).toBeInTheDocument();
});

it('should fire provided function when click <Overlay/>', async () => {
	const fakeFunction = vi.fn();
	render(<Overlay onClose={fakeFunction}>{}</Overlay>);

	const overlay = screen.getByTestId('overlay');
	fireEvent.click(overlay);
	expect(fakeFunction).toHaveBeenCalledTimes(1);
});
