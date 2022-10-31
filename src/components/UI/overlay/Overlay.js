import { createPortal } from 'react-dom';

import StyledOverlay from '../../../style/overlay/styled-overlay';

const portalElement = document.getElementById('overlay');

const Overlay = (props) => {
	return createPortal(<StyledOverlay onClick={props.onClose} />, portalElement);
};

export default Overlay;
