import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DocsIntroduction from "./pages/DocsIntroduction";
import DocsVision from "./pages/DocsVision";
import DocsFSM from "./pages/DocsFSM";
import DocsOrchestration from "./pages/DocsOrchestration";
import DocsProduction from "./pages/DocsProduction";
import DocsChaosEngine from "./pages/DocsChaosEngine";
import DocsRosterCast from "./pages/DocsRosterCast";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Documentation Routes */}
          <Route path="/docs" element={<DocsIntroduction />} />
          <Route path="/docs/introduction" element={<DocsIntroduction />} />
          <Route path="/docs/vision" element={<DocsVision />} />
          <Route path="/docs/architecture/fsm" element={<DocsFSM />} />
          <Route path="/docs/architecture/orchestration" element={<DocsOrchestration />} />
          <Route path="/docs/architecture/production" element={<DocsProduction />} />
          <Route path="/docs/features/chaos-engine" element={<DocsChaosEngine />} />
          <Route path="/docs/roster/cast" element={<DocsRosterCast />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
