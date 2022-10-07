import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { Repos } from "./pages/Repos";
import { queryClient } from "./lib/queryClient";
import { Repo } from "./pages/Repo";

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Repos />} />
          <Route path="/repos/*" element={<Repo />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
