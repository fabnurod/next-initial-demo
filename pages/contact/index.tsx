import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "../../styles/general.module.css";
import { MainLayout } from "../../components/layout/MainLayout";
const inter = Inter({ subsets: ["latin"] });

export default function ContactPage() {
  return (
    <>
      <MainLayout>
        <h1>Contact Page</h1>
        <h1 className={styles.title}>
          Ir a <Link href="/">Home</Link>
        </h1>
      </MainLayout>
    </>
  );
}
