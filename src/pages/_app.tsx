import { type AppType } from "next/dist/shared/lib/utils";
import Navbar from "~/components/shared/Navbar";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="flex h-[100vh] items-center overflow-hidden bg-bg-primary bg-cover bg-no-repeat p-10 text-[#343a40] max-lg:p-0">
      <div className="mx-auto my-auto h-full overflow-y-auto overflow-x-hidden rounded-2xl shadow-primary ">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default MyApp;
