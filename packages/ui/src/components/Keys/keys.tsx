import Box from "@mui/material/Box";

interface IKeys {
  letter: string;
  onClick: (letter: string) => void;
}

export const Keys = ({ letter, onClick }: IKeys) => {
  const handleClick = () => {
    onClick(letter);
  };

  return (
    <Box
      component={"button"}
      type="button"
      display="flex"
      alignItems="center"
      justifyContent="center"
      width={"4rem"}
      height={"4rem"}
      borderRadius="50%"
      color="white"
      onClick={handleClick}
      bgcolor={"#8F799F"}
      border={"0.1rem solid #4E5A75"}
      sx={{
        cursor: "pointer",
        transition: "ease-in",
        boxShadow:
          "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
        "& :active": {
          boxShadow: "none",
        },
      }}
    >
      <span style={{ fontSize: "2rem", fontWeight: "bold" }}>{letter}</span>
    </Box>
  );
};
