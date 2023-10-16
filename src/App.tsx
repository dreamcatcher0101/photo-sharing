import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage, RegisterPage, DashboardPage } from 'pages';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
};
