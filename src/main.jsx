import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import CreatePage from './routes/CreatePage/CreatePage.jsx'
import PostPage from './routes/PostPage/PostPage.jsx'
import AuthPage from './routes/AuthPage/AuthPage.jsx'
import UserProfile from './routes/UserProfilePage/UserProfile.jsx'
import SearchPage from './routes/SearchPage/SearchPage.jsx'
import HomePage from './routes/Homepage/HomePage.jsx'
import MainLayout from './routes/Layout/MainLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/pin/:id" element={<PostPage />} />
          <Route path="/:username" element={<UserProfile />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
