import { MainLayout } from "../../components/layout/MainLayout";
import styles from "../../styles/general.module.css";
import React from "react";
import Link from "next/link";

export default function Index() {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>
      <h1 className={styles.title}>
        Ir a <Link href="/">Home</Link>
      </h1>
    </MainLayout>
  );
}
