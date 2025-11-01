import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DatastoreRequest from './components/datastore1';
import DatastoreRequest2 from './components/datastore2';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/datastore" element={<DatastoreRequest />} />
          <Route path="/datastore2" element={<DatastoreRequest2 />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;