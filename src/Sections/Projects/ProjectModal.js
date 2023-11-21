import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function FullScreenDialog({
  open,
  onClose,
  imageSrc,
  projectName,
}) {
  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth={"lg"}>
        <DialogTitle id="scroll-dialog-title">{projectName}</DialogTitle>
        <DialogContent dividers>
          <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
            <img
              style={{
                width: "100%",
                height: "65vh",
              }}
              src={imageSrc}
              alt={projectName}
            />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
