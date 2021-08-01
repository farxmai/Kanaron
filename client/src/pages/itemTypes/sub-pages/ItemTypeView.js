import { Box, Typography } from "@material-ui/core";
import { EditButton } from "components/buttons";
import { FlexBetween } from "components/directions";

const ItemView = ({ item, setEdit }) => {
  console.log(item);
  const { title } = item;

  const Header = () => (
    <FlexBetween sx={{ mb: 1 }}>
      <Box display='flex' alignItems='center'>
        <Typography sx={{ ml: 2, fontSize: { xs: 26, sm: 40 } }}>{title}</Typography>
      </Box>
      <EditButton setEdit={setEdit} />
    </FlexBetween>
  );

  return <Header />;
};

export default ItemView;