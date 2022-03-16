import { useParams } from "react-router-dom";
import Layout from "./Layout";
import ProductCard from "./ProductCard";
import Product from "../services/data/Product";
// import {TouchableOpacity} from "react-native-gesture-handler";

const Detail = () => {
    const params = useParams () ;
    const item = Product.filter(element => element.name === params.productName);
    console.log(item);
    return(
        <Layout>
            <ProductCard item = {item[0]}/>

            {/* <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Text>Go Back</Text>
            </TouchableOpacity>
             */}
           
         </Layout>



    )
}
export default Detail;