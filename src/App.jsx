import Banner from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useJsonQuery } from './utilities/fetch';
import TermPage from './components/TermPage';


const queryClient = new QueryClient();
const App = () => {
  const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');
  if (error) return <h1>Error loading course data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading course data...</h1>;
  if (!data) return <h1>No course data found</h1>;
  return(  
    <QueryClientProvider client={queryClient}>
    <div>
      <Banner title={data.title} />
      <div className="container">
      <TermPage courses={data.courses} />
        </div>
    </div>
    </QueryClientProvider>
  );
};

export default App;
