import { Card, Grid, Typography } from "@material-ui/core";

export const InfoCard = ({ list }) => (
  <Card
    sx={{
      mb: 2,
      borderRadius: "10px",
      border: `1px solid`,
      borderColor: (theme) => theme.palette.secondary.main,
    }}
  >
    {list.map(({ label, value }) => (
      <Grid container key={label}>
        <Grid item xs={8} sx={{ p: 1 }}>
          <Typography variant="body2">{label}</Typography>
        </Grid>
        <Grid
          item
          xs={4}
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
