import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const WeatherDisplay = ({
  currentTemp,
  iconUrl,
  description,
  tempMin,
  tempMax,
}) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3" component="div" sx={{ fontWeight: "light" }}>
          {currentTemp !== null ? `${currentTemp}°` : "--"}
        </Typography>
        {iconUrl && (
          <img
            src={iconUrl}
            alt={description || "weather icon"}
            style={{ width: 80, height: 80 }}
          />
        )}
      </Box>

      <Typography
        variant="subtitle1"
        sx={{
          mt: 0.5,
          color: "rgba(255, 255, 255, 0.9)",
          textAlign: "center",
          fontSize: "1.5rem",
        }}
      >
        {description || "—"}
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          mt: 1,
          justifyContent: "center",
          color: "rgba(255, 255, 255, 0.9)",
          fontWeight: "bold",
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          الصغرى: {tempMin !== null ? `${tempMin}°C` : "--"}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          الكبرى: {tempMax !== null ? `${tempMax}°C` : "--"}
        </Typography>
      </Box>
    </>
  );
};

export default WeatherDisplay;
