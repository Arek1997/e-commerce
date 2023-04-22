import { createPortal } from 'react-dom';

import StyledOverlay from '../../../assets/style/overlay/styled-overlay';

const portalElement = document.getElementById('overlay');

const Overlay = (props) => {
	return createPortal(<StyledOverlay onClick={props.onClick} />, portalElement);
};

export default Overlay;
