import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation';
import Home from './routes/home/home';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
