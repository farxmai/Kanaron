import { useEffect, useRef } from "react";
import { Box, useTheme } from "@material-ui/core";
import useSmoothScroll from "react-smooth-scroll-hook";
import styled from "@emotion/styled";

import Icons from "components/icons/Icons";
import { CardBordered } from "components/cards";
import { FlexBetween } from "components/directions";

const options = [
  "soldier",
  "ranger",
  "barbarian",
  "rouge",
  "monk",
  "cleric",
  "paladin",
  "inquisitor",
  "wizard",
  "necromancer",
  "druid",
  "bard",
];

const IconBox = styled(Box)(({ theme, selected }) => ({
  width: 70,
  height: 70,
  cursor: "pointer",
  marginRight: theme.spacing(1),
  padding: theme.spacing(1),
  borderRadius: 10,
  border: "1px solid",
  transition: theme.transitions.create("border-color", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  borderColor: selected
    ? theme.palette.secondary.main
    : theme.palette.grey[500],
  "&:hover": {
    borderColor: selected
      ? theme.palette.secondary.dark
      : theme.palette.grey[600],
  },
}));

export const IconForm = ({ value = 6, setValue }) => {
  const theme = useTheme();
  const current = options.findIndex((el) => el === value);
  const ref = useRef(null);

  const { scrollTo } = useSmoothScroll({
    ref,
    speed: 1000,
    direction: "x",
  });

  useEffect(() => {
    scrollTo(`#item-${current}`);
  }, []);

  return (
    <CardBordered title="Иконка">
      <Box
        ref={ref}
        sx={{
          width: { xs: 270, md: "100%" },
          overflowX: "scroll",
        }}
      >
        <FlexBetween sx={{ p: 1 }}>
          {options.map((el, i) => (
            <IconBox
              key={el}
              id={`item-${i}`}
              selected={value === el}
              onClick={() => setValue(el)}
            >
              <Icons
                type={el}
                title={el}
                fullHeight={50}
                fullWidth={50}
                fill={
                  value === el
                    ? theme.palette.secondary.main
                    : theme.palette.grey[500]
                }
              />
            </IconBox>
          ))}
        </FlexBetween>
      </Box>
    </CardBordered>
  );
};
