import Head_Of_Page from "../hedearPage/headOfPage";
import Search_Avatar from "../hedearPage/search&Avatar";
import Table_Users from "./tabl";


export default function UserPage(){
    return(
        <>
       <Search_Avatar/>
       <Head_Of_Page title="User Managament" sub_title="Here, view and manage all customers Account"/>
       <Table_Users/>
        </>

    )

}