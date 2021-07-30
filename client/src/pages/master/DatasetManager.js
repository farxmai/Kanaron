import React from "react";
import { Link } from "react-router-dom";
import { GET_ALL_STAFF_QUERY } from "qql/MasterPageQuery";
import QueryLayout from "components/layouts/QueryLayout";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { FlexBetween } from "components/directions";
import { Add, ExpandMore } from "@material-ui/icons";
import { MAIN_PATHS } from "router/paths";
import { QualityIndicator } from "components/elements/QualityIndicator";

const DatasetManagerComponent = ({
  races,
  classes,
  skills,
  perks,
  spells,
  currentItems,
  items,
  materials,
  qualities,
}) => {
  const data = [
    {
      title: "Базовые характеристики",
      list: [
        { array: races, label: "Расы", url: MAIN_PATHS.races },
        { array: classes, label: "Классы", url: MAIN_PATHS.classes },
        { array: skills, label: "Навыки", url: MAIN_PATHS.skills },
        { array: perks, label: "Перки", url: MAIN_PATHS.perks },
        { array: spells, label: "Заклинания", url: MAIN_PATHS.spells },
        {
          label: "Предметы",
          url: MAIN_PATHS.items,
          array: currentItems.map((el) => ({
            id: el.id,
            title: `${el.item.title} (${el.material.title})`,
            color: el.quality.color,
          })),
        },
      ],
    },
  ];
  return (
    <Card variant='translucent'>
      {data.map((q) => (
        <Box sx={{ mb: 2 }}>
          <Typography variant='h4' gutterBottom>
            {q.title}
          </Typography>
          <Grid container spacing={1}>
            {q.list.map((category) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={
                        <IconButton>
                          <ExpandMore />
                        </IconButton>
                      }
                    >
                      {category.url ? (
                        <FlexBetween>
                          <Link to={`${category.url}`}>
                            <Typography variant='h5' gutterBottom>
                              {category.label}
                            </Typography>
                          </Link>
                          <Link to={`${category.url}/new`}>
                            <IconButton>
                              <Add />
                            </IconButton>
                          </Link>
                        </FlexBetween>
                      ) : (
                        <Typography variant='h5' gutterBottom>
                          {category.label}
                        </Typography>
                      )}
                    </AccordionSummary>
                    <Divider />
                    <AccordionDetails sx={{ p: 0 }}>
                      <List>
                        {category.array?.map((el) => (
                          <ListItem
                            button
                            component={(props) => (
                              <Link to={`${category.url}/${el.id}`} {...props} />
                            )}
                          >
                            {el.color && <QualityIndicator color={el.color} />}
                            <ListItemText>{el.title}</ListItemText>
                          </ListItem>
                        ))}
                      </List>
                    </AccordionDetails>
                  </Accordion>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Card>
  );
};

const DatasetManager = () => (
  <QueryLayout query={GET_ALL_STAFF_QUERY} Component={DatasetManagerComponent} />
);

export default DatasetManager;
