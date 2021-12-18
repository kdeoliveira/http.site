import React, { ReactElement, ReactNode, Suspense, useEffect, useRef, useState } from "react";
import Loader from "../Loader";
import { importLazy } from "../hooks/useDelay.hooks";
import { withRouter, RouteComponentProps } from "react-router-dom";

type childrenApp = {
    main: ReactNode | string,
    apps: ReactNode[],
    addons?: ReactNode,
    deps?: string[],
    alt?: string
}
interface ApplicationProps extends RouteComponentProps{
    children: childrenApp
    delay: number
}


//Dynamically loads the components for this Application as a lazy import and sets up routing
const Application: React.FC<ApplicationProps> = ({ children, delay, ...props }): ReactElement => {

    const [components, setComponents] = useState<any>({});
    const [log, setLog] = useState<string[]>([]);




    useEffect(() => {
        const load = async () => {
            let Views;
            if(process.env.NODE_ENV === "development"){
                Views = await importLazy(delay)((children.main as any).type.name)
                log.push((children.main as any).type.name);
            }else{
                Views = await importLazy(delay)(children.main as string)
                log.push(children.main as string);
            }
            
            children.deps && log.push(...children.deps)

            

            Promise.resolve(
                
                setComponents({
                    ...components,
                    main : <Views key={Math.random()*10} />})
                
                )

            
            
            if (Array.isArray(children.apps) && children.apps.length > 0) {

                const lazy = children.apps.map(async (x : any, i : number) => {


                    if ((x as any).type === "div") {
                        return <div key={i}>{x}</div>;
                    } else {
                        const Views = await importLazy(delay)((x as any).type.name || (x as any).type.type.name);
                        log.push((x as any).type.name || (x as any).type.type.name);
                        return <Views key={i + 1} />
                    }

                })

                Promise.all(lazy).then((x) => setComponents({
                    ...components,
                    apps: x
                }));
            }
        }

        load();

        return () => {
            // setLog([]);
            setComponents({});
        }


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [children])


    useEffect(() => {

        const handleClick = (e : KeyboardEvent) => {
            if(e.altKey && e.ctrlKey && e.key === "2")  {
                setLog([])
                props.history.push(children.alt ? children.alt : "/")
            }
        }


        // console.log("HERE", div)
        window.addEventListener("keydown", handleClick)

        return () => {
            window.removeEventListener("keydown",handleClick)
        }

    }, [children.alt, props])



    return (
            <Suspense fallback={<Loader log={log} delay={delay} />} >
                        {components.main}
            </Suspense>
    )
}

export default withRouter(Application);

