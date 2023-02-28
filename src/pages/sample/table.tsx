import { ColumnDef, Row } from "@tanstack/react-table";
import { SyntheticEvent, useEffect, useState } from "react"
import { ReactTable } from "~/components/_shared/controls/table/ReactTable";


type ISampleTableInfo = {
    UserName: string,
    Role: string,
    Age: number
}

const SampleTable: React.FC = () => {

    const [entityList, setEntityList] = useState([] as ISampleTableInfo[]);

    useEffect(() => {

        let count = 0; 
        let maxCount = 30;
        let localEntityList: ISampleTableInfo[] = [];

        while(count <= maxCount){
            count++;
            localEntityList.push({UserName: `Jhon Doe ${count}`, Role: `Developer ${count}`, Age: (30 + count)});
        }

        setEntityList(localEntityList);
        

        
    }, [])


    const columns: ColumnDef<ISampleTableInfo>[] = [
        {
            accessorKey: "UserName",
            id: "username",
            header: "User",
            cell: info => info.getValue(),
        }
        , {
            accessorKey: "Role",
            id: "role",
            header: "Role",
            cell: info => info.getValue()
        }, {
            accessorKey: "Age",
            id: "age",
            header: "Age",
            cell: info => info.getValue()
        }
    ]

    const onRowclick = (e: SyntheticEvent, row: Row<ISampleTableInfo>) => {
       //row contains data
    }

    return (
        <div>
        <ReactTable data={entityList} columns={columns} showPagination={true} _onRowClick={onRowclick} />
        </div>
    )
}


export default SampleTable;