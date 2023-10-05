import {
  Autocomplete,
  Box,
  Checkbox,
  Grid,
  Slider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Card, Column, DividedContent, Row } from "components/boxes";
import React, { useEffect, useMemo, useState } from "react";
import { FormHeader } from ".";
import NumberInput from "components/inputs/NumberInput";
import CheckboxInput from "components/inputs/CheckboxInput";
import SkillForClass from "../elements/SkillForClass";
import ClassLvlTable, { LvlUpProps } from "components/tables/ClassLvlTable";

const SKILLS = [
  { id: 1, title: "Appraise" },
  { id: 2, title: "Balance" },
  { id: 3, title: "Bluff" },
  { id: 4, title: "Climb" },
  { id: 5, title: "Concentration" },
  { id: 6, title: "Craft" },
  { id: 7, title: "Decipher Script" },
  { id: 8, title: "Diplomacy" },
  { id: 9, title: "Disable Device" },
  { id: 11, title: "Disguise" },
  { id: 12, title: "Escape Artist" },
  { id: 13, title: "Forgery" },
  { id: 14, title: "Gather Information" },
  { id: 15, title: "Handle Animal" },
  { id: 16, title: "Heal" },
  { id: 17, title: "Hide" },
  { id: 18, title: "Intimidate" },
  { id: 19, title: "Jump" },
  { id: 20, title: "Knowledge" },
  { id: 21, title: "Listen" },
  { id: 22, title: "Move Silently" },
  { id: 23, title: "Open Lock" },
  { id: 24, title: "Perform" },
  { id: 25, title: "Profession" },
  { id: 26, title: "Ride" },
  { id: 27, title: "Search" },
  { id: 28, title: "Sense Motive" },
  { id: 29, title: "Sleight Of Hand" },
  { id: 30, title: "Speak Language" },
  { id: 31, title: "Spellcraft" },
  { id: 32, title: "Spot" },
  { id: 33, title: "Swim" },
  { id: 34, title: "Tumble" },
  { id: 35, title: "Use Magic Device" },
  { id: 36, title: "Use Rope" },
];

const ATTRIBUTES = [
  { id: 1, label: "Strength", value: "strength" },
  { id: 2, label: "Dexterity", value: "dexterity" },
  { id: 3, label: "Constitution", value: "constitution" },
  { id: 4, label: "Intelligence", value: "intelligence" },
  { id: 5, label: "Wisdom", value: "wisdom" },
  { id: 6, label: "Charisma", value: "charisma" },
];

const DEFAULT_CLASS_BONUS = {
  class_lvl: 1,
  base_attack: 1,
  feats_per_lvl: 1,
  special: "",
  saving_throws: {
    fortitude: 0,
    reflex: 0,
    will: 0,
  },
  class_lvl_bonus_feats: [],
  spell_lvl_0: 0,
  spell_lvl_1: 0,
  spell_lvl_2: 0,
  spell_lvl_3: 0,
  spell_lvl_4: 0,
  spell_lvl_5: 0,
  spell_lvl_6: 0,
  spell_lvl_7: 0,
  spell_lvl_8: 0,
  spell_lvl_9: 0,
};

const generateClassLvlBonuses = () => {
  return Array.from({ length: 20 }, (_, index) => index + 1).map((lvl) => ({
    ...DEFAULT_CLASS_BONUS,
    class_lvl: lvl,
    base_attack: lvl,
  }));
};

const generateClassSkills = () => {
  return SKILLS.map((skill) => ({ ...skill, is_for_class: false }));
};

const DEFAULT_VALUES = {
  name: "",
  description: "",
  reference: "Base",
  base_attribute: ATTRIBUTES[0],
  base_skill_points: 4,
  dice_hp: 6,
  character_class_skill: generateClassSkills(),
  class_lvl_bonuses: generateClassLvlBonuses(),
};

export interface ClassFormProps {
  defaultValues?: typeof DEFAULT_VALUES;
  onSubmit?: (data: any) => void;
  options?: {
    skills: { id: number; title: string }[];
    abilities: { id: number; title: string }[];
  };
}

const ClassForm: React.FC<ClassFormProps> = ({
  defaultValues = DEFAULT_VALUES,
  onSubmit = () => {},
}) => {
  const [values, setValues] = useState({
    name: defaultValues.name,
    description: defaultValues.description,
    reference: defaultValues.reference,
    base_attribute: defaultValues.base_attribute,
    base_skill_points: defaultValues.base_skill_points,
    dice_hp: defaultValues.dice_hp,
  });

  const [lvlData, setLvlData] = useState<any>(defaultValues.class_lvl_bonuses);
  const [classSkillData, setClassSkillData] = useState<any>(
    defaultValues.character_class_skill
  );

  const handleSetValue = (
    field: keyof typeof DEFAULT_VALUES,
    value: string | number | object
  ) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const memorizeLvlData = useMemo(() => lvlData, []);
  const memorizeClassSkillData = useMemo(() => classSkillData, []);

  const handleSubmit = () => {
    onSubmit(values);
  };

  return (
    <Box>
      <Card sx={{ mb: 5 }}>
        <FormHeader title="Add new class" onSubmit={handleSubmit} />
      </Card>
      <Card sx={{ mb: 5 }}>
        <Grid container spacing={5}>
          <Grid item sm={12} lg={8}>
            <TextField
              required
              label="Name"
              value={values.name}
              onChange={(e) => handleSetValue("name", e.target.value)}
              sx={{ mb: 5 }}
            />
            <TextField
              required
              multiline
              rows={24}
              label="Description"
              value={values.description}
              onChange={(e) => handleSetValue("description", e.target.value)}
              sx={{ mb: 5 }}
            />
            <DividedContent sx={{ mb: 5 }}>
              <Typography variant="h5">Base params</Typography>
            </DividedContent>
            <NumberInput
              label="Base Skill Points"
              value={values.base_skill_points}
              onChange={(v) => handleSetValue("base_skill_points", v)}
            />
            <NumberInput
              label="HP Dice"
              value={values.dice_hp}
              onChange={(v) => handleSetValue("dice_hp", v)}
            />
            <Autocomplete
              sx={{ my: 5 }}
              id="base_attribute"
              fullWidth
              size="small"
              value={values.base_attribute}
              onChange={(_, newValue) =>
                handleSetValue("base_attribute", newValue as any)
              }
              options={ATTRIBUTES}
              renderInput={(params) => (
                <TextField {...params} label="Base Attribute" />
              )}
            />
            <TextField
              required
              disabled
              label="Reference"
              value={values.reference}
              onChange={(e) => handleSetValue("reference", e.target.value)}
              sx={{ mb: 5 }}
            />
          </Grid>
          <Grid item sm={12} lg={4}>
            <SkillForClass
              data={memorizeClassSkillData}
              onChange={setClassSkillData}
            />
          </Grid>
          <Grid item sm={12} lg={12}>
            <ClassLvlTable data={memorizeLvlData} onChange={setLvlData} />
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default ClassForm;
