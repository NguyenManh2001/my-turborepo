import Link from "next/link";
import { Button, Header } from "ui";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <Header text="Web" />
      <Button /> 
      <Link href="/">Home page</Link>
      <h1>My Post: {params.slug}</h1>
    </>
  );
}
