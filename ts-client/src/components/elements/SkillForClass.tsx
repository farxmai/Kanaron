import { Typography } from "@mui/material";
import { DividedContent } from "components/boxes";
import CheckboxInput from "components/inputs/CheckboxInput";
import NumberInput from "components/inputs/NumberInput";
import { useDebounce } from "hooks/useDebounce";
import React, { useState } from "react";

export interface ClassSkill {
  id: number;
  title: string;
  is_for_class: boolean;
}

export interface SkillForClassProps {
  onChange: (val: ClassSkill[]) => void;
  data: ClassSkill[];
}

const SkillForClass: React.FC<SkillForClassProps> = ({ data, onChange }) => {
  const [tempData, setTempData] = useDebounce<ClassSkill[]>(data, onChange);

  return (
    <>
      <DividedContent sx={{ mb: 5 }}>
        <Typography variant="h5">Class Skills</Typography>
      </DividedContent>
      {tempData.map((el, i) => (
        <CheckboxInput
          label={el.title}
          value={el.is_for_class}
          onChange={(val) => {
            setTempData((prev) => [
              ...prev.map((el, y) =>
                i === y ? { ...el, is_for_class: val } : el
              ),
            ]);
          }}
        />
      ))}
    </>
  );
};

export default React.memo(SkillForClass);
