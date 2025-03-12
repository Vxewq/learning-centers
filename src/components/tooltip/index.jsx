import { Rating } from '@material-tailwind/react'
import './style.scss'

export default function TooltipInfo({name, rating, branches, fields}){
    return <div className="container-tooltip">
        <div className="tooltip">
            <h1>{name}</h1>
            <Rating value={rating} readonly />
            <ul>
                <li>{branches} Branches</li>
                <li>{fields} Fields</li>
            </ul>
        </div>
    </div>
}