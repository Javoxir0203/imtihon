import Category from "../components/Category";
import Sort from "../components/Sort";
import Footer from "../components/Footer";



const Clothes = () => {
  return (
    <div>
      <div className="container px-12 mx-auto pt-[100px] w-[1400px]">
        <div className="flex">
          <Category title="CLOTHES" />
          <Sort/>
        </div>
        </div>
        <Footer />
    </div>
  );
};

export default Clothes;
