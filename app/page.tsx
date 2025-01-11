import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import SocialProof from '../src/components/widgets/SocialProof';
import Features from '~/components/widgets/Features';
import Content from '~/components/widgets/Content';
import Steps from '~/components/widgets/Steps';
import Testimonials from '~/components/widgets/Testimonials';
import FAQs2 from '~/components/widgets/FAQs2';
import Pricing from '~/components/widgets/Pricing';
import Team from '~/components/widgets/Team';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import {
  callToAction2Home,
  contactHome,
  contentHomeOne,
  contentHomeTwo,
  faqs2Home,
  featuresHome,
  heroHome,
  pricingHome,
  socialProofHome,
  stepsHome,
  teamHome,
  testimonialsHome,
} from '~/shared/data/pages/home.data';
import Banner from '~/components/common/Banner';
import Testimonials2 from '~/components/widgets/Testimonials2';
import { testimonials2About } from '~/shared/data/pages/about.data';
import { testimonialsServices } from '~/shared/data/pages/services.data';
import Services from '~/components/widgets/Services';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Banner/>
      {/* <Hero {...heroHome} /> */}
      {/* <SocialProof {...socialProofHome} /> */}
      <Features {...featuresHome} />
      {/* <Services/> */}
      <Content {...contentHomeOne} />
      {/* <Content {...contentHomeTwo} /> */}
      <Steps {...stepsHome} />
      {/* <Testimonials {...testimonialsHome} /> */}
      {/* <Testimonials2 {...testimonials2About} /> */}
      <Testimonials {...testimonialsServices} />
      <FAQs2 {...faqs2Home} />
      {/* <Pricing {...pricingHome} /> */}
      {/* <Team {...teamHome} /> */}
      <Contact {...contactHome} />
      {/* <CallToAction2 {...callToAction2Home} /> */}
    </>
  );
}
