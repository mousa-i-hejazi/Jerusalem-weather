
import './App.css'
import { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

// Jerusalem coordinates
const JERUSALEM_LAT = 31.7683
const JERUSALEM_LON = 35.2137

const API_KEY = 'd5ffef2daf8c44470a6ac83b41992b52'

function App() {
  
  const [setWeather] = useState(null)
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timee = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timee)
  }, [])

  useEffect(() => {
    async function fetchWeather() {
      try {
        if (!API_KEY) {
          console.warn('Sorry, Fail in API')
          return
        }
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${JERUSALEM_LAT}&lon=${JERUSALEM_LON}&units=metric&appid=${API_KEY}&lang=ar`
        const res = await fetch(url)
        if (!res.ok) throw new Error('Weather fetch failed')
        const data = await res.json()
        setWeather(data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchWeather()
  }, [])

  const arabicDate = new Intl.DateTimeFormat('ar-EG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(time)
  const arabicTime = new Intl.DateTimeFormat('ar-EG', { hour: 'numeric', minute: 'numeric', second: 'numeric' }).format(time)

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        p: 2,
        mx:80,
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Card elevation={10} sx={{ minWidth: 450,minHeight:300, bgcolor: 'rgba(161, 155, 155, 0.95)'}}>
        <CardContent>
          <Typography sx={{ fontWeight: 'bold', fontSize: '2rem', color: 'rgba(217, 51, 51, 0.99)' }} gutterBottom variant="h5" component="div" >
            طقس القدس
          </Typography>
          <Typography sx={{ fontWeight: 'regular', fontSize: '1.2rem', color: 'rgba(98, 94, 94, 0.95)' }} variant="body2" color="text.secondary">
            {arabicDate}
          </Typography>
          <Typography variant="h6" component="div" sx={{ mt: 1 }}>
            {arabicTime}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default App
