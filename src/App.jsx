import Banner from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useJsonQuery } from './utilities/fetch';
import { useDbData } from "./utilities/firebase";
import TermPage from './components/TermPage';
import CourseForm from './components/CourseForm'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const queryClient = new QueryClient();
const App = () => {
  const [data, error] = useDbData('/');

  if (error) return <h1>Error loading data: {error.toString()}</h1>;
  if (data === undefined) return <h1>Loading data...</h1>;
  if (!data) return <h1>No data found</h1>;
  return(  
    <QueryClientProvider client={queryClient}>
      <Router> 
        <div>
          <Banner title={data.title} />
          <div className="container">
            <Routes>
              <Route path="/" element={<TermPage courses={data.courses} />} /> 
              <Route path="/edit/:id" element={<CourseForm />} /> 
            </Routes>
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;