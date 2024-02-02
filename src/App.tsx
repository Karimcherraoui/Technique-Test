import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CheckOut from "./Components/Page/CheckOut";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <CheckOut />
      </QueryClientProvider>


    </div>
  );
}

export default App;
