import Page from "@/components/page-component";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import React from "react";

export default function Content() {
    return (
        <Page title="Content">
            <div className="w-full h-svh p-5 bg-green-500/10">
                <div className="bg-white h-16 rounded-md w-full border-2 border-b-8 border-[#ffe35a] flex justify-between p-5 items-center">
                    <div className="flex gap-5 h-full items-center">
                        <Button variant="icon">
                            <Icon icon="mingcute:back-fill" className="text-black/60" />
                        </Button>
                        <h1>Future prep</h1>
                        <div className="h-fit w-fit px-5 py-1 bg-[#ffe35a] rounded-full border border-black/10 justify-center gap-2.5 inline-flex items-center">
                            <h1>Judul / Bab / Sub-bab</h1>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <Button variant="icon">
                            <Icon icon="grommet-icons:link-next" className="text-black/60 rotate-180" />
                            {/*<h1>Sebelumnya</h1>*/}
                        </Button>
                        <Button variant="icon">
                            <Icon icon="grommet-icons:link-next" className="text-black/60" />
                            {/*<h1>Selanjutnya</h1>*/}
                        </Button>
                    </div>

                </div>
            </div>
        </Page>
    )
}