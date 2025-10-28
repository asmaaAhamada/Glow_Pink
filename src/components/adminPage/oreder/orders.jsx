import Head_Of_Page from "../hedearPage/headOfPage";
import Search_Avatar from "../hedearPage/search&Avatar";
import Table_Orders from "./Table";


export default function OrdersPage(){
    return(
        <>
       
        <Search_Avatar/>
            <Head_Of_Page 
              title="Orders Management" 
              sub_title="Here, view and manage all customer orders." 
            />
       
        <Table_Orders/>
        </>

    )

}