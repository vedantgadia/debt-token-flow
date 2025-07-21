
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Innovations from "./pages/Innovations";
import VDPTradeDocs from "./pages/VDPTradeDocs";
import DeepTierSCF from "./pages/DeepTierSCF";
import Tokenization from "./pages/Tokenization";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background" data-app-version="v2-blockchain-only">
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/innovations" element={<Innovations />} />
            <Route path="/vdp-trade-docs" element={<VDPTradeDocs />} />
            <Route path="/deep-tier-scf" element={<DeepTierSCF />} />
            <Route path="/tokenization" element={<Tokenization />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
