"use client";

import { AlertDialog, Button } from "@heroui/react";
import { RiDeleteBin6Line } from "react-icons/ri";

const DeleteModal = ({ details }) => {
  const { _id, destinationName } = details;

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:5000/destination/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <AlertDialog>
      <Button
        variant="danger"
        className="rounded-none bg-white text-red-500 border border-red-500 text-[16px] "
      >
        {" "}
        <RiDeleteBin6Line className="mb-2" />
        Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete destination permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                Are you sure you want to delete
                <strong>{` "${destinationName}"`}</strong>?This action cannot be
                undone and will permanently remove this travel package from the
                system.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Confirm Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteModal;
