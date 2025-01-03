import { ProductSection } from "./ProductSection";
import { LightSectionTitleHighlight } from "./LightSectionTitleHighlight";
import { Mark } from "@mantine/core";

export function GeneratedSdkSnippets() {
  return (
    <ProductSection
      reverse
      graphicBottom
      parent="Docs"
      Section={() => (
        <>
          User Generated{" "}
          <LightSectionTitleHighlight>
            SDK Code Snippets
          </LightSectionTitleHighlight>
        </>
      )}
      Description={() => (
        <ul className="list-disc list-inside space-y-2">
          <li>
            <Mark>Efficiently onboard customers</Mark> in any language.
          </li>
          <li>
            Enable developers to easily copy and paste the required code
            directly from your documentation. No manual updates needed on your
            end.
          </li>
        </ul>
      )}
      Visual={() => (
        <video
          className="rounded-xl bg-video-bg shadow-xl w-full lg:w-3/5 p-2 lg:p-6"
          playsInline
          autoPlay
          muted
          loop
          src="/video/typing-quick.mov"
        />
      )}
    />
  );
}
