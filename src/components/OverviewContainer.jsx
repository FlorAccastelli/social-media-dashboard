import data from '../../data/data.json';
import { OverviewCard } from './OverviewCard';

export const OverviewContainer = () => {
    return (
        <section className='w-[326px] absolute top-[191px] left-0 right-0 mx-auto'>
            {
                data.overview.map(element => {
                    return <OverviewCard 
                    key={element.id}
                    user= {element.user}
                    audience={element.audience}
                    audienceType={element.audienceType}
                    network={element.network}
                    isUp={element.isUp}
                    today={element.today}
                    />
                })
            }
        </section>
        
    )
}