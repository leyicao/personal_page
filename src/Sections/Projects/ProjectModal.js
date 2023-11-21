import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ImageGallery from "react-image-gallery";

import projectImg1_1 from "../../assets/Projects/Project1-1.png";

export default function FullScreenDialog({
  open,
  onClose,
  images,
  projectName,
}) {
  const items = images.map((image) => ({
    original: image,
    thumbnail: image,
  }));
  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth={"lg"}>
        <DialogTitle id="scroll-dialog-title">{projectName}</DialogTitle>
        <DialogContent dividers>
          {/* <DialogContentText id="scroll-dialog-description" tabIndex={-1}> */}
          <ImageGallery items={items} />
          {/* </DialogContentText> */}
        </DialogContent>
      </Dialog>
    </>
  );
}
