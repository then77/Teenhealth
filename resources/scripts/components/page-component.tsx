import React, { useEffect } from 'react';

export default function Page(
    { title, children }:
    { title: string, children?: React.ReactNode }
) {
    useEffect(() => {
        document.title = `${title} - Teenhealth`;
    }, [title]);

    return children;
}
