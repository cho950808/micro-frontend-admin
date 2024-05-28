import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  borderBottom: "1px solid lightgray",
  position: "fixed",
  top: 0,
  left: 0,
  backgroundColor: "#fff",
  zIndex: 1000,
});

export const wrapper = style({
  maxWidth: "1200px",
  padding: "20px 0",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const logo_image = style({
  width: 180,
});

export const github = style({
  textDecoration: "none",
});
