import "./App.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// Components
import LoadingState from "./components/LoadingState";
import ErrorState from "./components/ErrorState";
import WeatherDisplay from "./components/WeatherDisplay";

// Hooks
import { useWeather } from "./hooks/useWeather";
import { useCurrentTime } from "./hooks/useCurrentTime";

// Utils
import { formatArabicDate, formatArabicTime } from "./utils/dateUtils";
import { getWeatherIconUrl } from "./utils/weatherUtils";

// Constants
import { JERUSALEM_LAT, JERUSALEM_LON, API_KEY } from "./constants";

function App() {
  // Use custom hooks
  const time = useCurrentTime();
  const { weather, loading, error } = useWeather(
    JERUSALEM_LAT,
    JERUSALEM_LON,
    API_KEY
  );

  const arabicDate = formatArabicDate(time);
  const arabicTime = formatArabicTime(time);

  const currentTemp = weather?.main ? Math.round(weather.main.temp) : null;
  const tempMin = weather?.main ? Math.round(weather.main.temp_min) : null;
  const tempMax = weather?.main ? Math.round(weather.main.temp_max) : null;
  const description = weather?.weather?.[0]?.description ?? "";
  const icon = weather?.weather?.[0]?.icon ?? null;
  const iconUrl = icon ? getWeatherIconUrl(icon) : null;

  return (
    <Box>
      <Card
        elevation={10}
        className="weather-card "
        sx={{
          minWidth: 450,
          minHeight: 300,
          bgcolor: "rgba(104, 123, 211, 0.95)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardContent sx={{ width: "100%" }}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "2rem",
              color: "rgba(19, 14, 14, 0.99)",
              textAlign: "center",
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
            طقس القدس
          </Typography>

          {loading ? (
            <LoadingState />
          ) : error ? (
            <ErrorState message={error} />
          ) : (
            <>
              <Typography
                sx={{
                  fontWeight: "regular",
                  fontSize: "1.2rem",
                  color: "rgba(255, 255, 255, 0.95)",
                  textAlign: "center",
                }}
                variant="body2"
                color="text.secondary"
              >
                {arabicDate}
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{ mt: 1, textAlign: "center" }}
              >
                {arabicTime}
              </Typography>

              <WeatherDisplay
                currentTemp={currentTemp}
                iconUrl={iconUrl}
                description={description}
                tempMin={tempMin}
                tempMax={tempMax}
              />
            </>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

export default App;
