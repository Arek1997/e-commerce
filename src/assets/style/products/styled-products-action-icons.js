import styled from 'styled-components';

const StyledActionIcons = styled.div`
	max-width: 10rem;
	position: absolute;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 1rem;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	opacity: 0;
	visibility: hidden;
	transition: opacity 0.3s linear, visibility 0.3s linear;

	.product__details,
	.product__add,
	.product__favourite {
		display: grid;
		width: 40px;
		height: 40px;
		font-size: 1.8rem;
		color: #fff;
		background-color: var(--orange);
		place-items: center;
		border-radius: 50%;
		transition: background-color 0.3s;

		&:hover {
			background-color: var(--orange-hover);
		}
	}

	.product__favourite {
		color: ${(props) => (props.favourite ? 'var(--fail-color)' : '#fff')};
	}
`;

export default StyledActionIcons;
