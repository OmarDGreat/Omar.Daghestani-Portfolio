import Home from "./Home";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

const Pages = (props) => {
  const currentPage = props.currentPage;
  switch (currentPage.name  ) {
    case "home":
      return <Home />;
    case "portfolio":
      return <Portfolio />;
    case "contact":
      return <Contact />;
  }
};

export default Pages;
