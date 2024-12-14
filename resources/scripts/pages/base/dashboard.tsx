import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import React from "react"
import Page from "@/components/page-component"

export default function Dashboard({ children }: { children: React.ReactNode }) {
    return (
        <Page title="Dashboard">
            <div className="h-full w-full flex">
                <SidebarProvider>
                    <AppSidebar />
                </SidebarProvider>
                <div className="bg-green-300 h-full w-full">nigger</div>
            </div>
        </Page>
    )
}
