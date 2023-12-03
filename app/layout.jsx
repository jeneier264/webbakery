import "@styles/globals.css";
import Nav from "@components/Nav";
import Foot from "@components/Foot";
import AppProvider from "@components/AppProvider";

export const metadata = {
  title: "WebBakery",
  description: "Discover & share baking recepies",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/assets/favicon.ico'/>
      </head>
      <body>
        <AppProvider>
          <div className="main">
            <div />
          </div>
          <main className="bg-primary w-full overflow-hidden">
            <Nav />
            {children}
            <Foot />
          </main>
        </AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;
