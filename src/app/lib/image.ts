import thisWebsiteImg from "../assets/this-website.png";
import joshImg from "../assets/josh.png";
import seeandsayImg from "../assets/seeandsay.png";
import { StaticImageData } from "next/image";

const map = new Map<string, StaticImageData>();
map.set("josh", joshImg);
map.set("seeandsay", seeandsayImg);
map.set("this-website", thisWebsiteImg);

export function getImage(id: string) {
  return map.get(id);
}
