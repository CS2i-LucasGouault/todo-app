export function LittleCounter({count} : {count: number}) {
    return <>
        <div>
            <h6>tasks: <span class="badge bg-success">{count}</span></h6>
        </div>
    </>
}