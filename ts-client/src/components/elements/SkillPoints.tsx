import { Typography } from "@mui/material";
import { DividedContent } from "components/boxes";
import NumberInput from "components/inputs/NumberInput";
import { useDebounce } from "hooks/useDebounce";
import React, { useState } from "react";

export interface SkillPoints {
  id: number;
  title: string;
  mod: number;
}

export interface SkillPointsProps {
  onChange: (val: SkillPoints[]) => void;
  data: SkillPoints[];
}

const SkillPoints: React.FC<SkillPointsProps> = ({ data, onChange }) => {
  const [tempData, setTempData] = useDebounce<SkillPoints[]>(data, onChange);

  return (
    <>
      <DividedContent sx={{ mb: 5 }}>
        <Typography variant="h5">Skills Base Bonus</Typography>
      </DividedContent>
      {tempData.map((el, i) => (
        <NumberInput
          label={el.title}
          value={el.mod}
          onChange={(val) => {
            setTempData((prev) => [
              ...prev.map((el, y) => (i === y ? { ...el, mod: +val } : el)),
            ]);
          }}
        />
      ))}
    </>
  );
};

export default React.memo(SkillPoints);
