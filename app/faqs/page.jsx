import MainAppShell from "@/app/components/MainAppShell";
import FaqsBody from "@/app/components/FAQsPageSections/FaqsBody";
import faqsData from "./faqsData.json"; 

export default function faqs(){
    return (
        <MainAppShell>
            <FaqsBody faqsData = {faqsData}/>
        </MainAppShell>
    )
}