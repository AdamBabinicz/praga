import React from "react";
import { PopupContainer, PopupInner, Button } from "./PopupElements.js";
// import { IoMdClose } from "react-icons/io";
import ClearIcon from "@material-ui/icons/Clear";

function Popup(props) {
  return props.trigger ? (
    <PopupContainer>
      <PopupInner>
        <Button onClick={() => props.setTrigger(false)}>
          <ClearIcon />
        </Button>
        {props.children}
      </PopupInner>
    </PopupContainer>
  ) : (
    ""
  );
}
export default Popup;
