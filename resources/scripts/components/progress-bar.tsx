import React, { useEffect } from "react";
import { useNavigation, useFetchers } from "react-router";
import NProgress from "nprogress";

// https://github.com/remix-run/react-router/discussions/10954#discussioncomment-7361086
export default function ProgressBar() {
    const navigation = useNavigation();
    const fetchers = useFetchers();

    useEffect(() => {
        const fetchersIdle = fetchers.every((f) => f.state === 'idle');
        if (navigation.state === "idle" && fetchersIdle) {
            NProgress.done();
        } else {
            NProgress.start();
        }
    }, [navigation, fetchers]);

    return null;
}
