import Banner from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useJsonQuery } from './utilities/fetch';
import TermPage from './components/TermPage';
import CourseForm from './components/CourseForm'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const queryClient = new QueryClient();
const App = () => {
  const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');
  if (error) return <h1>Error loading course data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading course data...</h1>;
  if (!data) return <h1>No course data found</h1>;
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