import { Route, Routes } from "react-router-dom";
import Layout from './Layout/Layout';
import Collections from './pages/Collections';
import Homepage from './pages/Homepage';
import Photos from './pages/Photos';
import Videos from './pages/Videos';
import Photo from './pages/Photo'

import './styles/main.scss';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='photos' element={<Photos />} />
        <Route path='videos' element={<Videos />} />
        <Route path='collections' element={<Collections />} />
        <Route path='photos/:photoId' element={<Photo />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>404! There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
