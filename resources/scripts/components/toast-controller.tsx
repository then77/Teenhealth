import { useEffect } from "react";
import toast, { useToasterStore } from "react-hot-toast";

export default function ToastController() {
    const { toasts } = useToasterStore();
    useEffect(() => {
        toasts
            .filter((t) => t.visible)
            .filter((_, i) => i >= 3)
            .forEach((t) => toast.dismiss(t.id));
    }, [toasts]);

    return null;
}