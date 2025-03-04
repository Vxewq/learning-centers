import './style.scss'

export default function Tooltip({info}){
    return <div className="container-tooltip">
        <div className="tooltip">
            <h1>{}</h1>
            <h1>{}</h1>
        </div>
    </div>
}