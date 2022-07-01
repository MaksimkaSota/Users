import React, { Dispatch, SetStateAction } from 'react';
import Auth from '../Auth/Auth';

const Modal = ({openModal, setOpenModal}: {openModal: boolean, setOpenModal: Dispatch<SetStateAction<boolean>>}) => {
  return (
    <div className={`modal ${openModal && 'd-block'}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Registration form</h5>
            <button type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setOpenModal(false)}
            />
          </div>
          <div className="modal-body">
            <Auth/>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={() => setOpenModal(true)}>Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Modal;