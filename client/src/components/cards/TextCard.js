import {
  Card,
  Divider,
  List,
  ListItem,
  Typography,
  Tooltip,
} from "@material-ui/core";
import { Link } from "react-router-dom";

export const TextCard = ({ label, value, listOf }) =>
  value &&
  value.length > 0 && (
    <Card
      sx={{
        borderRadius: "10px",
        border: `1px solid`,
        borderColor: (theme) => theme.palette.secondary.main,
        p: 2,
        mb: 2,
      }}
    >
      <Typography sx={{ fontSize: { xs: 22, sm: 30 } }} gutterBottom>
        {label}
      </Typography>
      <Divider
        sx={{ borderColor: (theme) => theme.palette.secondary.light, mb: 1 }}
      />
      {Array.isArray(value) ? (
        <List>
          {value.map(({ id, title, description }) => (
            <ListItem sx={{ p: 0 }} key={id}>
              <Link to={`/${listOf}/${id}`} style={{ color: "white" }}>
                <Tooltip title={description || title} placement="bottom">
                  <Typography variant="body1">{title}</Typography>
                </Tooltip>
              </Link>
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body1">{value}</Typography>
      )}
    </Card>
  );
