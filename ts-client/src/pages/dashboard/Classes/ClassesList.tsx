import { Button, Typography } from "@mui/material";
import { Row } from "components/boxes";
import { useNav } from "hooks/useNav";
import React from "react";

export interface ClassesListProps {}

const ClassesList: React.FC<ClassesListProps> = ({}) => {
  const { viewClass } = useNav();
  return (
    <>
      <Row>
        <Typography variant={"h1"}>Classes</Typography>
        <Button variant={"contained"} onClick={() => viewClass("new")}>
          + Add new
        </Button>
      </Row>
    </>
  );
};

export default ClassesList;
