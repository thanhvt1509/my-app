import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Category from "@/components/Category";
import HomeWhy from "@/components/HomeWhy";
import Products from "@/components/Products";
import TimeOpen from "@/components/TimeOpen";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <HomeWhy></HomeWhy>
      <Products></Products>
      <TimeOpen></TimeOpen>
      <Blog></Blog>
    </div>
  );
};

export default HomePage;
