import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
const StartPage = lazy(() => import('./components/pages/startPage/StartPage'));
const AuthorizationPage = lazy(() => import('./components/pages/Authorization/AuthorizationPage'));
const MainLayout = lazy(() => import('./layouts/MainLayout'));

const App = () => {
  return (
    <BrowserRouter>
    <Suspense fallback={<h1>Loading...</h1>}>
    <Routes>
      <Route path="/" element={<MainLayout />}>
      <Route index element={<StartPage />} />
      <Route path="/auth" element={<AuthorizationPage />} />
      </Route>
</Routes>
        </Suspense>
    </BrowserRouter>
  )
}

export default App