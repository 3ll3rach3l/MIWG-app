import React from 'react';
import ReactDOM from 'react-dom';
import MissingForm from './MissingForm';
import { Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


import './formModal.css'

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
    opacity: .9
  },
}));

//Portals allow React components to render in another part of the DOM that is outside of their parent component.
const FormModal = ({isShowing, hide}) => {

  const classes = useStyles()

  return (
    <div className="modal">
      {isShowing
        ? ReactDOM.createPortal(
            <>
              <div className="modal-overlay" />
              <div
                className="modal-wrapper"
                aria-modal
                aria-hidden
                tabIndex={-1}
                role="dialog"
              >
                <div className="modal">
                  <Paper className={classes.pageContent}>
                    <MissingForm />
                     <div className="modal-header">
                    <button
                      type="button"
                      className="modal-close-button"
                      data-dismiss="modal"
                      aria-label="Close"
                      onClick={hide}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  </Paper>
                 
                  {/* <p>
               Hello, I'm a modal.
             </p> */}
                </div>
              </div>
            </>,
            document.body
          )
        : null}
    </div>
  );
}
export default FormModal