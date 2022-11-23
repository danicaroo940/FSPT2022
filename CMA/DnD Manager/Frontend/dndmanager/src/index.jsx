import React from 'react';
import ReactDOM from "react-dom/client";

import './stylesheets/index.scss';
import { CreateCharacterForm } from './forms/create-character-form';
import { LoginForm } from './forms/login.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginForm />
    <CreateCharacterForm />
  </React.StrictMode>
);
