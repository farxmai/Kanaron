import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { attributesTranslate } from "../translate/dictionary";

export default function Attributes({
  attributes,
  selfAttributes,
  getAttribute,
  variant,
  isEdit,
  setValue,
  limit,
}) {
  const points =
    selfAttributes &&
    Object.values(selfAttributes).reduce((acc, value) => acc + value, 0);
  const isInLimit = points < limit;
  const rows = attributesTranslate;

  return (
    <TableContainer
      component={Card}
      sx={{
        mt: 1,
        p: 2,
        borderRadius: "10px",
        border: `1px solid`,
        borderColor: (theme) => theme.palette.secondary.main,
      }}
    >
      <Table padding="none" size="small" paddingNone>
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan="8">
              <Typography>
                {`Атрибуты ${isEdit ? `${points}/${limit}` : ""}`}
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow sx={{ py: 1 }}>
              <TableCell>{row.ru}</TableCell>
              <TableCell width={40} align="center">
                {getAttribute ? getAttribute(row.eng) : attributes[row.eng]}
              </TableCell>
              {isEdit && (
                <TableCell>
                  <TextField
                    type="number"
                    max={isInLimit ? 20 : selfAttributes[row.eng]}
                    min={0}
                    sx={{
                      height: "20px",
                      width: "40px",
                      textAlign: "right",
                    }}
                    onChange={(e) => setValue(row.eng, +e.target.value)}
                    value={selfAttributes[row.eng]}
                  />
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
