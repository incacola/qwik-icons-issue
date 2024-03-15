import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { InMenu, InThreePointsCircle} from "@qwikest/icons/iconoir"

export default component$(() => {
  return (
    <>
      <nav  class="h-16 shadow-md items-center flex px-4">
        <div class="flex-grow">
          <InThreePointsCircle />
        </div>
        <div>
          <InMenu />
        </div>
      </nav>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
