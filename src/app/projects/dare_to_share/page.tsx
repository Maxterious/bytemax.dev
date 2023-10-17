import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";


export default function DareToShare() {
    return (
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
                    <a href='https://play.google.com/store/apps/details?id=com.dareToShare.dare_to_share.prod&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                        <img
                        className="w-40 mx-auto"
                            alt='Get it on Google Play'
                            src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
                        />
                    </a>
                </CardFooter>
            </Card>

            <Card className="w-80 mx-auto mt-40 shadow-glass backdrop-blur-[10px] border-1 bg-black/80">
                <CardContent className="text-white pt-3">
                    <p>Dare to Share is designed to be a fun and loosening up party game.</p>
                    <br />
                    <p>It&apos;s currently only available at the Google Play Store.</p>

                    <br />
                    <p>Because it&apos;s written in dart with flutter, the effort to release it for iOS is not that high.</p>
                </CardContent>
            </Card>
        </div>
    );
}