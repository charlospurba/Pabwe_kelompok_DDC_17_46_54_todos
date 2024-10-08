import React from "react";
import Nav from "./Nav";
import { Route, Routes, useSearchParams } from "react-router-dom";
import HomePageWrapper from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import DetailPage from "../pages/DetailPage";
import EditPage from "../pages/EditPage"; //edit
import NotFoundPage from "../pages/NotFoundPage";
function TodoApp() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword")
    ? searchParams.get("keyword")
    : "";
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }
  return (
    <div>
      <Nav keyword={keyword} keywordChange={changeSearchParams} />
      <Routes>
        <Route exact path="/" element={<HomePageWrapper keyword={keyword} />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
export default TodoApp;
