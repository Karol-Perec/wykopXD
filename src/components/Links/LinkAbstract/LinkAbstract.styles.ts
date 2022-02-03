import { Card, styled } from "@mui/material";

export const Container = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 800,
  marginBottom: theme.spacing(2),
}));
