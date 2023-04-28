import { Inter } from "next/font/google";
import { MainLayout } from "../components/layout/MainLayout";
import {  DarkLayout } from "../components/layout/DarkLayout"
import styles from "../styles/general.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <>
        <h1>About Page</h1>
        <h1 className={styles.description}>
          Ir a <Link href="/">Home</Link>
        </h1>
    </>
  );
}



About.getLayout = function getLayout( page: JSX.Element ) {
  return (
    
    <MainLayout>
      <DarkLayout>
       { page }
      </DarkLayout>
    </MainLayout>
    
  )
}