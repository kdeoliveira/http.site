import DOMPurify from "dompurify";
import { ReactElement, useEffect } from "react";

const LsDisplay = (vals : string[]) : ReactElement => {
    return (
        <>
            {vals.map((x, i) => (
                <div key={i} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(x, {USE_PROFILES: {html: true}, ALLOWED_TAGS: ['font', 'b', 'div'] } ) }} style={{
                    flexBasis: `${vals.length*25}px`,
                    justifyContent: "space-around"
                }}/>
            ))}
        </>
    )
}

export default LsDisplay;