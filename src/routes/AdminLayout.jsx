import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import { Box, Container } from "@mui/material";
import AuthProvider from "../AuthProvider";
import DashboardHeader from "@components/dashboard/DashboardHeader";
import AdminSidebar from "@components/dashboard/AdminSidebar";

export default function AdminLayout() {
    return (
        <>
            <AuthProvider>
                <DashboardHeader />
                <Container maxWidth={false} sx={{ background: '#F5F7FA' }} disableGutters>
                    <Box display={"flex"} minHeight={'100dvh'}>
                        <AdminSidebar />
                        <Box component={'main'}  flex={8} paddingInline={10}>
                            <Outlet />
                        </Box>
                    </Box>
                </Container>
            </AuthProvider>
        </>
    )
}
