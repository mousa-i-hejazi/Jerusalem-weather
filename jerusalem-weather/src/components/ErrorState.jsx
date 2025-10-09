import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const ErrorState = ({ message }) => {
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
      <ErrorOutlineIcon
        sx={{ fontSize: 60, color: "rgba(217, 51, 51, 0.99)" }}
      />
      <Typography
        variant="h6"
        sx={{ color: "rgba(98, 94, 94, 0.95)", textAlign: "center" }}
      >
        {message || "حدث خطأ في جلب بيانات الطقس"}
      </Typography>
      <Typography variant="body2" sx={{ color: "rgba(98, 94, 94, 0.7)" }}>
        يرجى المحاولة مرة أخرى لاحقاً
      </Typography>
    </Box>
  );
};

export default ErrorState;
