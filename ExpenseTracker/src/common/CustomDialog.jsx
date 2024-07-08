import PropTypes from "prop-types";
import {
  dialogOverlay,
  dialog,
  dialogHeader,
  dialogCloseButton,
  dialogContent,
  dialogActions,
} from "./CustomDialog-style"; // Adjust the path as needed

const CustomDialog = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div style={dialogOverlay}>
      <div style={dialog}>
        <div style={dialogHeader}>
          <h2
            style={{
              fontFamily: "Ubuntu",
              fontSize: "30px",
              fontWeight: 700,
              color: "rgba(0, 0, 0, 1)",
            }}
          >
            {title}
          </h2>
          <button onClick={onClose} style={dialogCloseButton}>
            X
          </button>
        </div>
        <div style={dialogContent}>{children}</div>
        <div style={dialogActions}>
          <button
            onClick={onClose}
            style={{
              padding: "15px 20px",
              border: "none",
              background: "rgba(227, 227, 227, 1)",
              borderRadius: "15px",
              fontSize: "15px",
              color: "rgba(0, 0, 0, 1)",
              marginRight: "15px",
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

CustomDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default CustomDialog;
