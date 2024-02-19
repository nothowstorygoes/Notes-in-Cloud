"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Head from "next/head";




const LandingPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Apply styles to the body element
    document.body.style.overflowY = "hidden";

    // Clean up the style when the component unmounts
    return () => {
      document.body.style.overflowY = "";
    };
  }, []);

  return (
    <>
      <Head>
        <style>{`
                    body {
                        overflow-y: hidden;
                    }
                `}</style>
      </Head>
      <main>
        <div className={styles.container}>
          <p className={styles.title}>Notes in Cloud</p>
          <div className={styles.buttonContainer}>
            <button
              onClick={() => router.push("components/login")}
              className={styles.button}
            >
              Login
            </button>
            <button
              onClick={() => router.push("/components/signUp")}
              className={styles.button}
            >
              Sign Up
            </button>
          </div>
          <p className={styles.paragraph}>
            Notes in Cloud is a PWA that uses Firebase Web API to store your notes
            in PDFs, letting you bring your classes' notes on every
            device
            you need.<br />
          </p>
          <p className={styles.footer}>Powered by NextJS framework <br /> Made by &nbsp;
            <a href="https://www.github.com/nothowstorygoes"> 
            Pio Alessandro Esposito
            </a></p>
        </div>
      </main>
    </>
  );
};

export default LandingPage;
