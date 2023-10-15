"use client"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Card className="w-80 mx-auto mt-16 shadow-glass backdrop-blur-[10px]  border-1 bg-black/50">
        <CardHeader>
          <CardTitle className="text-white">Hey, I&apos;m Bytemax</CardTitle>
        </CardHeader>
        <CardContent className="text-white">
          <p>and I&apos;m having fun writing code.</p>
        </CardContent>
      </Card>
      <Card className="w-80 mx-auto mt-40 shadow-glass backdrop-blur-[10px] border-1 bg-black/50">
        <CardHeader>
          <CardTitle className="text-white">My work</CardTitle>
        </CardHeader>
        <CardContent>
          <Card className="shadow-glass backdrop-blur-[10px] border-1 bg-black/50">
            <Link className="flex" href={'projects/dare_to_share'}>
              <CardContent className="m-auto">
                <Image
                  className="mt-5 rounded-md"
                  src={"/dare_to_share_icon.png"}
                  alt="dare to share icon"
                  width={50}
                  height={50}
                >
                </Image>
              </CardContent>
              <CardContent className="pt-8">
                <span className="text-white">
                  Dare to Share
                </span>
              </CardContent>
            </Link>
          </Card>
        </CardContent>
      </Card>
    </>
  );
}
