import './Modal.css';



const Modal = ({ children, open, close }) => (
  <div
    className={`modal ${open ? 'modal-show' : 'modal'}`}
    tabIndex="-1"
    role="dialog"
    onClick={(evt) => { if (evt.target === evt.currentTarget) close(); }}
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="btn-close" aria-label="Close"
            onClick={close}
          />
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default Modal;