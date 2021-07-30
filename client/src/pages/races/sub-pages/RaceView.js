import { Card, Grid, Hidden, Typography } from "@material-ui/core";

import { AttributesCard, ImageCard, InfoCard, TextCard } from "components/cards";
import { FlexBetween } from "components/directions";
import { EditButton } from "components/buttons";
import { getRaceView } from "helpers/getDataForView";

const RaceView = ({ race: data, setEdit }) => {
  const { info, cards } = getRaceView(data);

  const Header = () => (
    <FlexBetween sx={{ mb: 1 }}>
      <Typography sx={{ fontSize: { xs: 26, sm: 40 } }}>{data.title}</Typography>
      <EditButton setEdit={setEdit} />
    </FlexBetween>
  );

  return (
    <Card variant='translucent'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Hidden smUp>
            <Header />
          </Hidden>

          <ImageCard id={data.id} title={data.title} src={data.imgLink} />
          <InfoCard list={info} />
          <AttributesCard attributes={data.attributes} />
        </Grid>

        <Grid item xs={12} sm={8}>
          <Hidden smDown>
            <Header />
          </Hidden>

          {cards.map(({ label, value, listOf }, i) => (
            <TextCard key={i} label={label} value={value} listOf={listOf} />
          ))}
        </Grid>
      </Grid>
    </Card>
  );
};

export default RaceView;
