"use client";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/dist/server/api-utils";



const DashboardPage = () => {
    const {data: session} = authClient.useSession();

    if(!session) {
        return(<p>Please sign in</p>);
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h1>
            <p className="text-lg mb-6">You are signed in as {session.user.name}</p>
            {session.user.image && (
                <img 
                    src={session.user.image} 
                    alt={session.user.name || "User"} 
                    className="rounded-full w-24 h-24 mb-4" 
                />
            )}
            <Button type="button" onClick={() => authClient.signOut() } className="w-full">
                Sign Out
            </Button>
       </div>     
    );
};


export default DashboardPage;
