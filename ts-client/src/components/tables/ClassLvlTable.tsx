import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import NumberInput from "components/inputs/NumberInput";
import { useDebounce } from "hooks/useDebounce";

interface SavingThrows {
  fortitude: number;
  reflex: number;
  will: number;
}

export interface LvlUpProps {
  class_lvl: number;
  base_attack: number;
  feats_per_lvl: number;
  special: string;
  saving_throws: SavingThrows;
  class_lvl_bonus_feats: any[];
  spell_lvl_0: number;
  spell_lvl_1: number;
  spell_lvl_2: number;
  spell_lvl_3: number;
  spell_lvl_4: number;
  spell_lvl_5: number;
  spell_lvl_6: number;
  spell_lvl_7: number;
  spell_lvl_8: number;
  spell_lvl_9: number;
}

const LvlRow: React.FC<{
  rowData: LvlUpProps;
  onChange: (val: LvlUpProps) => void;
}> = React.memo(({ rowData, onChange }) => {
  const [localRowData, setLocalRowData] = useState<LvlUpProps>(rowData);

  useEffect(() => {
    onChange(localRowData);
  }, [localRowData]);

  return (
    <TableRow key={localRowData.class_lvl}>
      <TableCell align="center">{localRowData.class_lvl}</TableCell>
      <TableCell align="center">
        <NumberInput
          fullWidth
          withPadding={false}
          value={localRowData.base_attack}
          onChange={(val) => {
            setLocalRowData((prev) => ({ ...prev, base_attack: +val }));
          }}
        />
      </TableCell>
      <TableCell align="center">
        <NumberInput
          fullWidth
          withPadding={false}
          value={localRowData.saving_throws.fortitude}
          onChange={(val) => {
            setLocalRowData((prev) => ({
              ...prev,
              saving_throws: {
                ...prev.saving_throws,
                fortitude: +val,
              },
            }));
          }}
        />
      </TableCell>
      <TableCell align="center">
        <NumberInput
          fullWidth
          withPadding={false}
          value={localRowData.saving_throws.reflex}
          onChange={(val) => {
            setLocalRowData((prev) => ({
              ...prev,
              saving_throws: {
                ...prev.saving_throws,
                reflex: +val,
              },
            }));
          }}
        />
      </TableCell>
      <TableCell align="center">
        <NumberInput
          fullWidth
          withPadding={false}
          value={localRowData.saving_throws.will}
          onChange={(val) => {
            setLocalRowData((prev) => ({
              ...prev,
              saving_throws: {
                ...prev.saving_throws,
                will: +val,
              },
            }));
          }}
        />
      </TableCell>
      <TableCell align="center">
        <Autocomplete
          id={`${localRowData.class_lvl}-feat`}
          size="small"
          fullWidth
          multiple
          options={[]}
          value={localRowData.class_lvl_bonus_feats}
          renderInput={(params) => (
            <TextField {...params} variant="standard" sx={{ minWidth: 200 }} />
          )}
          onChange={(_, val) => {
            setLocalRowData((prev) => ({
              ...prev,
              class_lvl_bonus_feats: val,
            }));
          }}
        />
      </TableCell>
      <TableCell align="center">
        <TextField
          variant="standard"
          value={localRowData.special}
          sx={{ minWidth: 200 }}
          onChange={(e) => {
            setLocalRowData((prev) => ({ ...prev, special: e.target.value }));
          }}
        />
      </TableCell>
      <TableCell align="center">
        <NumberInput
          fullWidth
          value={localRowData.spell_lvl_0}
          withPadding={false}
          onChange={(val) => {
            setLocalRowData((prev) => ({ ...prev, spell_lvl_0: +val }));
          }}
        />
      </TableCell>
      <TableCell align="center">
        <NumberInput
          fullWidth
          withPadding={false}
          value={localRowData.spell_lvl_1}
          onChange={(val) => {
            setLocalRowData((prev) => ({ ...prev, spell_lvl_1: +val }));
          }}
        />
      </TableCell>
      <TableCell align="center">
        <NumberInput
          fullWidth
          withPadding={false}
          value={localRowData.spell_lvl_2}
          onChange={(val) => {
            setLocalRowData((prev) => ({ ...prev, spell_lvl_2: +val }));
          }}
        />
      </TableCell>
      <TableCell align="center">
        <NumberInput
          fullWidth
          withPadding={false}
          value={localRowData.spell_lvl_3}
          onChange={(val) => {
            setLocalRowData((prev) => ({ ...prev, spell_lvl_3: +val }));
          }}
        />
      </TableCell>
      <TableCell align="center">
        <NumberInput
          fullWidth
          withPadding={false}
          value={localRowData.spell_lvl_4}
          onChange={(val) => {
            setLocalRowData((prev) => ({ ...prev, spell_lvl_4: +val }));
          }}
        />
      </TableCell>
      <TableCell align="center">
        <NumberInput
          fullWidth
          withPadding={false}
          value={localRowData.spell_lvl_5}
          onChange={(val) => {
            setLocalRowData((prev) => ({ ...prev, spell_lvl_5: +val }));
          }}
        />
      </TableCell>
      <TableCell align="center">
        <NumberInput
          fullWidth
          withPadding={false}
          value={localRowData.spell_lvl_6}
          onChange={(val) => {
            setLocalRowData((prev) => ({ ...prev, spell_lvl_6: +val }));
          }}
        />
      </TableCell>
      <TableCell align="center">
        <NumberInput
          fullWidth
          withPadding={false}
          value={localRowData.spell_lvl_7}
          onChange={(val) => {
            setLocalRowData((prev) => ({ ...prev, spell_lvl_7: +val }));
          }}
        />
      </TableCell>
      <TableCell align="center">
        <NumberInput
          fullWidth
          withPadding={false}
          value={localRowData.spell_lvl_8}
          onChange={(val) => {
            setLocalRowData((prev) => ({ ...prev, spell_lvl_8: +val }));
          }}
        />
      </TableCell>
      <TableCell align="center">
        <NumberInput
          fullWidth
          withPadding={false}
          value={localRowData.spell_lvl_9}
          onChange={(val) => {
            setLocalRowData((prev) => ({ ...prev, spell_lvl_9: +val }));
          }}
        />
      </TableCell>
    </TableRow>
  );
});

