import { Global, ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { Noto_Sans } from "next/font/google";
import { Suspense } from "react";
import { RecoilRoot } from "recoil";
import { global } from "libs/styles/global";
import theme from "libs/styles/theme";
import withAuthGuardAndRouter from "@components/common/Auth/withAuthGuardAndRouter";

const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const AuthComponent = withAuthGuardAndRouter(Component);
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Suspense fallback={<div>로딩</div>}>
          <div className={notoSans.className}>
            <AuthComponent {...pageProps} />
          </div>
        </Suspense>
      </ThemeProvider>
    </RecoilRoot>
  );
}
