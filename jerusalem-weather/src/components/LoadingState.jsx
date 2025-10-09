import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingState = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        py: 4,
      }}
    >
      <CircularProgress size={60} sx={{ color: "rgba(217, 51, 51, 0.99)" }} />
      <Typography variant="h6" sx={{ color: "rgba(98, 94, 94, 0.95)" }}>
        جاري تحميل بيانات الطقس...
      </Typography>
    </Box>
  );
};

export default LoadingState;