export interface ClassLvlTableProps {
  onChange: (val: LvlUpProps[]) => void;
  data: LvlUpProps[];
}

const ClassLvlTable: React.FC<ClassLvlTableProps> = ({ data, onChange }) => {
  const [debData, setDebData] = useDebounce<LvlUpProps[]>(data, onChange, 2000);

  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="center" rowSpan={2}>
              LVL
            </TableCell>
            <TableCell align="center" rowSpan={2}>
              BBA
            </TableCell>
            <TableCell align="center" rowSpan={2}>
              Fort
            </TableCell>
            <TableCell align="center" rowSpan={2}>
              Ref
            </TableCell>
            <TableCell align="center" rowSpan={2}>
              Will
            </TableCell>
            <TableCell align="center" rowSpan={2}>
              Feats
            </TableCell>
            <TableCell align="center" rowSpan={2}>
              Special
            </TableCell>
            <TableCell align="center" colSpan={10}>
              Spells/day
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">0</TableCell>
            <TableCell align="center">1</TableCell>
            <TableCell align="center">2</TableCell>
            <TableCell align="center">3</TableCell>
            <TableCell align="center">4</TableCell>
            <TableCell align="center">5</TableCell>
            <TableCell align="center">6</TableCell>
            <TableCell align="center">7</TableCell>
            <TableCell align="center">8</TableCell>
            <TableCell align="center">9</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {debData.map((el, i) => (
            <LvlRow
              rowData={el}
              onChange={(row) => {
                setDebData((prev) => [
                  ...prev.map((el, y) => (i === y ? row : el)),
                ]);
              }}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default React.memo(ClassLvlTable);
