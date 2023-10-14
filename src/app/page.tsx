import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <div>
        <Image
          className="-z-10 blur-"
          src={"/background.svg"}
          alt="Background image"
          style={{ objectFit: "cover" }}
          fill={true}
        />
      </div>
      <Card className="w-80 mx-auto mt-16 shadow-glass backdrop-blur-[10px]  border-1 bg-black/50">
        <CardHeader>
          <CardTitle className="text-white">Hey, I'm Bytemax</CardTitle>
        </CardHeader>
        <CardContent className="text-white">
          <p>and I'm having fun writing code.</p>
        </CardContent>
      </Card>
      <Card className="w-80 mx-auto mt-40 shadow-glass backdrop-blur-[10px]  border-1 bg-black/50">
        <CardHeader>
          <CardTitle className="text-white">My projects</CardTitle>
        </CardHeader>

        {/* Card carousel with my projects */}

      </Card>
    </>
  );
}
