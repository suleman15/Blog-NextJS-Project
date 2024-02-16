import { Card, CardContent } from "@/components/ui/card";
import { client, urlFor } from "./lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const revalidate = 30; // revalidate at most 30 seconds

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
      "smallDescription": titleSmallDescription, 
      "currentSlug": slug.current,
      titleImage
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const data = await getData();

  console.log(data);

  return (
    <div className="grid  gap-3 grid-cols-3  max-md:grid-cols-2">
      {data.map((post, idx) => (
        <Link href={`/blog/${post.currentSlug}`}>
          <Card key={idx}>
            <Image
              src={urlFor(post.titleImage).url()}
              alt="image"
              width={500}
              height={500}
              className="rounded-t-lg h-[200px] object-cover w-full"
            />

            <CardContent className="mt-5">
              <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
              <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
                {post.smallDescription}
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
