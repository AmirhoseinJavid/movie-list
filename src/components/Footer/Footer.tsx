
import React from 'react';
import { Box, Grid, Typography, Menu, MenuItem, Button } from '@mui/material';
const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: 'black',
        color: 'white',
        px: { xs: 2, sm: 4, md: 8 }, // padding افقی برای دیوایس‌های مختلف
        py: 0.5,
        mt: 2 // padding عمودی ثابت
      }}
    >
      <Grid container spacing={2} justifyContent="space-between" alignItems="center">
        {/* بخش سمت چپ */}
        <Grid item>
          <Button
            sx={{
              color: 'white',
              textTransform: 'none',
              fontSize: { xs: '0.8rem', md: '1rem' }, // تغییر اندازه متن برای ریسپانسیو بودن
            }}
          >
            Social Networks ▼
          </Button>
        </Grid>

        {/* بخش سمت راست */}
        <Grid item>
          <Grid container spacing={2}>
            {['Other Links ▼', 'Store', 'Contact & Support', 'Applications', 'Watch with TV'].map(
              (text, index) => (
                <Grid item key={index}>
                  <Typography
                    variant="body2"
                    sx={{
                      cursor: 'pointer',
                      fontSize: { xs: '0.7rem', md: '0.9rem' }, // تغییر اندازه متن
                    }}
                  >
                    {text}
                  </Typography>
                </Grid>
              )
            )}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
