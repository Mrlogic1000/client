interface CardProps{
    title:string,
    name:string
}

const Title =({title,name}:CardProps)=>{
    return <>

    <div className="flex gap-2 text-left">
    <span className='flex-1 mb-2'>{name}</span>
    <span className='flex-1 mb-2'>{title}</span>
    </div>
    
    
    </>
}

export default Title