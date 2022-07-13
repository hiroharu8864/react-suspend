import { FC, memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TestPage } from "../components/pages/TestPage";

export const Router: FC = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
});
