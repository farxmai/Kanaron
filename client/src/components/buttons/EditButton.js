import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export const EditButton = ({ setEdit }) => (
  <Button variant="dark" onClick={setEdit}>
    <FontAwesomeIcon icon={faEdit} />
  </Button>
);
