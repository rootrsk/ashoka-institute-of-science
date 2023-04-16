import React from 'react'
import PropTypes from 'prop-types';

import { Box, Modal as MUIModal, Typography} from '@mui/material';
function Modal(props) {
    const {open,onClose,size="small",title, children,footer,header} = props
    return (
        <MUIModal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className={`modal ${size}`}>
                {(title || header) &&
                    <div className="modal-header">
                        <h2 className="modal-title">{title}</h2>
                        <>{header}</>
                    </div>
                }
                
                <div className="modal-body">
                    {children}
                </div>
                {footer && 
                    <div className="modal-footer">
                        {footer}
                    </div>
                }
            </div>
        </MUIModal>
    )
}

Modal.propTypes={
    open: PropTypes.bool,
    onClose: PropTypes.func,
    title: PropTypes.string,
    header: PropTypes.node,
    footer : PropTypes.node,
    size: PropTypes.oneOf(['small','md','lg','xl'])
}

export default Modal

