import Link from "next/link";
import { Button, Header } from "ui";

export default function Page() {
  return (
    <>
      <Header text="Web" />
      <Button />
      <Link href="/test">link</Link>
    </>
  );
}
