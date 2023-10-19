import MainAppShell from "../components/MainAppShell";
import MainSection from "../components/ReferralPageSections/MainSection";

export const metadata = {
  title: "Referral | Tarang'23",
  description:
    "Refer your friends to Tarang'23 and get discounts on events, pro nights, and accommodation.",
  keywords:
    "Tarang, Tarang'23, IIITDMJ Cultural Fest, Referral, Refer, Discounts, Events, Pro Nights, Accommodation",
};

export default function Referral() {
  return (
    <>
      <MainAppShell>
        <MainSection />
      </MainAppShell>
    </>
  );
}
