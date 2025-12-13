"use client";

import { useEffect, useState, ComponentType } from "react";
import { useRouter, usePathname } from "next/navigation";
import { isAuthenticated } from "@/lib/api-utils";


export function withAuth<P extends object>(
    Component: ComponentType<P>
): ComponentType<P> {
    return function AuthenticatedComponent(props: P) {
        const router = useRouter();
        const pathname = usePathname();
        const [isChecking, setIsChecking] = useState(true);

        useEffect(() => {
            // Check authentication status
            const checkAuth = () => {
                const authenticated = isAuthenticated();

                if (!authenticated) {
                    // Store the intended destination
                    if (typeof window !== "undefined") {
                        sessionStorage.setItem("redirectAfterLogin", pathname);
                    }

                    // Redirect to login
                    router.replace("/login");
                    return;
                }

                setIsChecking(false);
            };

            checkAuth();
        }, [router, pathname]);

        // Show loading state while checking authentication
        if (isChecking) {
            return (
                <div className="flex items-center justify-center min-h-screen bg-gray-50">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                        <p className="mt-4 text-gray-600">Loading...</p>
                    </div>
                </div>
            );
        }

        // Render the protected component
        return <Component {...props} />;
    };
}


export function useAuth() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuth = () => {
            const authenticated = isAuthenticated();
            setIsAuth(authenticated);
            setIsLoading(false);
        };

        checkAuth();
    }, []);

    return { isAuth, isLoading };
}
