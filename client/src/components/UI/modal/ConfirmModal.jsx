import React from 'react'
import PropTypes from 'prop-types';

import { Box, Modal as MUIModal, Typography} from '@mui/material';
import Button from '../button/Button';
function ConfirmModal(props) {
    const {open,onClose,size="small",title, children,header,onConfirm,onCancel,message} = props
    const buttonHandler = (func)=>{
        onClose(false)
        func()
    }
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
                
                <div className="modal-body confirm-modal-body">
                    {message}
                </div>
                
                <div className="modal-footer confirm-modal-footer">
                    <Button variant="contained" onClick={()=>buttonHandler(onConfirm)}>Confirm</Button>
                    <Button onClick={()=>buttonHandler(onCancel)}>Cancel</Button>
                </div>
                
            </div>
        </MUIModal>
    )
}

ConfirmModal.propTypes={
    open: PropTypes.bool,
    onClose: PropTypes.func,
    title: PropTypes.string,
    header: PropTypes.node,
    footer : PropTypes.node,
    size: PropTypes.oneOf(['small','md','lg','xl'])
}

export default ConfirmModal

