import { Progress } from "@/components/ui/progress";
import { useExitModal } from "@/store/use-exit-modal";

import { X } from "lucide-react";
import Image from "next/image";

type Props = {
    corazones: number;
    porcentaje: number;
};

export const Header = ({
    corazones,
    porcentaje,
}: Props) => {
    const { open } = useExitModal();

    return (
        <header className="lg:pt-[50px] pt-[20px] px-10 flex gap-x-7 items-center justify-between max-w-[1140px] mx-auto w-full">
            <X
                onClick={open}
                className="text-slate-500 hover:opacity-75 transition cursor-pointer"
            />
            <Progress value={porcentaje} />
            <div className="text-rose-500 flex items-center font-bold">
                <Image
                src="/l2.png"
                height={28}
                width={28}
                alt="Corazon"
                className="mr-2"
                />
                {corazones}
            </div>
        </header>
    );
};