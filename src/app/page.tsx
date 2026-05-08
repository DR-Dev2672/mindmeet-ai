import { db } from '@/index';
export default function Home() {
  if(db){
    console.log("Database connection established successfully.");
}
else{
    console.error("Failed to establish database connection.");
}
  return (
    <div className="flex min-h-screen   flex-col items-center justify-between p-24">
      Hii
    
    </div>
  );
}
