import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import PrivateRouter from './utils/PrivateRouter';
const StartPage = lazy(() => import('./components/pages/startPage/StartPage'));
const AuthorizationPage = lazy(() => import('./components/pages/Authorization/AuthorizationPage'));
const MainLayout = lazy(() => import('./layouts/MainLayout'));
const NotePage = lazy(() => import('./components/pages/Notes/NotePage'));

const App = () => {
  return (
    <BrowserRouter>
    <Suspense fallback={<h1>Loading...</h1>}>
    <Routes>
      <Route path="/" element={<MainLayout />}>
      <Route index element={<StartPage />} />
      <Route path="/auth" element={<AuthorizationPage />} />
      <Route element={<PrivateRouter />}>
       <Route path="notes" element={<NotePage />} />
       <Route path="notes/:id" element={<NotePage />} />
      </Route>
      </Route>
</Routes>
        </Suspense>
    </BrowserRouter>
  )
}

export default App