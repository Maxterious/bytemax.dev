"use client"
import Image from "next/image";
import { useRouter } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Key } from "lucide-react";

export default function Home() {
  const router = useRouter();
  
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
          <CardTitle className="text-white">Hey, I&apos;m Bytemax</CardTitle>
        </CardHeader>
        <CardContent className="text-white">
          <p>and I&apos;m having fun writing code.</p>
        </CardContent>
      </Card>
      <Card className="w-80 mx-auto mt-40 shadow-glass backdrop-blur-[10px]  border-1 bg-black/50">
        <CardHeader>
          <CardTitle className="text-white">My work</CardTitle>
        </CardHeader>
        <CardContent>
         <Card
            onClick={() => router.push('projects/dare_to_share')}
            className="shadow-glass backdrop-blur-[10px]  border-1 bg-black/50 inline-flex "
          >
            <CardContent >
              <Image
                className="mt-5 rounded-md"
                src={"/dare_to_share_icon.png"}
                alt="dare to share icon"
                width={50}
                height={50}
              >
              </Image>
            </CardContent>
            <CardContent className="mt-8">
              <span className="text-white">
                Dare to Share
              </span>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </>
  );
}
