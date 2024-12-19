"use client";

import {useRouter} from "next/navigation";
import {NextUIProvider} from "@nextui-org/react";
import {SessionProvider} from "next-auth/react";

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>["push"]>[1]>;
  }
}

export function Providers({children}: {children: React.ReactNode}) {
  const router = useRouter();

  return (
    <SessionProvider>
      <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
    </SessionProvider>
  );
}
