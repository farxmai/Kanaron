import { Box, Button, Typography } from "@mui/material";
import { Row } from "components/boxes";
import { useNav } from "hooks/useNav";
import React from "react";

export interface RacesListProps {}

const RacesList: React.FC<RacesListProps> = ({}) => {
  const { viewRace } = useNav();
  return (
    <>
      <Row>
        <Typography variant={"h1"}>Races</Typography>
        <Button variant={"contained"} onClick={() => viewRace("new")}>
          + Add new
        </Button>
      </Row>
    </>
  );
};

export default RacesList;
