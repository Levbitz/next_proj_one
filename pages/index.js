import Head from "next/head";
import Image from "next/image";
import ContactForm from "../componets/ContactForm/ContactForm";
import Footer from "../componets/Footer/Footer";

import Grides from "../componets/HomeComponents/Grids/Grides";
import Navbar from "../componets/Navbar/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page Next Js</title>
      </Head>

      <div className={styles.showcase}>
        <Navbar />
        <div className={styles.content}>
          <div className="container">
            <div className="row">
              <div className="col l6"></div>
              <div className="col l6">
                <span>Event Conference</span>
                <h3>
                  <span>Am Sarvan</span> A Graphic Designer
                </h3>
                <p>
                  Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                  ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Non quae, ad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Grides />

      <ContactForm />
      <Footer />
    </div>
  );
}
