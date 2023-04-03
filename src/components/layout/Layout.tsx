import Header from "~/components/layout/Header";
import Footer from "~/components/layout/Footer";

import BottomSpotGradient from "~/components/gradients/BottomSpotGradient";
import TopSpotGradient from "~/components/gradients/TopSpotGradient";
import Meta, {type PageMeta} from '~/components/layout/Meta';

export default function Layout({children, pageMeta}: { children: JSX.Element, pageMeta: PageMeta }) {
  return (
    <>
      <Meta pageMeta={pageMeta} />
      <Header />
      <main role="main" className="flex-grow">
        <TopSpotGradient />
        {children}
        <BottomSpotGradient />
      </main>
      <Footer />
    </>
  )
}
