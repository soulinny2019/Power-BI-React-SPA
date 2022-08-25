import React from 'react';
import { useIsAuthenticated } from "@azure/msal-react";
import { Box, Typography, Alert } from '@mui/material';

const PageNotAccessible = () => {
  const isAuthenticated = useIsAuthenticated();

  if (!isAuthenticated) {
    return (
        <Box>
        <Typography variant='h5' component="h2" sx={{my:3}} >Page not accessible to anonymous user</Typography>
        <Alert severity="error">Please login by clicking the <strong>LOGIN</strong> link in the upper right of this page.</Alert>        
    </Box>
  )}
}

export default PageNotAccessible;