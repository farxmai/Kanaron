import { Box, Card, Grid, Hidden, Typography } from "@material-ui/core";

import { AttributesCard, ImageCard, InfoCard, TextCard } from "components/cards";
import { FlexBetween } from "components/directions";
import { EditButton } from "components/buttons";
import { getClassView } from "helpers/getDataForView";
import Icons from "components/icons/Icons";

const ClassView = ({ class: data, setEdit }) => {
  const { info, cards } = getClassView(data);

  const Header = () => (
    <FlexBetween sx={{ mb: 1 }}>
      <Box display='flex' alignItems='center'>
        <Box sx={{ width: { xs: 30, sm: 50 } }} display='flex' alignItems='center'>
          <Icons type={data.icon} title={data.title} fill='white' />
        </Box>
        <Typography sx={{ ml: 2, fontSize: { xs: 26, sm: 40 } }}>{data.title}</Typography>
      </Box>
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

export default ClassView;
