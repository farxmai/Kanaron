import { Link } from "react-router-dom";
import { Card, Divider, Grid, List, ListItem, Typography } from "@material-ui/core";
import QueryLayout from "components/layouts/QueryLayout";
import { GET_ALL_ITEMS_QUERY, GET_ALL_ITEM_TYPES_QUERY } from "qql/ItemQuery";
import { formatItemsByGroups, getItemTypeLabel } from "helpers/items";

const ItemsComponent = ({ items: itemsTypes }) => {
  const itemsTypesGroups = formatItemsByGroups(itemsTypes);

  return (
    <Grid container spacing={1}>
      {Object.keys(itemsTypesGroups).map((group) => (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card variant='bordered' sx={{ p: 1 }}>
            <Typography variant='h4' gutterBottom>
              {getItemTypeLabel(group)}
            </Typography>
            <Divider />
            <List>
              {itemsTypesGroups[group].map(({ id, title }, i) => (
                <ListItem
                  button
                  key={i}
                  component={(props) => <Link to={`item-types/${id}`} {...props} />}
                >
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

const Items = () => <QueryLayout query={GET_ALL_ITEM_TYPES_QUERY} Component={ItemsComponent} />;

export default Items;
