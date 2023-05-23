import './links.css'



const LogoLink = ({icon, title,link}) => {
    return(
        
                <a type='span' href={link} className="flex-container" target="_blank">
                <div className="flex-items"  >
                    {icon}
                    </div>
                <div className="flex-items"> 
                <span >{title}</span>
                </div>
                </a>
            
           
     
    )
};

export default LogoLink;