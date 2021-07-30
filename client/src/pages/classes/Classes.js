import { Link } from "react-router-dom";
import { GET_ALL_CLASSES_QUERY } from "qql/ClassQuery";
import { Typography } from "@material-ui/core";
import { FlexWrapped } from "components/directions";
import { CardBordered } from "components/cards";
import Icons from "components/icons/Icons";
import QueryLayout from "components/layouts/QueryLayout";

const ClassesComponent = ({ classes }) => (
  <FlexWrapped>
    {classes.map(({ id, title, icon }, i) => (
      <Link key={id} to={`classes/${id}`}>
        <CardBordered sx={{ p: 2, m: 1, textAlign: "center" }}>
          <Icons
            type={icon}
            fullWidth={75}
            fullHeight={90}
            title={title}
            fill="white"
          />
          <Typography>{title}</Typography>
        </CardBordered>
      </Link>
    ))}
  </FlexWrapped>
);

const Classes = () => (
  <QueryLayout query={GET_ALL_CLASSES_QUERY} Component={ClassesComponent} />
);

export default Classes;
