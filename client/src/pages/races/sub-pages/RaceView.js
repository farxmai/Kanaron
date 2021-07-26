import React from "react";
import { EditButton } from "../../../components/buttons/EditButton";

import { Card, Grid, Hidden, Typography } from "@material-ui/core";
import { FlexBetween } from "../../../components/directions/directions";

import TextCard from "../../../components/elements/TextCard";
import InfoBox from "../../../components/elements/InfoCard";
import ImageCard from "../../../components/elements/ImageCard";
import Attributes from "../../../components/tables/Attributes";

const RaceView = ({ race: data, setEdit }) => {
  const info = [
    {
      label: "Средний рост",
      value: data.height ? `${data.height} см` : null,
    },
    {
      label: "Продолжительность жизни",
      value: data.lifeSpan ? `${data.lifeSpan} лет` : null,
    },
  ];

  const cards = [
    { label: "Общие сведенья", value: data.description },
    { label: "Культура и быт", value: data.description },
    { label: "Бонусные навыки", value: data.skills, listOf: "skills" },
    { label: "Бонусные заклинания", value: data.spells, listOf: "spells" },
    { label: "Бонусные перки", value: data.perks, listOf: "perks" },
  ];

  return (
    <Card
      sx={{ background: (theme) => theme.palette.background.neutral, p: 2 }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          {console.log(data)}
          <Hidden smUp>
            <FlexBetween sx={{ mb: 1 }}>
              <Typography variant="h2">{data.title}</Typography>
              <EditButton setEdit={setEdit} />
            </FlexBetween>
          </Hidden>
          <ImageCard id={data.id} title={data.title} src={data.imgLink} />
          <InfoBox list={info} />
          <Attributes attributes={data.attributes} />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Hidden smDown>
            <FlexBetween sx={{ mb: 1 }}>
              <Typography variant="h2">{data.title}</Typography>
              <EditButton setEdit={setEdit} />
            </FlexBetween>
          </Hidden>

          {cards.map(({ label, value, listOf }) => (
            <TextCard label={label} value={value} listOf={listOf} />
          ))}
        </Grid>
      </Grid>
    </Card>
  );
};

export default RaceView;
