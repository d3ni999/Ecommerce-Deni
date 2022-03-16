import Menu from "./Menu";
import ProductCard from "./ProductCard";
import Product from "../services/data/Product";
import { PropertySafetyFilled } from "@ant-design/icons";


const Layout = (props) => {
  return (
    <div className="container mx-auto">
      {/* top menu*/}
      <div className="flex justify-between border-b border-slate-300 py-2 text-sm">
        <div className="flex gap-8">
          <a href="https://www.google.com/" className="text-green-500">
            Chat with us
          </a>
          <p>+62 812 5565 6663</p>
          <p>deniandriani309@gmail.com</p>
        </div>

        <div className="">
          <ul className="flex gap-8 text-green-500">
            <li>Blog</li>
            <li>About Us</li>
            <li>Career</li>
          </ul>
        </div>
      </div>

      {/* logo dan search */}
      <div className="flex justify-between py-10">
        <h1 className="text-3xl font-bold">LeumangShop</h1>
        <div className="flex w-6/12 justify-center">
          <input
            type="text"
            className="bg-gray-100 w-full rounded-xl border-2 border-gray-300 pl-3 py-1 "
            placeholder="Search Products, categories ..."
          />
          <img
            src="img/icon/search-icon.png"
            alt=""
            className="w-4 h-4 self-center -ml-8"
          />
        </div>
        <div className="flex gap-5">
          <img
            src="img/icon/user-icon.png"
            alt=""
            className="w-7 h-7 self-center"
          />
          <div className="flex relative">
            <img
              src="img/icon/cart-icon.png"
              alt=""
              className="w-7 h-7 self-center"
            />
            <div className="absolute -bottom-1 -left-1 text-xs bg-red-500 rounded-full w-4 h-4 text-white pl-1 font-bold">
              4
            </div>
          </div>
        </div>
      </div>

      {/* main menu */}
      <div className="flex justify-between mt-0 bg-gray-100 py-2 pl-6">
        <ul className="flex gap-14 items-center font-semibold">
          <Menu title="Bakery" icon={true} />
          <Menu title="Fruit and vegetables" icon={true} />
          <Menu title="Meat and fish" icon={true} />
          <Menu title=" Drink" icon={true} />
          <Menu title=" Kitchen" icon={true} />
          <Menu title=" Special nutrition" icon={true} />
          <Menu title=" Baby" icon={false} />
          <Menu title=" Pharmacy" icon={false} />
          <Menu />
          <Menu />
        </ul>
      </div>

      
      {props.children}

      
      {/* footer */}
      {/* <div className="flex justify-between mb-8">
        <div className="">
          <h2 className="font-bold mb-4">Get in touch</h2>
          <ul className="text-sm text-green-600">
            <li className="mb-2">About Us</li>
            <li className="mb-2">Careers</li>
            <li className="mb-2">Press Releases</li>
            <li className="mb-2">Blog</li>
          </ul>
        </div>

        <div className="">
          <h2 className="font-bold mb-4">Connections</h2>
          <ul className="text-sm text-green-600">
            <li className="mb-2">Facebook</li>
            <li className="mb-2">Twitter</li>
            <li className="mb-2">Instagram</li>
            <li className="mb-2">Youtube</li>
            <li className="mb-2">LinkedIn</li>
          </ul>
        </div>

        <div className="">
          <h2 className="font-bold mb-4">Earnings</h2>
          <ul className="text-sm text-green-600">
            <li className="mb-2">Become an Affiliate</li>
            <li className="mb-2">Advertise your product</li>
            <li className="mb-2">Sell on Market</li>
          </ul>
        </div>

        <div className="">
          <h2 className="font-bold mb-4">Account</h2>
          <ul className="text-sm text-green-600">
            <li className="mb-2">Your account</li>
            <li className="mb-2">Return Center</li>
            <li className="mb-2">100 % purchase protection</li>
            <li className="mb-2">Chat with us</li>
            <li className="mb-2">Help</li>
          </ul>
        </div>
      </div> */}






      {/* copyright */}
      <div className="mb-10">
        <h4>Copyright &copy; 2022 deni_andriani.com</h4>
      </div>
    </div>
  );
};

export default Layout;
