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
      display="flex"
      alignItems="center"
      justifyContent="center"
      width={"2rem"}
      height={"2rem"}
      borderRadius="50%"
      color="white"
      onClick={handleClick}
      border={"0.1rem solid red"}
    >
      <span style={{ fontSize: "1rem", fontWeight: "bold" }}>{letter}</span>
    </Box>
  );
};
