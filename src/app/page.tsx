import { db } from "@/db/index";
export default function Page() {
 
if(db){
    console.log("Database connection established successfully.");
}
else{
    console.error("Failed to establish database connection.");
}
    
    return (
        <div>Hii</div>
    );
}