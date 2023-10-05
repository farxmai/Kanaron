import {
  Autocomplete,
  Box,
  Grid,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { Card, Column, DividedContent, Row } from "components/boxes";
import React, { useState } from "react";
import { FormHeader } from ".";
import NumberInput from "components/inputs/NumberInput";
import SkillPoints from "components/elements/SkillPoints";

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

const DEFAULT_VALUES = {
  name: "",
  description: "",
  reference: "Base",
  preferred_class: "",
  size: 0,
  speed: 0,
  saving_throws: {
    fortitude: 0,
    reflex: 0,
    will: 0,
  },
  attributes: {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  },
  race_skill_bonuses: SKILLS.map((el) => ({ ...el, mod: 0 })),
  race_abilities: [],
};

export interface RaceFormProps {
  defaultValues?: typeof DEFAULT_VALUES;
  onSubmit?: (data: any) => void;
  options?: {
    skills: { id: number; title: string }[];
    abilities: { id: number; title: string }[];
  };
}

const RaceForm: React.FC<RaceFormProps> = ({
  defaultValues = DEFAULT_VALUES,
  onSubmit = () => {},
}) => {
  const [values, setValues] = useState(defaultValues);

  const handleSetValue = (
    field: keyof typeof DEFAULT_VALUES,
    value: string | number | object
  ) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    onSubmit(values);
  };

  return (
    <Box>
      <Card sx={{ mb: 5 }}>
        <FormHeader title="Add new race" onSubmit={handleSubmit} />
      </Card>
      <Card sx={{ mb: 5 }}>
        <Grid container spacing={5}>
          <Grid item sm={12} lg={4}>
            <Column>
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
                rows={11}
                label="Description"
                value={values.description}
                onChange={(e) => handleSetValue("description", e.target.value)}
                sx={{ mb: 5 }}
              />
              <TextField
                rows={5}
                label="Preferred Class"
                value={values.preferred_class}
                onChange={(e) =>
                  handleSetValue("preferred_class", e.target.value)
                }
                sx={{ mb: 5 }}
              />
              <Autocomplete
                multiple
                sx={{ mb: 5 }}
                id="race-abilities"
                fullWidth
                size="small"
                value={values.race_abilities}
                onChange={(_, newValue) =>
                  handleSetValue("race_abilities", newValue)
                }
                options={[]}
                renderInput={(params) => (
                  <TextField {...params} label="Abilities" />
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
            </Column>
          </Grid>
          <Grid item sm={12} lg={4}>
            <DividedContent sx={{ mb: 5 }}>
              <Typography variant="h5">Attributes Base Bonus</Typography>
            </DividedContent>
            <NumberInput
              label="Strength"
              value={values.attributes.strength}
              onChange={(v) =>
                handleSetValue("attributes", {
                  ...values.attributes,
                  strength: v,
                })
              }
            />
            <NumberInput
              label="Dexterity"
              value={values.attributes.dexterity}
              onChange={(v) =>
                handleSetValue("attributes", {
                  ...values.attributes,
                  dexterity: v,
                })
              }
            />
            <NumberInput
              label="Constitution"
              value={values.attributes.constitution}
              onChange={(v) =>
                handleSetValue("attributes", {
                  ...values.attributes,
                  constitution: v,
                })
              }
            />
            <NumberInput
              label="Intelligence"
              value={values.attributes.intelligence}
              onChange={(v) =>
                handleSetValue("attributes", {
                  ...values.attributes,
                  intelligence: v,
                })
              }
            />
            <NumberInput
              label="Wisdom"
              value={values.attributes.wisdom}
              onChange={(v) =>
                handleSetValue("attributes", {
                  ...values.attributes,
                  wisdom: v,
                })
              }
            />
            <NumberInput
              label="Charisma"
              value={values.attributes.charisma}
              onChange={(v) =>
                handleSetValue("attributes", {
                  ...values.attributes,
                  charisma: v,
                })
              }
            />
            <DividedContent sx={{ my: 5 }}>
              <Typography variant="h5">Saving Throws Base Bonus</Typography>
            </DividedContent>
            <NumberInput
              label="Fortitude"
              value={values.saving_throws.fortitude}
              onChange={(v) =>
                handleSetValue("saving_throws", {
                  ...values.saving_throws,
                  fortitude: v,
                })
              }
            />
            <NumberInput
              label="Reflex"
              value={values.saving_throws.reflex}
              onChange={(v) =>
                handleSetValue("saving_throws", {
                  ...values.saving_throws,
                  reflex: v,
                })
              }
            />
            <NumberInput
              label="Will"
              value={values.saving_throws.will}
              onChange={(v) =>
                handleSetValue("saving_throws", {
                  ...values.saving_throws,
                  will: v,
                })
              }
            />
            <DividedContent sx={{ my: 5 }}>
              <Typography variant="h5">Other params</Typography>
            </DividedContent>
            <NumberInput
              label="Speed"
              value={values.speed}
              onChange={(v) => handleSetValue("speed", v)}
            />
            <DividedContent sx={{ my: 5 }}>
              <Typography variant="h5">Size</Typography>
            </DividedContent>
            <Row>
              <Slider
                step={1}
                min={-2}
                max={2}
                defaultValue={0}
                value={values.size}
                onChange={(e, val) => handleSetValue("size", val)}
                marks={[
                  { value: -2, label: "Tiny" },
                  { value: -1, label: "Small" },
                  { value: 0, label: "Medium" },
                  { value: 1, label: "Large" },
                  { value: 2, label: "Huge" },
                ]}
              />
            </Row>
          </Grid>
          <Grid item sm={12} lg={4}>
            <SkillPoints
              data={values.race_skill_bonuses}
              onChange={(v) => handleSetValue("race_skill_bonuses", v)}
            />
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default RaceForm;
