import OrgChart from "@balkangraph/orgchart.js";
import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom";

interface Props {
    nodes: any[];
    onClick: (id: number) => void;
}
export function Tree({ nodes, onClick }: Props) 
{
    const divRef = useRef(null);
    const navigate = useNavigate();

    function handleOnClick(sender: any, args: any) {
        // alert(args.node.id);
        navigate(`/view/${args.node.id}`);
        return false;
    }

    useEffect(() => {
        if(!divRef.current) return;

        const chart = new OrgChart(divRef.current, {
            nodes,
            enableSearch: false,
            template: "ula",
            nodeBinding: {
                field_0: "name",
                field_1: "title",
                img_0: "img"
            },
        });

        chart.on('click', handleOnClick);
    });

    return (
        <div id="tree" ref={divRef}></div>
    )
}