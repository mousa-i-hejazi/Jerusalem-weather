
import './App.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        p: 2,
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Card sx={{ maxWidth: 450, maxHeight: 600, mx: 70, bgcolor: 'rgba(255, 255, 255, 0.9)'}}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={
            { textAlign: 'center', fontWeight: 'bold', color: '#b13f02ff'}
          }>
            طقس القدس
          </Typography>
          sdfghjhgfddfg
          <Typography variant="body2" color="text.secondary">
          
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default App
