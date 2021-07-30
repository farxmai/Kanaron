import { Card, Divider, Typography } from "@material-ui/core";

export const CardBordered = ({ children, title, ...rest }) => (
  <Card {...rest} sx={{ p: 2, mb: 1, ...rest.sx }}>
    <Card sx={{ p: { xs: 1, sm: 2 } }} variant="bordered">
      {title ? (
        <>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <Divider sx={{ mb: 1 }} />
        </>
      ) : null}
      {children}
    </Card>
  </Card>
);
