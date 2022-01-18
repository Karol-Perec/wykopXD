import { GlobalStyles } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { routes } from "./routes";
import { Layout } from "./components/Layout/Layout";
import { globalStyles } from "./globalStyles";
import { ThemeContextProvider } from "./contexts/ThemeContextProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <GlobalStyles styles={globalStyles} />
        <Layout>{routes}</Layout>
      </ThemeContextProvider>
    </QueryClientProvider>
  );
}

export default App;
