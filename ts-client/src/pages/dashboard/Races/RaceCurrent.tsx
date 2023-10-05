import RaceForm from "components/forms/RaceForm";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

export interface RaceCurrentProps {}

const RaceCurrent: React.FC<RaceCurrentProps> = ({}) => {
  const { id } = useParams();
  const [isEdit, setIsEdit] = useState(id === "new");

  return (
    <>
      <RaceForm />
    </>
  );
};

export default RaceCurrent;
