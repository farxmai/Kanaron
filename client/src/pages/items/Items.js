import { Link } from "react-router-dom";
import { Box, Card, Divider, Grid, List, ListItem, Typography } from "@material-ui/core";
import QueryLayout from "components/layouts/QueryLayout";
import { GET_ALL_ITEMS_QUERY } from "qql/ItemQuery";
import {
  formatCurrentItems,
  formatItemsByGroups,
  getItemTypeLabel,
  getMaterialTypeLabel,
} from "helpers/items";
import { QualityIndicator } from "components/elements/QualityIndicator";

const ItemsComponent = ({ currentItems }) => {
  const items = formatCurrentItems(currentItems);
  const itemsGroups = formatItemsByGroups(items);

  return (
    <Grid container spacing={1}>
      {Object.keys(itemsGroups).map((group) => (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card variant='bordered' sx={{ p: 1 }}>
            <Typography variant='h4' gutterBottom>
              {getItemTypeLabel(group)}
            </Typography>
            <Divider />
            <List>
              {itemsGroups[group].map(({ id, title, color }, i) => (
                <ListItem
                  key={i}
                  button
                  component={(props) => <Link to={`items/${id}`} {...props} />}
                >
                  <QualityIndicator color={color} />
                  <Typography>{title}</Typography>
                </ListItem>
              ))}
            </List>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

const Items = () => <QueryLayout query={GET_ALL_ITEMS_QUERY} Component={ItemsComponent} />;

export default Items;
