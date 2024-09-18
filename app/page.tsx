"use client";

import Image from "next/image";
import ContentstackLivePreview from "@contentstack/live-preview-utils";
import { getPage } from "@/lib/contentstack";
import { useEffect, useState } from "react";
import { Page } from "@/lib/types";

export default function Home() {
  const [page, setPage] = useState<Page>();

  const getContent = async () => {
    const page = await getPage("/");
    setPage(page);
  };

  useEffect(() => {
    ContentstackLivePreview.onEntryChange(getContent);
  }, []);

  return (
    <main className="max-w-screen-2xl mx-auto">
      <section className="p-4">
        {page?.title ? (
          <h1
            className="text-4xl font-bold mb-4"
            {...(page?.$ && page?.$.title)}
          >
            {page?.title}
          </h1>
        ) : null}

        {page?.description ? (
          <p className="mb-4" {...(page?.$ && page?.$.description)}>
            {page?.description}
          </p>
        ) : null}

        {page?.image ? (
          <Image
            className="mb-4"
            width={300}
            height={300}
            src={page?.image.url}
            alt={page?.image.title}
            {...(page?.image?.$ && page?.image?.$.url)}
          />
        ) : null}

        {page?.rich_text ? (
          <div
            {...(page?.$ && page?.$.rich_text)}
            dangerouslySetInnerHTML={{ __html: page?.rich_text }}
          />
        ) : null}
      </section>
    </main>
  );
}
