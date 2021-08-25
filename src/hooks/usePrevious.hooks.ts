import { useEffect, useRef } from "react";

export default function usePrevious<T>(value: T) :T {
    const ref : any = useRef<T>();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    console.log(ref.current)

    return ref.current;
}