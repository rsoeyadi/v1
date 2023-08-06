import { getAboutInformation } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

export default async function Home() {
  const aboutInformation = await getAboutInformation();

  return (
    <>
    <div class="h-screen flex">
  <!-- Fixed sidebar -->
  <div class="bg-gray-600 w-64">
    <!-- Sidebar content -->
  </div>
  <!-- Scroll wrapper -->
  <div class="flex-1 flex overflow-hidden">
    <!-- Scrollable container -->
    <div class="flex-1 overflow-y-scroll">
      <!-- Your content -->
    </div>
  </div>
</div>

      <div className="sticky top-0">COLUMN 1</div>
      <div className="text-lg text-gray-700">
        <PortableText value={aboutInformation.content} />
        <PortableText value={aboutInformation.content} />
        <PortableText value={aboutInformation.content} />
        <PortableText value={aboutInformation.content} />
        <PortableText value={aboutInformation.content} />
        <PortableText value={aboutInformation.content} />
      </div>
    </>
  );
}
