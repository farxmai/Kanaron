const { Box } = require("@material-ui/core");

export const QualityIndicator = ({ color }) => (
  <Box sx={{ background: color, width: 3, height: 23, mr: 1 }} />
);
