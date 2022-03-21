import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import ArticleList from "./ArticleList";
import Contact from "./Contact";
import About from "./About";
import Article from "./Article";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="page">
					<Routes>
						<Route path="/snoop-blog/" element={<Home />} />
						<Route path="/snoop-blog/articles/*" element={<ArticleList />} />
						<Route path="/snoop-blog/contact" element={<Contact />} />
						<Route path="/snoop-blog/about" element={<About />} />
						<Route path="/snoop-blog/articles/:id" element={<Article />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
