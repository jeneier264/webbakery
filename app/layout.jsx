import "@styles/globals.css";
import Nav from "@components/Nav";
import Foot from "@components/Foot";
import Provider from "@components/Provider";

export const metadata = {
  title: "WebBakery",
  description: "Discover & share baking recepies",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div />
          </div>

          <main className="bg-primary w-full overflow-hidden">
            <Nav />
            {children}
            <Foot />
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
