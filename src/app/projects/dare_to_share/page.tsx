"use client"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";
import { ListItem } from "@/components/ui/list-item";
import Image from "next/image";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

export default function DareToShare() {
    return (
        <>
            <NavigationMenu className="w-80 mx-auto p-3 rounded-md bg-black/50 text-white">
                <NavigationMenuList>
                    <NavigationMenuItem className="flex flex-col justify-center items-center">
                        <NavigationMenuTrigger>My work</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <Link href="/projects/dare_to_share">
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Dare to Share
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <div className="flex-col">
                <Card className="w-80 mx-auto mt-16 shadow-glass backdrop-blur-[10px] border-1 bg-black/50">
                    <div className="flex ml-10">
                        <CardContent>
                            <Image
                                className="mt-5 rounded-md"
                                src={'/dare_to_share_icon.png'}
                                alt="dare to share icon"
                                width={50}
                                height={50}
                            ></Image>
                        </CardContent>
                        <CardContent className="flex items-center p-0">
                            <span className="text-white text-left">Dare to Share</span>
                        </CardContent>
                    </div>
                    <CardFooter className="w-full pb-2 justify-center">
                        <a href='https://play.google.com/store/apps/details?id=com.dareToShare.dare_to_share.prod&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' target="_blank">
                            <img
                                className="w-40 mx-auto"
                                alt='Get it on Google Play'
                                src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
                            />
                        </a>
                    </CardFooter>
                </Card>

                <Card className="w-80 mx-auto mt-12 shadow-glass backdrop-blur-[10px] border-1 bg-black/80">
                    <CardContent className="text-white pt-3">
                        <p>Dare to Share is designed to be a fun and loosening up party game.</p>
                        <br />
                        <p>It&apos;s currently only available at the Google Play Store.</p>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}