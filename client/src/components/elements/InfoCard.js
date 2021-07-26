import { Card, Grid, Typography } from "@material-ui/core";

const InfoBox = ({ list }) => (
  <Card
    sx={{
      borderRadius: "10px",
      border: `1px solid`,
      borderColor: (theme) => theme.palette.secondary.main,
    }}
  >
    {list.map(({ label, value }) => (
      <Grid container>
        <Grid item xs={9} sx={{ p: 1 }}>
          <Typography variant="body2">{label}</Typography>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            color: (theme) => theme.palette.primary.main,
            bgcolor: (theme) => theme.palette.secondary.main,
            p: 1,
          }}
        >
          <Typography variant="body2">{value}</Typography>
        </Grid>
      </Grid>
    ))}
  </Card>
);

export default InfoBox;
