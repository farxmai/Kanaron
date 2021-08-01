import { Link } from "react-router-dom";
import { Card, Divider, Grid, List, ListItem, Typography } from "@material-ui/core";
import QueryLayout from "components/layouts/QueryLayout";
import { GET_ALL_ITEM_MATERIALS_QUERY } from "qql/ItemQuery";
import { formatItemsByGroups, getMaterialTypeLabel } from "helpers/items";

const MaterialsComponent = ({ materials }) => {
  const itemsTypesGroups = formatItemsByGroups(materials);

  return (
    <Grid container spacing={1}>
      {Object.keys(itemsTypesGroups).map((group) => (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card variant='bordered' sx={{ p: 1 }}>
            <Typography variant='h4' gutterBottom>
              {getMaterialTypeLabel(group)}
            </Typography>
            <Divider />
            <List>
              {itemsTypesGroups[group].map(({ id, title }, i) => (
                <ListItem
                  button
                  key={i}
                  component={(props) => <Link to={`item-materials/${id}`} {...props} />}
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

const Materials = () => (
  <QueryLayout query={GET_ALL_ITEM_MATERIALS_QUERY} Component={MaterialsComponent} />
);

export default Materials;
