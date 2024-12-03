import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

const HomePage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" component="h1" sx={{ mb: 2 }}>
            TaoFit
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Kalori ve makro sayma uygulaması ile diyetinizi takip edin ve hedeflerinize ulaşın.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <img src="https://example.com/diyet-takip-logo.png" alt="Diyet Takip Logo" width={200} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" component="h2" sx={{ mb: 2 }}>
            Özellikleri
          </Typography>
          <ul>
            <li>Kalori ve makro sayma</li>
            <li>Diyet takip</li>
            <li>Hedef belirleme</li>
            <li>İlerleme takibi</li>
          </ul>
          <Typography variant="h3" component="h2" sx={{ mb: 2, mt: 4 }}>
            Faydaları
          </Typography>
          <ul>
            <li>Diyetinizi takip edin ve hedeflerinize ulaşın</li>
            <li>Kalori ve makro sayma ile sağlıklı beslenme</li>
            <li>İlerleme takibi ile motivasyon</li>
          </ul>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;