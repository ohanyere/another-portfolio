import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ClusterMeterPage from "./pages/projects/ClusterMeterPage";
import EksDrPage from "./pages/projects/EksDrPage";
import FinopsGuardrailPage from "./pages/projects/FinopsGuardrailPage";
import ProgressiveDeliveryPage from "./pages/projects/ProgressiveDeliveryPage";

export default function AnimatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/cluster-meter" element={<ClusterMeterPage />} />
      <Route path="/projects/eks-dr" element={<EksDrPage />} />
      <Route path="/projects/finops" element={<FinopsGuardrailPage />} />
      <Route path="/projects/progressive-delivery" element={<ProgressiveDeliveryPage />} />
    </Routes>
  );
}
