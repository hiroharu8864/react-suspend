import { FC, memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TestPage } from "../components/pages/TestPage";
import { SamplePage } from "../components/pages/SamplePage";

export const Router: FC = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/sample" element={<SamplePage />} />
      </Routes>
    </BrowserRouter>
  );
});
